import "./SvgBorderAnimation.css";

const SvgBorderAnimation = () => {
  return (
    <button className="Button mt-1">
      <svg className="Button-svg" width="200" height="50" viewBox="0 0 300 80">
        <rect
          className="Button-line--outer"
          strokeWidth="2"
          stroke="#fff"
          strokeLinecap="round"
          fill="none"
          x="-35"
          y="1"
          width="calc(100% + 66px)"
          height="calc(100% - 2px)"
          rx="5"
        />
      </svg>
      <div className="Button-content">Download Resume</div>
    </button>
  );
};

export default SvgBorderAnimation;
