export interface GetFeedsParam {
  tags: string;
}

export interface FeedsItem {
  title: string;
  link: string;
  media: { m: string };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

export interface FeedsState {
  imageList?: [FeedsItem];
  page: number;
  perPage: number;
  status: 'pending' | 'success' | 'error' | undefined;
  sortBy: string | undefined;
  filterBy: string | undefined;
}
