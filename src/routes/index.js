/* eslint-disable global-require */

// The top-level (parent) route
export default {
  path: "/",

  // Keep in mind, routes are evaluated in order
  children: [
    require("./home").default,
    require("./about").default,
    require("./services").default,
    require("./resources").default,
    require("./contact").default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require("./notFound").default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    //console.log(route);

    const description =
      "Majority of our diagnostics are done in clinic and we are able to narrow down the diagnosis for you.";

    // Provide default values for title, description etc.
    route.title = `${route.title} Hospital of Animal Kingdom`;
    route.description = route.description || description;

    return route;
  },
};
