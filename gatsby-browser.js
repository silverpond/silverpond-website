const redirectPaths = [
  ['/services', '/'],
  ['/subscribe_newsletter', '/'],
  [
    '/2016/10/24/pedestrian-detection-details',
    '/articles/2016-10-24-pedestrian-detection-using-tensorflow-and-inception/',
  ],
  ['/2016/11/04/industry-news', '/articles/2016-11-04-industry-news-nov-2016/'],
  [
    '/2017/02/17/multiclass-details',
    '/articles/2017-02-17-how-we-built-and-trained-an-ssd-multibox-detector-in-tensorflow/',
  ],
  [
    '/2017/02/27/deep-learning-book',
    '/articles/2017-02-28-deep-learning-book/',
  ],
  ['/hiring', 'articles/2017-03-06-silverpond-hiring/'],
];

const generateRedirects = paths => {
  return paths.map(([from, to]) => {
    return {
      path: from,
      onEnter: (nextState, replace) => replace(to),
    };
  });
};

exports.modifyRoutes = routes => {
  const redirects = generateRedirects(redirectPaths);

  // redirect routes are insterted second to last as last route
  // needs to be "*" to catch 404's
  routes.childRoutes.splice(routes.childRoutes.length - 1, 0, ...redirects);
  return routes;
};
