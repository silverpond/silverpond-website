import s from 'string';
import { compact } from 'lodash';
import { prefixLink } from 'gatsby-helpers';

type Page = {
  data: Object,
  path: string,
};

// filter pages by category
export const filterPagesByCategory = (
  pages: Page[],
  category: string,
): Page[] => {
  const regEx = new RegExp(`/${category}/.+`);
  return pages.filter(page => {
    if (page.path) {
      return regEx.test(page.path);
    }
    return false;
  });
};

// filter pages by category and separate out any featured pages
export const filterPages = (pages, category) => {
  const categoryPages = filterPagesByCategory(pages, category);
  const featuredPages = categoryPages.filter(
    page => page.data.featured === true,
  );
  const nonFeaturedPages = categoryPages.filter(page => {
    let match = false;
    featuredPages.forEach(featuredPage => {
      match = page.requirePath === featuredPage.requirePath;
    });
    return !match;
  });
  return {
    featuredPages,
    pages: nonFeaturedPages,
  };
};

// return the first two pages with the 'featured' flag from a category
export const getPromotedPages = (
  pages: Page[],
  category: string,
  amount: number,
): Page[] => {
  return filterPages(pages, category).featuredPages.slice(0, amount || 2);
};

// find a person page by name
export const getPerson = (pages: Page[], name: string) => {
  return pages.find(
    page => page.path.includes('people') && page.data.name === name,
  );
};

// calculate read time from html string where average read time is 275 words per minute
export const calcReadTime = (string: string): string => {
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
export const mapLink = (
  {
    address,
    city,
    country,
    lat,
    lon,
  },
) => {
  return `https://www.google.com/maps/place/${address.replace(/ /, '+')}+${city}+${country}/@${lat},@${lon}`;
};

// build an image path string for a post type resource
// eg. imagePath(person.path, person.data.image)
export const imagePath = (root: string, image: string): string => {
  return prefixLink(`${root}${image}`);
};
