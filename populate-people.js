/* eslint-disable */
const path = require('path');
const _ = require('lodash');
const fs = require('fs-extra');
const Mustache = require('mustache');

const peopleDir = path.join(__dirname, 'pages/people/');
const template = fs.readFileSync('person.md.template', { encoding: 'utf8' });

// Create event .md file
const createPerson = ([name, role]) => {
  const slug = _.kebabCase(name);
  fs.mkdirSync(path.join(peopleDir, slug));

  fs.writeFileSync(
    `${peopleDir}${slug}/index.md`,
    Mustache.render(template, {
      name,
      role,
      image: `${slug}.jpg`,
    }),
  );
};

// Clear out any existing generated .md event files
if (fs.existsSync(peopleDir)) {
  fs.removeSync(peopleDir);
}
fs.mkdirSync(peopleDir);

[
  ['Adel Foda', 'Data scientist'],
  ['Alice Coulson', 'Studio manager'],
  ['Andy Carson', 'Designer, Developer'],
  ['Andy Kitchen', 'Data scientist, Software engineer'],
  ['Chris Bird', 'Software engineer'],
  ['James Sofra', 'Software engineer'],
  ['Jonathan Chang', 'Producer'],
  ['Kirill Radzikhovskyy', 'Software engineer'],
  ['Logan Campbell', 'Sofware engineer'],
  ['Lyndon Maydwell', 'Data scientist, Software engineer'],
  ['Martin Ingram', 'Data scientist'],
  ['Noon van der Silk', 'Data scientist, Software engineer'],
].forEach(createPerson);
