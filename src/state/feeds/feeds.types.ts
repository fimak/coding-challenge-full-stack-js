export interface GetFeedsParam {
  page: number,
  limit: number
}

export interface FeedsItem {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface FeedsState {
  imageList?: [FeedsItem],
  page: number,
  perPage: number,
  status: 'pending' | 'success' | 'error' | undefined,
  sortBy: string | undefined,
  filterBy: string | undefined
}
