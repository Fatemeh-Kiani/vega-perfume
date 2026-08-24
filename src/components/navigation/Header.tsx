import { useEffect, useRef, useState } from "react";

import MainHeader from "./MainHeader";
import CompactHeader from "./CompactHeader";
import MobileHeader from "./MobileHeader";
import SearchOverlay from "../search/SearchOverlay";

import useHeaderCompact from "../../hooks/useHeaderCompact";

type HeaderProps = {
  onMenuOpenChange?: (isOpen: boolean) => void;
};

export default function Header({
  onMenuOpenChange,
}: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  /*
   * ==================================================
   * DESKTOP MENU STATE
   * ==================================================
   */

  const [mainActiveMenu, setMainActiveMenu] =
    useState<string | null>(null);

  const [compactActiveMenu, setCompactActiveMenu] =
    useState<string | null>(null);

  /*
   * ==================================================
   * MOBILE MENU STATE
   * ==================================================
   */

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  /*
   * ==================================================
   * SEARCH STATE
   * ==================================================
   */

  const [searchOpen, setSearchOpen] =
    useState(false);

  /*
   * ==================================================
   * COMPACT HEADER
   * ==================================================
   */

  const isCompact =
    useHeaderCompact(headerRef);

  /*
   * ==================================================
   * MENU STATE
   * ==================================================
   *
   * Search is intentionally NOT included here.
   * Search has its own full-screen overlay.
   */

  const isMenuOpen =
    mainActiveMenu !== null ||
    compactActiveMenu !== null ||
    mobileMenuOpen;

  /*
   * ==================================================
   * HOME MENU OVERLAY
   * ==================================================
   */

  useEffect(() => {
    onMenuOpenChange?.(isMenuOpen);
  }, [
    isMenuOpen,
    onMenuOpenChange,
  ]);

  /*
   * ==================================================
   * OPEN SEARCH
   * ==================================================
   *
   * Close every navigation state first,
   * then open the search overlay.
   */

  const openSearch = () => {
    setMainActiveMenu(null);
    setCompactActiveMenu(null);
    setMobileMenuOpen(false);

    setSearchOpen(true);
  };

  /*
   * ==================================================
   * CLOSE SEARCH
   * ==================================================
   */

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <>
      {/* ==================================================
          DESKTOP — 1120px AND ABOVE
      ================================================== */}

      <div className="hidden min-[1120px]:block">
        <div className="relative">
          <MainHeader
            ref={headerRef}
            activeMenu={mainActiveMenu}
            setActiveMenu={setMainActiveMenu}
            onSearch={openSearch}
          />
        </div>

        {isCompact && (
          <CompactHeader
            activeMenu={compactActiveMenu}
            setActiveMenu={setCompactActiveMenu}
            onSearch={openSearch}
          />
        )}
      </div>

      {/* ==================================================
          MOBILE / TABLET — BELOW 1120px
      ================================================== */}

      <div className="block min-[1120px]:hidden">
        <MobileHeader
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
          onSearch={openSearch}
        />
      </div>

      {/* ==================================================
          SEARCH OVERLAY
      ================================================== */}

      <SearchOverlay
        isOpen={searchOpen}
        onClose={closeSearch}
      />
    </>
  );
}