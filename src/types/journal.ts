export interface JournalArticle {

  id: number;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  imageId: number;

  category:
    | "guide"
    | "brand"
    | "fragrance"
    | "lifestyle";

  createdAt: string;

}