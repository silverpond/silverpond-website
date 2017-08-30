export type Page = {
  data: Object,
  path: string,
  requirePath: string,
};

export type PostCategory =
  | 'articles'
  | 'events'
  | 'people'
  | 'clients'
  | 'case-studies';

export type SectionColor = 'red' | 'grey';
export type SectionSize = 'small' | 'medium';

export type MetaTag = {
  name: string,
  content: string,
};
