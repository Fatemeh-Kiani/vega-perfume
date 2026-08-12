import { useRef, useState } from "react";
import MainHeader from "./MainHeader";
import CompactHeader from "./CompactHeader";
import  useHeaderCompact  from "../../hooks/useHeaderCompact";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  const [mainActiveMenu, setMainActiveMenu] =
    useState<string | null>(null);

  const [compactActiveMenu, setCompactActiveMenu] =
    useState<string | null>(null);

  const isCompact = useHeaderCompact(headerRef);

  return (
    <>
      <div className="relative">
        <MainHeader
          ref={headerRef}
          activeMenu={mainActiveMenu}
          setActiveMenu={setMainActiveMenu}
        />
      </div>

      {isCompact && (
        <CompactHeader
          activeMenu={compactActiveMenu}
          setActiveMenu={setCompactActiveMenu}
        />
      )}
    </>
  );
}