export interface INews {
  id?: number,
  title: string,
  description: string,
  publishedDate?:Date,
  url?: string,
  fullUrl?: string,
  titleImageUrl?: string,
  categoryType?: string,
  pageNumber?: number,
  pageSize?: number
}
