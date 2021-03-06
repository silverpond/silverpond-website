import React from 'react';
import Helmet from 'react-helmet';

const HTML = (props: Object) => {
  const head = Helmet.rewind();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {props.headComponents}
        <link
          href="https://fonts.googleapis.com/css?family=Heebo:400,500,700|Volkhov"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="__gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
