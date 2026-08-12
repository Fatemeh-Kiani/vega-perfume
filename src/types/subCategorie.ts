export interface SubCategory {
  id: number;

  name: string;

  slug: string;

  categoryId: number;

  parentId?: number;

  imageId?: number;

  description?: string;
}