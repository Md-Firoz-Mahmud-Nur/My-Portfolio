import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";

const CursorAnimation = () => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const hasMouse = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    setShowCursor(hasMouse);
  }, []);

  return (
    <>
      {showCursor && (
        <AnimatedCursor
          innerSize={6}
          outerSize={24}
          outerScale={2}
          outerAlpha={0}
          showSystemCursor={true}
          trailingSpeed={7}
          innerStyle={{
            backgroundColor: "#fff",
            mixBlendMode: "difference",
            boxShadow: "0 0 0 .5px #fff",
          }}
          outerStyle={{
            backgroundColor: "transparent",
            mixBlendMode: "exclusion",
            boxShadow: "0 0 0 2px #fff",
          }}
        />
      )}
    </>
  );
};

export default CursorAnimation;
