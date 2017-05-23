// @flow
import s from 'string';
import { compact } from 'lodash';
import { prefixLink } from 'gatsby-helpers';

import { Page, PostCategory } from 'lib/type-defs';

// filter pages by category + filter out drafts
export const filterPagesByCategory = (
  pages: Page[],
  category: PostCategory,
): Page[] => {
  const regEx = new RegExp(`/${category}/.+`);
  return pages.filter(page => {
    if (page.path) {
      return regEx.test(page.path) && page.data.draft !== true;
    }
    return false;
  });
};

// filter for pages with `featured` flag set to true
export const findFeaturedPages = (pages: Page[]): Page[] => {
  return pages.filter(page => page.data.featured === true);
};

// remove selected pages from a list of pages
export const filterNot = (pages: Page[], nots: Page[]): Page[] => {
  return pages.filter(page => {
    let match = false;
    nots.forEach(not => {
      match = page.requirePath === not.requirePath;
    });
    return !match;
  });
};

// return the first two pages with the 'featured' flag from a category
export const getPromotedPages = (
  pages: Page[],
  category: PostCategory,
  amount?: number,
): Page[] => {
  const categoryPages = filterPagesByCategory(pages, category);
  return findFeaturedPages(categoryPages).slice(0, amount || 2);
};

// find a person page by name
export const getPerson = (pages: Page[], name: string) => {
  return pages.find(
    page => page.path.includes('people') && page.data.name === name,
  );
};

// calculate read time from html string where average read time is 275 words per minute
export const calcReadTime = (string: string): number => {
  const wordCount = s(string).stripTags().s.split(' ').length;
  return Math.ceil(wordCount / 275);
};

// get Person records as an Array from an array of names
export const getHosts = (hostNames: string[], pages: Page[]): Page[] => {
  const hosts = hostNames.map(host => {
    return getPerson(pages, host);
  });
  return compact(hosts);
};

// build a google maps link from event venue object
export const mapLink = ({
  address,
  city,
  country,
  lat,
  lon,
}: {
  address: string,
  city: string,
  country: string,
  lat: string,
  lon: string,
}) => {
  return address
    ? `https://www.google.com/maps/place/${address.replace(/ /, '+')}+${city}+${country}/@${lat},@${lon}`
    : undefined;
};

// build an image path string for a post type resource
// eg. imagePath(person.path, person.data.image)
export const imagePath = (root: string, image: string): string => {
  return prefixLink(`${root}${image}`);
};
