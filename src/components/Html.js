import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    // eslint-disable-next-line react/forbid-prop-types
    app: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children } = this.props;
    return (
      <html className="no-js" lang={app.lang}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="google-site-verification" content="5UvmZeRtzrCtng9tHYaTrhyh4frHu9fABc1_PNTpsyo" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="logo" href="logo.png" />

          {/* Google SEO - International Targeting */}
          <link rel="alternate" href="https://www.ahofmb.com/" hrefLang="en-ca" />
          <link rel="alternate" href="https://www.ahofmb.com/about" hrefLang="en-ca" />
          <link rel="alternate" href="https://www.ahofmb.com/about?lang=en-US" hrefLang="en-ca" />
          <link rel="alternate" href="https://www.ahofmb.com/about?lang=zh-CN" hrefLang="zh-ca" />
          <link rel="alternate" href="https://www.ahofmb.com/services" hrefLang="en-ca" />
          <link rel="alternate" href="https://www.ahofmb.com/services?lang=en-US" hrefLang="en-ca" />
          <link rel="alternate" href="https://www.ahofmb.com/services?lang=zh-CN" hrefLang="zh-ca" />
          <link rel="alternate" href="https://www.ahofmb.com/contact" hrefLang="en-ca" />
          <link rel="alternate" href="https://www.ahofmb.com/contact?lang=en-US" hrefLang="en-ca" />
          <link rel="alternate" href="https://www.ahofmb.com/contact?lang=zh-CN" hrefLang="zh-ca" />
          {styles.map(style => (
            <style
              key={style.id}
              id={style.id}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />
          ))}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}/>
          {scripts.map(script => <script key={script} src={script} />)}
          {config.analytics.googleTrackingId &&
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html:
              'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
              `ga('create','${config.analytics.googleTrackingId}','auto');ga('send','pageview')` }}
            />
          }
          {config.analytics.googleTrackingId &&
            <script src="https://www.google-analytics.com/analytics.js" async defer />
          }
        </body>
      </html>
    );
  }
}

export default Html;
