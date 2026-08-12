import { useEffect, useState } from "react";

export default function useHeaderCompact(
  ref: React.RefObject<HTMLElement | null>
) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCompact(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isCompact;
}