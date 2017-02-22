const _ = require('lodash');
const Client = require('node-rest-client').Client;
const fs = require('fs-extra');
const Mustache = require('mustache');

const meetups = [
  {
    apiLink: 'https://api.meetup.com/Melbourne-Haskell-Users-Group/events?photo-host=public&page=20&sig_id=144437602&sig=4710da284f67f75fe5f362237012caf911da03c7',
    host: 'Lyndon Maydwell'
  },
  {
    apiLink: 'https://api.meetup.com/Melbourne-Functional-User-Group-MFUG/events?photo-host=public&page=20&sig_id=144437602&sig=98a300693323377db293e89b49519cab359f8d74',
    host: 'Logan Campbell'
  },
  {
    apiLink: 'https://api.meetup.com/clj-melb/events?photo-host=public&page=20&sig_id=144437602&sig=28fe70a7678c63886bf70e0e5ebdae498e44ee48',
    host: 'James Sofra'
  },
  {
    apiLink: 'https://api.meetup.com/The-Melbourne-Maths-and-Science-Meetup/events?photo-host=public&page=20&sig_id=144437602&sig=8aa8c61e748bb5215c6da8a05de1172556de5ec6',
    host: 'Noon Silk'
  },
  {
    apiLink: 'https://api.meetup.com/Rust-Melbourne/events?photo-host=public&page=20&sig_id=144437602&sig=a41c1bef0951aef42597e6fe83b949827e3e9c33',
    host: 'Alfie John'
  },
  {
    apiLink: 'https://api.meetup.com/Machine-Learning-AI-Meetup/events?photo-host=public&page=20&sig_id=144437602&sig=5133e445bcc55992901cfd30018c43da176710a1',
    host: 'Andy Kitchen'
  }
];

const client = new Client();
const eventDir = 'pages/meetup-events/';

// Create event .md file
const createEvent = (event, host) => {
  const template = fs.readFileSync('event.md.template', { encoding: 'utf8' });

  fs.writeFileSync(
    `${eventDir}${event.time}.md`,
    Mustache.render(template, {
      title: event.name,
      slug: `${_.kebabCase(event.name)}-${event.time}`,
      date: new Date(event.time),
      venue: event.venue,
      body: event.description,
      attendLink: event.link,
      host: host
    })
  );
};

// Clear out any existing generated .md event files
if (fs.existsSync(eventDir)) {
  fs.removeSync(eventDir);
}
fs.mkdirSync(eventDir);

// Get events from meetup.com and create event .md files
meetups.forEach(meetup => {
  client.get(meetup.apiLink, events => {
    events.forEach(event => {
      createEvent(event, meetup.host);
    });
  });
});
