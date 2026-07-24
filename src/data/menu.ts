export type MenuItem = {
  id: number;
  title: string;
  key: "NEW" | "FRAGRANCE" | "BATH & BODY" | "BRANDS" | "GIFTS";
};

export type MenuDataItem = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "NEW",
    key: "NEW",
  },
  {
    id: 2,
    title: "FRAGRANCE",
    key: "FRAGRANCE",
  },
  {
    id: 3,
    title: "BATH & BODY",
    key: "BATH & BODY",
  },
  {
    id: 4,
    title: "BRANDS",
    key: "BRANDS",
  },
  {
    id: 5,
    title: "GIFTS",
    key: "GIFTS",
  },
];