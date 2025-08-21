import React, { useState, useEffect } from "react";

const BreakpointChecker = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [currentBreakpointName, setCurrentBreakpointName] =
    useState("Loading...");

  // Effect to update viewportWidth and currentBreakpointName on resize
  useEffect(() => {
    const getBreakpointName = (width) => {
      if (width >= 96 * 16) {
        return "2xl";
      } else if (width >= 80 * 16) {
        return "xl";
      } else if (width >= 64 * 16) {
        return "lg";
      } else if (width >= 48 * 16) {
        return "md";
      } else {
        // If it's not md, lg, xl, or 2xl,
        // it falls into the 'sm' category (which now includes anything below 40rem)
        return "sm";
      }
    };

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setViewportWidth(newWidth);
      setCurrentBreakpointName(getBreakpointName(newWidth));
    };

    // Set initial breakpoint name
    setCurrentBreakpointName(getBreakpointName(window.innerWidth));

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to show the alert on button click
  const checkBreakpoint = () => {
    alert(
      `Viewport: ${currentBreakpointName}\nCurrent Width: ${viewportWidth}px`
    );
  };

  return (
    <button
      onClick={checkBreakpoint}
      className="
        fixed top-28 right-5 border-2 p-4 bg-white rounded-full animate-bounce duration-150 z-10
        hover:bg-violet-500 hover:border-violet-500 hover:scale-150 hover:animate-none
      "
    >
      {/* Display the breakpoint name directly inside the button */}
      <span className="text-xl font-bold text-gray-800 pointer-events-none">
        {currentBreakpointName}
      </span>
    </button>
  );
};

export default BreakpointChecker;
