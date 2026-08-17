export interface Product {
  id: number;

  name: string;

  slug: string;

  brandId: number;

  categoryId: number;

  subCategoryId?: number;

  description: string;

  price: number;

  stock: number;
  image: string;
  
  hoverImage?: string;

  isBestSeller?: boolean;

  gender:
    |"women"
    | "men"
    | "unisex";

  concentration?: string;

  volume?: number;

  country?: string;

  season?: 
    | "summer"
    | "winter"
    | "spring"
    | "autumn";

  fragranceFamily?: string;

  longevity?: string;

  sillage?: string;

  createdAt: string;

  updatedAt: string;
}