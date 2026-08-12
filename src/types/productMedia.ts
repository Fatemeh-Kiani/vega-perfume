export interface ProductMedia {

  id:number;

  productId:number;

  mediaId:number;

  type:
    | "primary"
    | "hover"
    | "gallery";

  sortOrder:number;
}