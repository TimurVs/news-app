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

export interface IFullNews {
  id: number;
  title: string;
  url: string;
  text: string;
  description: string;
  publishedDate: Date;
  titleImageUrl: string;
  categoryType: string;
  content: string;
}

