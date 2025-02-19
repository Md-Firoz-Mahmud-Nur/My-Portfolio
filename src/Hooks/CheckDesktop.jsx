import { useEffect, useState } from "react";

const CheckDesktop = () => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const hasMouse = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    setShowCursor(hasMouse);
  }, []);

  return showCursor;
};

export default CheckDesktop;
