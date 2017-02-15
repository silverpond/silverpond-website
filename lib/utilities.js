import s from 'string';

type Page = {
  data: Object,
  path: string,
};

// filter pages by category
export const filterPages = (pages: Page[], category: string): Page[] => {
  return pages.filter(page => {
    if (page.path) {
      return page.path.includes(category);
    }
    return false;
  });
};

// return the first two pages with the 'featured' flag from a category
export const getPromotedPages = (
  pages: Page[],
  category: string,
  amount: number,
): Page[] => {
  return filterPages(pages, category)
    .filter(page => page.data.featured === true)
    .slice(0, amount || 2);
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
