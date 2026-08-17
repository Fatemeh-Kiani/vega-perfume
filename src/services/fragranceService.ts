import { megaMenu } from "../data/megaMenu";

export function getFragrances() {
  const perfumeMenu = megaMenu.find(
    (menu) => menu.id === "perfumes"
  );

  const fragranceSection = perfumeMenu?.sections?.find(
    (section) => section.title === "Fragrance Family"
  );

  return fragranceSection?.items ?? [];
}