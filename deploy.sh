#!/bin/bash

echo "setting config"
git config --global user.email "info@silverpond.com.au"
git config --global user.name "Travis CI"

echo "init repo + commit"
cd public
git init
git add .
git commit -m "Deploy to Github Pages"

echo "deploying"
git push --force --quiet "https://${GITHUB_API_KEY}@github.com/silverpond/silverpond-website" master:gh-pages > /dev/null 2>&1
