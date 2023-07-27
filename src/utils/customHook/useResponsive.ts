import { useState, useEffect, useMemo } from "react";

interface Responsive {
  isMobile: boolean;
  isTablet: boolean;
  isPC: boolean;
}

const useResponsive = (): Responsive => {
  const [responsive, setResponsive] = useState<Responsive>({
    isMobile: false,
    isTablet: false,
    isPC: true, // By default, consider it as PC view
  });

  const handleResize = useMemo(() => {
    const calculateResponsive = () => {
      const width = window.innerWidth;
      return {
        isMobile: width <= 550,
        isTablet: width > 550 && width <= 768,
        isPC: width > 768,
      };
    };

    return calculateResponsive;
  }, []);

  useEffect(() => {
    const updateResponsive = () => setResponsive(handleResize());
    updateResponsive(); // Set initial value on mount

    // Attach event listener for resizing
    window.addEventListener("resize", updateResponsive);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", updateResponsive);
  }, [handleResize]);

  return responsive;
};

export default useResponsive;
