import type { MegaMenu } from "../types/megaMenu";
import { Images } from "../assets/images/index";

export const megaMenu: MegaMenu[] = [
  {
    id: "perfumes",
    label: "Perfumes",
    href: "/products?category=perfumes",

    sections: [
      {
        title: "Fragrance Family",

        items: [
          {
            label: "Floral",
            kind: "filter",
            value: "floral",
            href: "/products?fragrance=floral",
            image: Images.perfumes.floral,
          },
          {
            label: "Woody",
            kind: "filter",
            value: "woody",
            href: "/products?fragrance=woody",
            image: Images.perfumes.woody,
          },
          {
            label: "Fresh",
            kind: "filter",
            value: "fresh",
            href: "/products?fragrance=fresh",
            image: Images.perfumes.fresh,
          },
          {
            label: "Fruity",
            kind: "filter",
            value: "fruity",
            href: "/products?fragrance=fruity",
            image: Images.perfumes.fruity,
          },
          {
            label: "Citrus",
            kind: "filter",
            value: "citrus",
            href: "/products?fragrance=citrus",
            image: Images.perfumes.citrus,
          },
          {
            label: "Amber",
            kind: "filter",
            value: "amber",
            href: "/products?fragrance=amber",
            image: Images.perfumes.amber,
          },
          {
            label: "Aquatic",
            kind: "filter",
            value: "aquatic",
            href: "/products?fragrance=aquatic",
            image: Images.perfumes.aquatic,
          },
        ],
      },

      {
        title: "Shop By Gender",

        items: [
          {
            label: "Women",
            kind: "filter",
            value: "women",
            href: "/products?gender=women",
            image: Images.perfumes.women,
          },
          {
            label: "Men",
            kind: "filter",
            value: "men",
            href: "/products?gender=men",
            image: Images.perfumes.men,
          },
          {
            label: "Unisex",
            kind: "filter",
            value: "unisex",
            href: "/products?gender=unisex",
            image: Images.perfumes.unisex,
          },
        ],
      },

      {
        title: "Shop By Season",

        items: [
          {
            label: "Summer",
            kind: "filter",
            value: "summer",
            href: "/products?season=summer",
            image: Images.perfumes.summer,
          },
          {
            label: "Spring",
            kind: "filter",
            value: "spring",
            href: "/products?season=spring",
            image: Images.perfumes.spring,
          },
          {
            label: "Autumn",
            kind: "filter",
            value: "autumn",
            href: "/products?season=autumn",
            image: Images.perfumes.autumn,
          },
          {
            label: "Winter",
            kind: "filter",
            value: "winter",
            href: "/products?season=winter",
            image: Images.perfumes.winter,
          },
        ],
      },
    ],
  },

  {
    id: "body",
    label: "Body & Bath",
    href: "/products?category=body-bath",

    sections: [
      {
        title: "Body",
        image: Images.body.body,

        items: [
          {
            label: "Hand Soap",
            kind: "subcategory",
            value: "hand-soap",
            href: "/products?subcategory=hand-soap",
          },
          {
            label: "Body Cream",
            kind: "subcategory",
            value: "body-cream",
            href: "/products?subcategory=body-cream",
          },
          {
            label: "Hand Lotion",
            kind: "subcategory",
            value: "hand-lotion",
            href: "/products?subcategory=hand-lotion",
          },
        ],
      },

      {
        title: "Face",
        image: Images.body.face,

        items: [
          {
            label: "Face Lotion",
            kind: "subcategory",
            value: "face-lotion",
            href: "/products?subcategory=face-lotion",
          },
          {
            label: "Face Mask",
            kind: "subcategory",
            value: "face-mask",
            href: "/products?subcategory=face-mask",
          },
          {
            label: "Face Scrub",
            kind: "subcategory",
            value: "face-scrub",
            href: "/products?subcategory=face-scrub",
          },
        ],
      },

      {
        title: "Hair",
        image: Images.body.hair,

        items: [
          {
            label: "Shampoo",
            kind: "subcategory",
            value: "shampoo",
            href: "/products?subcategory=shampoo",
          },
          {
            label: "Hair Mask",
            kind: "subcategory",
            value: "hair-mask",
            href: "/products?subcategory=hair-mask",
          },
        ],
      },
    ],
  },

  {
    id: "home",
    label: "Home",
    href: "/products?category=home",

    sections: [
      {
        title: "Home Fragrance",

        items: [
          {
            label: "Incense",
            kind: "subcategory",
            value: "incense",
            href: "/products?subcategory=incense",
            image: Images.home.incense,
          },
          {
            label: "Room Spray",
            kind: "subcategory",
            value: "room-spray",
            href: "/products?subcategory=room-spray",
            image: Images.home.roomSpray,
          },
          {
            label: "Candles",
            kind: "subcategory",
            value: "candles",
            href: "/products?subcategory=candles",
            image: Images.home.candles,
          },
        ],
      },
    ],
  },

  {
    id: "brands",
    label: "Brands",
    href: "/products",

    sections: [
      {
        title: "",

        items: [
          {
            label: "Dior",
            kind: "brand",
            value: "dior",
            href: "/products?brand=dior",
            image: Images.brands.dior,
          },
          {
            label: "Chanel",
            kind: "brand",
            value: "chanel",
            href: "/products?brand=chanel",
            image: Images.brands.chanel,
          },
          {
            label: "Tom Ford",
            kind: "brand",
            value: "tomford",
            href: "/products?brand=tomford",
            image: Images.brands.tomford,
          },
          {
            label: "Byredo",
            kind: "brand",
            value: "byredo",
            href: "/products?brand=byredo",
            image: Images.brands.byredo,
          },
          {
            label: "Amouage",
            kind: "brand",
            value: "amouage",
            href: "/products?brand=amouage",
            image: Images.brands.amouage,
          },
          {
            label: "Jo Malone",
            kind: "brand",
            value: "jo-malone",
            href: "/products?brand=jo-malone",
            image: Images.brands.joMalone,
          },
          {
            label: "Le Labo",
            kind: "brand",
            value: "le-labo",
            href: "/products?brand=le-labo",
            image: Images.brands.leLabo,
          },
          {
            label: "Hermès",
            kind: "brand",
            value: "hermes",
            href: "/products?brand=hermes",
            image: Images.brands.hermes,
          },
          {
            label: "Prada",
            kind: "brand",
            value: "prada",
            href: "/products?brand=prada",
            image: Images.brands.prada,
          },
          {
            label: "Gucci",
            kind: "brand",
            value: "gucci",
            href: "/products?brand=gucci",
            image: Images.brands.gucci,
          },
          {
            label: "Yves Saint Laurent",
            kind: "brand",
            value: "ysl",
            href: "/products?brand=ysl",
            image: Images.brands.ysl,
          },
          {
            label: "Versace",
            kind: "brand",
            value: "versace",
            href: "/products?brand=versace",
            image: Images.brands.versace,
          },
          {
            label: "Aesop",
            kind: "brand",
            value: "aesop",
            href: "/products?brand=aesop",
            image: Images.brands.aesop,
          },
          {
            label: "Maison Francis Kurkdjian",
            kind: "brand",
            value: "maison-francis-kurkdjian",
            href: "/products?brand=maison-francis-kurkdjian",
            image: Images.brands.mfk,
          },
          {
            label: "Diptyque",
            kind: "brand",
            value: "diptyque",
            href: "/products?brand=diptyque",
            image: Images.brands.diptyque,
          },
          {
            label: "Penhaligon's",
            kind: "brand",
            value: "penhaligons",
            href: "/products?brand=penhaligons",
            image: Images.brands.penhaligons,
          },
          {
            label: "Givenchy",
            kind: "brand",
            value: "givenchy",
            href: "/products?brand=givenchy",
            image: Images.brands.givenchy,
          },
        ],
      },
    ],
  },

  {
    id: "gifts",
    label: "Gifts",
    href: "/products?category=gifts",

    sections: [
      {
        title: "Gifts",
        image: Images.gifts.gift,
        imageRatio: "landscape",

        items: [
          {
            label: "Gift Sets",
            kind: "subcategory",
            value: "gift-sets",
            href: "/products?subcategory=gift-sets",
          },
          {
            label: "For Her",
            kind: "collection",
            value: "for-her",
            href: "/products?collection=for-her",
          },
          {
            label: "For Him",
            kind: "collection",
            value: "for-him",
            href: "/products?collection=for-him",
          },
          {
            label: "Gift Guide",
            kind: "collection",
            value: "gift-guide",
            href: "/products?collection=gift-guide",
          },
        ],
      },

      {
        title: "Gift For Home",
        image: Images.gifts.giftForHome,
        imageRatio: "landscape",

        items: [
          {
            label: "Room Spray",
            kind: "subcategory",
            value: "room-spray",
            href: "/products?subcategory=room-spray",
          },
          {
            label: "Incense",
            kind: "subcategory",
            value: "incense",
            href: "/products?subcategory=incense",
          },
          {
            label: "Candles",
            kind: "subcategory",
            value: "candles",
            href: "/products?subcategory=candles",
          },
        ],
      },
    ],
  },

  {
    id: "journal",
    label: "Journal",
    href: "/journal",
  },

  {
    id: "about",
    label: "About",
    href: "/about",
  },
];