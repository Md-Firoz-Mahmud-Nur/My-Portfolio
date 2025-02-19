import AnimatedCursor from "react-animated-cursor";
import CheckDesktop from "../Hooks/CheckDesktop";

const CursorAnimation = () => {
  const showCursor = CheckDesktop();

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
