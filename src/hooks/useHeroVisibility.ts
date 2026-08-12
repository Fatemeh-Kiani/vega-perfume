import { useEffect, useState } from "react";

export default function useHeaderCompact() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight =
        document.querySelector("header")?.offsetHeight ?? 0;

      setIsCompact(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isCompact;
}