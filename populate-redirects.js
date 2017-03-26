/* eslint-disable comma-dangle */
const fs = require('fs-extra');
const Mustache = require('mustache');
const hash = require('object-hash');

const redirectDir = 'pages/redirects/';
const redirects = [{ from: '/subscribe_newsletter', to: '/' }];
const template = fs.readFileSync('redirect.md.template', { encoding: 'utf8' });

// Create event .md file
const createRedirect = redirect => {
  fs.writeFileSync(
    `${redirectDir}redirect_${hash(redirect)}.md`,
    Mustache.render(template, {
      redirectFrom: redirect.from,
      redirectTo: redirect.to,
    }),
  );
};

// Clear out any existing generated .md event files
if (fs.existsSync(redirectDir)) {
  fs.removeSync(redirectDir);
}
fs.mkdirSync(redirectDir);

// Get redirects
redirects.forEach(createRedirect);
