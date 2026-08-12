export interface ProductNote {

  productId: number;

  noteId: number;

  type:
    | "top"
    | "heart"
    | "base";

}