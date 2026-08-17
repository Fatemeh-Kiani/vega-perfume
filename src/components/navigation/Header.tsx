import { useEffect, useRef, useState } from "react";

import MainHeader from "./MainHeader";
import CompactHeader from "./CompactHeader";
import MobileHeader from "./MobileHeader";

import useHeaderCompact from "../../hooks/useHeaderCompact";

type HeaderProps = {
  onMenuOpenChange?: (isOpen: boolean) => void;
};

export default function Header({
  onMenuOpenChange,
}: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  const [mainActiveMenu, setMainActiveMenu] =
    useState<string | null>(null);

  const [compactActiveMenu, setCompactActiveMenu] =
    useState<string | null>(null);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const isCompact = useHeaderCompact(headerRef);

  const isMenuOpen =
    mainActiveMenu !== null ||
    compactActiveMenu !== null ||
    mobileMenuOpen;

  useEffect(() => {
    onMenuOpenChange?.(isMenuOpen);
  }, [isMenuOpen, onMenuOpenChange]);

  return (
    <>
      {/* ==================================================
          DESKTOP
      ================================================== */}

      <div className="hidden md:block">
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
      </div>

      {/* ==================================================
          MOBILE
      ================================================== */}

      <div className="block md:hidden">
        <MobileHeader
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
        />
      </div>
    </>
  );
}