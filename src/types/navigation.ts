export type MenuItemType = "link" | "card";

export type MegaItem = {
  id: string;
  label: string;
  href: string;
  image?: string;
  type: MenuItemType;
};

export type MegaColumn = {
  id: string;
  title?: string;
  items: MegaItem[];
};

export type NavbarProps = {
  isCompact: boolean;
};

export type BrandProps = {
  isCompact: boolean;
};

export type ActionsProps = {
  isCompact: boolean;
};

export type MenuBarProps = {
  isCompact: boolean;

  activeMenu: string | null;

  setActiveMenu: (id: string | null) => void;
};
export type FilterItem = {
  id: string;
  label: string;
  slug: string;
};

export type FilterGroup = {
  id: string;
  title: string;
  items: FilterItem[];
};


export type MenuItem = {
  id: string;
  label: string;
};


export type MegaMenuItem = {
  id: string;

  label: string;

  image?: string;

  href?: string;

  type: "link" | "image";
};


export type MegaMenuColumn = {
  id: string;

  title?: string;

  items: MegaMenuItem[];
};


export type MegaMenuData = {
  id: string;

  label: string;

  columns?: MegaMenuColumn[];

  featured?: MegaMenuItem[];
};
