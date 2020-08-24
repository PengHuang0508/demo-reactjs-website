import path from "path";
import Promise from "bluebird";
import express from "express";
import cookieParser from "cookie-parser";
import requestLanguage from "express-request-language";
import bodyParser from "body-parser";
import expressJwt, { UnauthorizedError as Jwt401Error } from "express-jwt";
import expressGraphQL from "express-graphql";
import jwt from "jsonwebtoken";
import React from "react";
import ReactDOM from "react-dom/server";
import { getDataFromTree } from "react-apollo";
import PrettyError from "pretty-error";
import { IntlProvider } from "react-intl";

import "./serverIntlPolyfill";
import createApolloClient from "./core/createApolloClient";
import App from "./components/App";
import Html from "./components/Html";
import { ErrorPageWithoutStyle } from "./routes/error/ErrorPage";
import errorPageStyle from "./routes/error/ErrorPage.css";
import createFetch from "./createFetch";
import router from "./router";
import models from "./data/models";
import schema from "./data/schema";
import assets from "./assets.json"; // eslint-disable-line import/no-unresolved
import configureStore from "./store/configureStore";
import { setRuntimeVariable } from "./actions/runtime";
import { setLocale } from "./actions/intl";
import config from "./config";

import nodemailer from "nodemailer";
import http from "http";
import enforce from "express-sslify";

const app = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || "all";

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(
  requestLanguage({
    languages: config.locales,
    queryName: "lang",
    cookie: {
      name: "lang",
      options: {
        path: "/",
        maxAge: 3650 * 24 * 3600 * 1000, // 10 years in miliseconds
      },
      url: "/lang/{language}",
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Express-SSLify
// Forcing the use of HTTPS by redirect all requests to HTTPS
//
/*app.use(enforce.HTTPS({ trustProtoHeader: true }));
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});*/

//
// Register API middleware
// -----------------------------------------------------------------------------
const graphqlMiddleware = expressGraphQL((req) => ({
  schema,
  graphiql: __DEV__,
  rootValue: { request: req },
  pretty: __DEV__,
}));

app.use("/graphql", graphqlMiddleware);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get("*", async (req, res, next) => {
  try {
    const apolloClient = createApolloClient({
      schema,
      rootValue: { request: req },
    });

    const fetch = createFetch({
      baseUrl: config.api.serverUrl,
      cookie: req.headers.cookie,
      apolloClient,
    });

    const initialState = {
      user: req.user || null,
    };

    const store = configureStore(initialState, {
      cookie: req.headers.cookie,
      apolloClient,
      fetch,
      // I should not use `history` on server.. but how I do redirection? follow universal-router
      history: null,
    });

    store.dispatch(
      setRuntimeVariable({
        name: "initialNow",
        value: Date.now(),
      })
    );

    store.dispatch(
      setRuntimeVariable({
        name: "availableLocales",
        value: config.locales,
      })
    );

    const locale = req.language;
    await store.dispatch(
      setLocale({
        locale,
      })
    );

    const css = new Set();

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach((style) => css.add(style._getCss()));
      },
      fetch,
      // You can access redux through react-redux connect
      store,
      storeSubscription: null,
      // Apollo Client for use with react-apollo
      client: apolloClient,
    };

    const route = await router.resolve({
      ...context,
      path: req.path,
      query: req.query,
      locale,
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };

    const rootComponent = (
      <App context={context} store={store}>
        {route.component}
      </App>
    );
    await getDataFromTree(rootComponent);
    // this is here because of Apollo redux APOLLO_QUERY_STOP action
    await Promise.delay(0);
    data.children = await ReactDOM.renderToString(rootComponent);
    data.styles = [{ id: "css", cssText: [...css].join("") }];
    data.scripts = [assets.vendor.js, assets.client.js];

    if (assets[route.chunk]) {
      data.scripts.push(assets[route.chunk].js);
    }

    // Furthermore invoked actions will be ignored, client will not receive them!
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.log("Serializing store...");
    }
    data.app = {
      apiUrl: config.api.clientUrl,
      state: context.store.getState(),
      lang: locale,
    };

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage("express");

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const locale = req.language;
  console.error(pe.render(err));
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{ id: "css", cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
      app={{ lang: locale }}
    >
      {ReactDOM.renderToString(
        <IntlProvider locale={locale}>
          <ErrorPageWithoutStyle error={err} />
        </IntlProvider>
      )}
    </Html>
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
models
  .sync()
  .catch((err) => console.error(err.stack))
  .then(() => {
    app.listen(config.port, () => {
      console.info(`The server is running at http://localhost:${config.port}/`);
    });
  });
