import type { Collection } from "../types/collection";

export type CollectionData = {
  id: Collection;
  name: string;
  slug: string;
  title: string;
  description: string;
};

export const collections: CollectionData[] = [
  {
    id: "best-sellers",
    name: "Best Sellers",
    slug: "best-sellers",
    title: "The most loved by our customers.",
    description:
      "Discover the fragrances and rituals our customers return to again and again.",
  },

  {
    id: "gift-guide",
    name: "Gift Guide",
    slug: "gift-guide",
    title: "Thoughtful gifts, beautifully chosen.",
    description:
      "A curated selection of fragrances and rituals chosen for meaningful moments.",
  },

  {
    id: "for-her",
    name: "For Her",
    slug: "for-her",
    title: "For her.",
    description:
      "A curated selection of fragrances and rituals chosen for her.",
  },

  {
    id: "for-him",
    name: "For Him",
    slug: "for-him",
    title: "For him.",
    description:
      "A curated selection of fragrances and rituals chosen for him.",
  },

  {
    id: "new-arrivals",
    name: "New Arrivals",
    slug: "new-arrivals",
    title: "Something new has arrived.",
    description:
      "Explore the latest additions to the VEGA collection.",
  },

  {
    id: "editors-picks",
    name: "Editor's Picks",
    slug: "editors-picks",
    title: "Chosen by VEGA.",
    description:
      "A refined edit of pieces selected by the VEGA team.",
  },

  {
    id: "luxury",
    name: "Luxury",
    slug: "luxury",
    title: "Exceptional by nature.",
    description:
      "An elevated selection for those looking for something extraordinary.",
  },

  {
    id: "wedding-selection",
    name: "Wedding Selection",
    slug: "wedding-selection",
    title: "For moments worth remembering.",
    description:
      "A curated selection for weddings, celebrations and unforgettable occasions.",
  },
];