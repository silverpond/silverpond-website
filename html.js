import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const HTML = ({ body }: { body: string }) => {
  const head = Helmet.rewind();
  const BUILD_TIME = new Date().getTime();
  let css;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
};

export default HTML;
