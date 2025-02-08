// src/Components/CustomCursor.js
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  useEffect(() => {
    const updateCursorColor = (e) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);

      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const isDark = isDarkColor(bgColor);
        document.documentElement.style.setProperty(
          "--cursor-color",
          isDark ? "white" : "black",
        );
      }
    };

    const isDarkColor = (rgb) => {
      if (!rgb.startsWith("rgb")) return false; // Default to light if no bg
      const [r, g, b] = rgb.match(/\d+/g).map(Number);
      return r * 0.299 + g * 0.587 + b * 0.114 < 128; // Luminance formula
    };

    window.addEventListener("mousemove", updateCursorColor);
    return () => window.removeEventListener("mousemove", updateCursorColor);
  }, []);

  return (
    <AnimatedCursor
      innerSize={0}
      color="none"
      outerSize={24}
      showSystemCursor={true}
      trailingSpeed={5}
      outerStyle={{
        border: "2px solid var(--cursor-color)",
      }}
      clickables={[{ target: ".custom" }]}
    />
  );
};

export default CustomCursor;
