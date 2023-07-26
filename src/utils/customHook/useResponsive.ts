import React, { useState, useEffect } from "react";

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

  const handleResize = () => {
    const width = window.innerWidth;
    setResponsive({
      isMobile: width <= 550,
      isTablet: width > 550 && width <= 768,
      isPC: width > 768,
    });
  };

  useEffect(() => {
    handleResize(); // Set initial value on mount

    // Attach event listener for resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return responsive;
};

export default useResponsive;
