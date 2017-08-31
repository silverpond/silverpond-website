// @flow
import s from 'string';
import { compact } from 'lodash';

import type { Page, PostCategory } from './type-defs';

// filter pages by category + filter out drafts
export const filterPagesByCategory = (pages: Page[], category: PostCategory): Page[] => {
  return pages.filter(page => page.category === category);
};

// filter for pages with `featured` flag set to true
export const findFeaturedPages = (pages: Page[]): Page[] => {
  return pages.filter(page => page.featured);
};

// remove selected pages from a list of pages
export const filterNot = (pages: Page[], unwanted: Page[]): Page[] => {
  return pages.filter(page => !unwanted.includes(page));
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
export const getPerson = (pages: Page[], name: string): ?Object => {
  return pages.find(page => page.name === name);
};

// get Person records as an Array from an array of names
export const getHosts = (hostNames: string[], pages: Page[]): Page[] => {
  const hosts = hostNames.map(host => {
    return getPerson(pages, host);
  });
  return compact(hosts);
};

// build a google maps link from event venue object
export const mapLink = (location: ?Object): ?string => {
  if (!location) return null;

  const { address, city, country, lat, lng } = location;

  if (!address) return null;

  const query = `${address.replace(/ /, '+')}+${city}+${country}/@${lat},@${lng}`;
  return `https://www.google.com/maps/place/${query}`;
};

// Interprets a GraphQL image response
export const getImageUrl = (image: ?Object): string => {
  return image && image.childImageSharp ? image.childImageSharp.responsiveSizes.src : '';
};

export function staticAssetPath(assetPath: string): string {
  return `${__PATH_PREFIX__}/${assetPath}`;
}
