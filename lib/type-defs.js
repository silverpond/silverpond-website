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
