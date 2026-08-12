export type MegaMenuItemKind =
  | "brand"
  | "filter"
  | "subcategory"
  | "page";


export interface MegaMenuLink {

  label: string;

  kind: MegaMenuItemKind;

  value: string;

  href: string;

  image?: string;

}


export interface MegaMenuSection {

  title: string;
image?: string;
imageRatio?: "square" | "landscape";
  items: MegaMenuLink[];

}


export interface MegaMenu {

  id: string;

  label: string;

  href: string;

  sections?: MegaMenuSection[];

}