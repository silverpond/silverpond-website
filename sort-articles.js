/* eslint-disable */
const _ = require('lodash');
const Client = require('node-rest-client').Client;
const fs = require('fs-extra');
const Mustache = require('mustache');

const dir = 'pages/articles/';
const newDir = 'pages/book-reviews/';

fs.mkdirSync(newDir);

fs.readdir(dir, (err, files) => {
  files.forEach(fileName => {
    fs.readFile(
      `${dir}${fileName}/index.md`,
      { encoding: 'utf8' },
      (err, data) => {
        if (data.includes('layout: book')) {
          fs.renameSync(`${dir}${fileName}`, `${newDir}${fileName}`);
        }
      },
    );
  });
});
