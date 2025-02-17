import PropTypes from "prop-types";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 7,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.1,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmoothScroll;
