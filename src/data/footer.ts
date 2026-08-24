import type {
  FooterColumn,
  FooterContact,
  FooterSocial,
} from "../types/footer";

export const footerColumns: FooterColumn[] = [
  {
    title: "Shop",
    links: [
      {
        label: "Perfumes",
        href: "/perfumes",
      },
      {
        label: "Body & Bath",
        href: "/body-bath",
      },
      {
        label: "Gifts",
        href: "/gifts",
      },
      {
        label: "Brands",
        href: "/brands",
      },
    ],
  },

  {
    title: "About",
    links: [
      {
        label: "Our Story",
        href: "/about",
      },
      {
        label: "Journal",
        href: "/journal",
      },
      {
        label: "About VEGA",
        href: "/about",
      },
    ],
  },

  {
    title: "Customer Care",
    links: [
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "Shipping",
        href: "/shipping",
      },
      {
        label: "Returns",
        href: "/returns",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
    ],
  },
];

export const footerContact: FooterContact = {
  phone: "+98 933 --- ----",
  email: "fatikianiij@gmail.com",
  address: "Iran",
};

export const footerSocials: FooterSocial[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fatemekianiy/",
  },
];