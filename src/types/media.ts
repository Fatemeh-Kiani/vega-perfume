export type MediaType =
  | "product"
  | "brand"
  | "category"
  | "subcategory"
  | "hero"
  | "banner"
  | "journal"
  | "collection";

export interface Media {
  id: number;

  name: string;

  url: string;

  alt: string;

  width: number;

  height: number;
}