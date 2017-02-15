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
export const getPromotedPages = (pages: Page[], category: string): Page[] => {
  return filterPages(pages, category)
    .filter(page => page.data.featured === true)
    .slice(0, 2);
};

// find a person page by name
export const getPerson = (pages: Page[], name: string) => {
  return pages.find(
    page => page.path.includes('people') && page.data.name === name,
  );
};
