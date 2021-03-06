## Setup
`brew install vips`  Image processing tool
`yarn install`

## Development environment
`yarn run dev`

## Build command (local)
`yarn run build`

## Deploy
Website is currently being built and deployed through [travis ci](https://travis-ci.org/silverpond/silverpond-website), kicked off every time a commit is pushed to the repo.
`.travis.yml`
`deploy.sh`

## Build process
During the build process Gatsby will generate a page for all files in the `/pages` directory that are not prefixed by an underscore eg. `_template.js` to a `/public` directory.
So `/pages/articles.js` will generate `/pages/articles.html`, `/images/kittens.jpg` will generate `/images/kittens.jpg`
Markdown files are processed into a js object and passed as props to `/wrappers/md.js` which handles the specific rendering of each post type.

## Meetup events
Event pages for events from selected groups on meetup.com are generated as part of the deploy process controlled by `populate-meetup-events.js`.
Events are generated to `/pages/meetup-events/`.

## Adding posts
Currently the site supports `articles`, `case-studies`, `clients`, `events`, `people`.

### Folder structure
articles/2017-03-07-my-article-name/index.md  
articles/2017-03-07-my-article-name/my-image.jpg  
articles/2017-03-07-my-article-name/my-other-image.jpg  

`index.md` is for post content.  
All associated images are stored in the same folder.

### Drafts
Drafts for both articles and events can be created by adding a `draft: true` flag to the frontmatter of the post you wish to be in draft mode. While in draft mode the post can be viewed by navigating directly to the post url which is derived from the post folder path, eg: `/articles/2016-10-06-balancing-spark/`

The post will not appear in post indexes or in google search results.

### Article front matter
**category:** `articles`

**path**: `/articles/<slug>`
Where the article will be published.

**draft:** `true | false`  
Whether the article is in draft mode. While in draft mode the article can be viewed by navigating directly to the article url which is derived from the article folder path, eg: `/articles/2016-10-06-balancing-spark/`, but will not appear in the article index or google search results.

**featured:** `true | false`  
Whether article is displayed on the homepage and as a featured item on `/articles/` - only the first 2 featured items will display on the homepage and only the first featured item will display on `/articles/`.

**title**: `My great article`  
Article title.

**date**: `Wed Feb 15 2017 20:16:16 GMT+1100 (AEDT)`  
A date that can be parsed.

**author**: `Lyndon Maydwell`  
Author name - this must match the name (case and spelling) of someone stored in `/people` for the author to display on the article.

**meta**: `My great description...`  
A short summary/introduction for the article.  

**image**:  `my-great-image.jpg`  
Image that will be used as a splash image for the article.  

### Event front matter
**category:** `events`

**path**: `/events/<slug>`
Where the event will be published.

**draft:** `true | false`  
Whether the event is in draft mode. While in draft mode the event can be viewed by navigating directly to the event url which is derived from the event folder path, eg: `/events/2016-10-06-balancing-spark/`, but will not appear in the event index or google search results.

**featured:** `true | false`  
Whether event is displayed on the homepage and as a featured item on `/events/` - only the first 2 featured items will display on the homepage and only the first featured item will display on `/events/`.

**title**: `My great event`  
Article title.

**date**: `Wed Feb 15 2017 20:16:16 GMT+1100 (AEDT)`  
A date that can be parsed.

**intro**: `My great description...`  
A short summary/introduction for the event.  

**path**: `/events/my-great-event/`  
The path where the event should be available. (should default to... necessary because...)

**attendLink**: `https://meetup.com/my-great-event`  
Link to where users can sign up to attend.

**hosts**:  
A list of hosts running the events. Must be in the format:
```
hosts:
- Andy Kitchen
- Noon van der Silk
```
**venue**:  
Details on the location where the event is being held - used when generating maps and map links. Must be in the format:
```
venue:
  name: Silverpond office
  lat: -37.8155307
  lng: 144.9619365
  address: 382 Little Collins st
  city: Melbourne
  country: Australia
```

### Person front matter
**category**: `people`

**name**: `Lyndon Maydwell`  
Person's name

**image**: `lyndon-maydwell.jpg`  
Profile photo (currently preferring 400px x 400px)

**role**: `Data Scientist + Engineer`
Person's role (displayed on the team page)
**teamMember**: `true | false`  
Whether the Person is a current team member (controls whether they will appear as a team member on the `/about/` page).

### Client front matter
**category**: `clients`

**featured**: `true | false`  
Whether the client logo is displayed on the home page. Only the first 4 featured clients will be displayed on the home page.

**name**: `A great company name`  
The name of the client.

**image**: `great-company-logo.jpg`  
Client logo (landscape version if possible).
