import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  ReactNode,
  RefObject,
} from "react";

import {
  animate,
} from "motion/react";

import type {
  MotionValue,
} from "motion/react";

type HomeScrollControllerProps = {
  children: ReactNode;
  homeRef: RefObject<HTMLElement | null>;
  homeY: MotionValue<string>;
};

const HOME_SCROLL_KEY =
  "vega-home-scroll-position";

export default function HomeScrollController({
  children,
  homeRef,
  homeY,
}: HomeScrollControllerProps) {
  const [isHomeVisible, setIsHomeVisible] =
    useState(false);

  const isAnimating = useRef(false);

  const wasAtTop = useRef(false);

  /*
   * ==================================================
   * TOUCH TRACKING
   * ==================================================
   */

  const touchStartY = useRef<number | null>(
    null
  );

  const touchStartX = useRef<number | null>(
    null
  );

  /* --------------------------------
     SHOW HOME
  -------------------------------- */

  const showHome = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    setIsHomeVisible(true);

    animate(homeY, "0%", {
      duration: 0.5,
      ease: [0.75, 0.75, 0.75, 0.75],

      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  /* --------------------------------
     SHOW HERO
  -------------------------------- */

  const showHero = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    sessionStorage.removeItem(
      HOME_SCROLL_KEY
    );

    animate(homeY, "100%", {
      duration: 0.5,
      ease: [0.75, 0.75, 0.75, 0.75],

      onComplete: () => {
        setIsHomeVisible(false);

        isAnimating.current = false;
      },
    });
  };

  /* --------------------------------
     RESTORE HOME POSITION
  -------------------------------- */

  useEffect(() => {
    const savedPosition =
      sessionStorage.getItem(
        HOME_SCROLL_KEY
      );

    if (!savedPosition) return;

    const position =
      Number(savedPosition);

    if (!Number.isFinite(position)) {
      sessionStorage.removeItem(
        HOME_SCROLL_KEY
      );

      return;
    }

    setIsHomeVisible(true);

    homeY.set("0%");

    requestAnimationFrame(() => {
      const home = homeRef.current;

      if (!home) return;

      home.scrollTo({
        top: position,
        behavior: "auto",
      });

      sessionStorage.removeItem(
        HOME_SCROLL_KEY
      );
    });
  }, [homeRef, homeY]);

  /* --------------------------------
     SAVE HOME POSITION
  -------------------------------- */

  useEffect(() => {
    const home = homeRef.current;

    if (!home) return;

    const handleScroll = () => {
      if (!isHomeVisible) return;

      sessionStorage.setItem(
        HOME_SCROLL_KEY,
        String(home.scrollTop)
      );
    };

    home.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      home.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [
    homeRef,
    isHomeVisible,
  ]);

  /* --------------------------------
     WHEEL CONTROL
  -------------------------------- */

  useEffect(() => {
    const handleExploreCollection = () => {
      sessionStorage.removeItem(
        HOME_SCROLL_KEY
      );

      showHome();
    };

    const handleWheel = (
      event: WheelEvent
    ) => {
      if (isAnimating.current) {
        event.preventDefault();
        return;
      }

      /* --------------------------------
         HERO → HOME
      -------------------------------- */

      if (!isHomeVisible) {
        if (event.deltaY > 30) {
          event.preventDefault();

          showHome();
        }

        return;
      }

      const home = homeRef.current;

      if (!home) return;

      const isAtTop =
        home.scrollTop <= 2;

      /* --------------------------------
         HOME → HERO
      -------------------------------- */

      if (
        isAtTop &&
        event.deltaY < -30
      ) {
        if (!wasAtTop.current) {
          wasAtTop.current = true;
          return;
        }

        event.preventDefault();

        wasAtTop.current = false;

        showHero();

        return;
      }

      if (!isAtTop) {
        wasAtTop.current = false;
      }
    };

    window.addEventListener(
      "vega:open-home",
      handleExploreCollection
    );

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        "vega:open-home",
        handleExploreCollection
      );

      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, [
    isHomeVisible,
    homeRef,
    homeY,
  ]);

  /* --------------------------------
     TOUCH CONTROL
  -------------------------------- */

  useEffect(() => {
    const handleTouchStart = (
      event: TouchEvent
    ) => {
      if (isAnimating.current) return;

      const touch =
        event.touches[0];

      if (!touch) return;

      touchStartY.current =
        touch.clientY;

      touchStartX.current =
        touch.clientX;
    };

    const handleTouchEnd = (
      event: TouchEvent
    ) => {
      if (isAnimating.current) return;

      if (
        touchStartY.current === null ||
        touchStartX.current === null
      ) {
        return;
      }

      const touch =
        event.changedTouches[0];

      if (!touch) return;

      const endY =
        touch.clientY;

      const endX =
        touch.clientX;

      const deltaY =
        endY -
        touchStartY.current;

      const deltaX =
        endX -
        touchStartX.current;

      /*
       * RESET
       */

      touchStartY.current = null;
      touchStartX.current = null;

      /*
       * IGNORE HORIZONTAL SWIPES
       */

      if (
        Math.abs(deltaX) >
        Math.abs(deltaY)
      ) {
        return;
      }

      /*
       * MINIMUM SWIPE DISTANCE
       */

      if (
        Math.abs(deltaY) < 45
      ) {
        return;
      }

      /* --------------------------------
         HERO → HOME
         
         Finger moves UP
         deltaY is negative
      -------------------------------- */

      if (!isHomeVisible) {
        if (deltaY < -45) {
          showHome();
        }

        return;
      }

      const home = homeRef.current;

      if (!home) return;

      const isAtTop =
        home.scrollTop <= 2;

      /* --------------------------------
         HOME → HERO
         
         Finger moves DOWN
         deltaY is positive
      -------------------------------- */

      if (
        isAtTop &&
        deltaY > 45
      ) {
        showHero();

        return;
      }
    };

    window.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [
    isHomeVisible,
    homeRef,
    homeY,
  ]);

  return <>{children}</>;
}