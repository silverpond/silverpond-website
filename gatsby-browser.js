const redirectPaths = [['/subscribe_newsletter', '/']];

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
