const _ = require('lodash');
const fs = require('fs-extra');
const Mustache = require('mustache');
const hash = require('object-hash');

const redirectDir = 'pages/redirects/';

const REDIRECTS =
	[ {from: "/subscribe_newsletter", to: "/"}
	];

const template = fs.readFileSync('redirect.md.template', { encoding: 'utf8' });

// Create event .md file
const createRedirect = (redirect) => {
  fs.writeFileSync(
    `${redirectDir}redirect_${hash(redirect)}.md`,
    Mustache.render(template, {
      redirect_from: redirect.from,
      redirect_to: redirect.to
	})
  );
};

// Clear out any existing generated .md event files
if (fs.existsSync(redirectDir)) {
  fs.removeSync(redirectDir);
}
fs.mkdirSync(redirectDir);

// Get redirects
REDIRECTS.forEach(createRedirect);
