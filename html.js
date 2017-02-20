import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render() {
    const { body } = this.props;
    const head = Helmet.rewind();
    let css;
    // if (process.env.NODE_ENV === 'production') {
    //   css = (
    //     <style
    //       dangerouslySetInnerHTML={{
    //         __html: require('!raw!./public/highlight.css'),
    //       }}
    //     />
    //   );
    // }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:400,500,700|Volkhov"
            rel="stylesheet"
          />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  },
});
