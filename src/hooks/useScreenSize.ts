import { useState, useEffect } from "react";

type ScreenSize = "mobile" | "tablet" | "desktop";

/**
 * Hook to detect current screen size category.
 * @returns {ScreenSize} - 'mobile' (<640px), 'tablet' (640-1023px), 'desktop' (>=1024px)
 */
export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getSizeCategory());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getSizeCategory());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}

/**
 * Determine size category based on window.innerWidth.
 */
function getSizeCategory(): ScreenSize {
  const width = window.innerWidth;
  if (width < 640) {
    return "mobile";
  }
  if (width < 1024) {
    return "tablet";
  }
  return "desktop";
}

// USO:
// import { useScreenSize } from "./useScreenSize";
// const screen = useScreenSize();
// console.log(screen); // 'mobile', 'tablet' o 'desktop'
