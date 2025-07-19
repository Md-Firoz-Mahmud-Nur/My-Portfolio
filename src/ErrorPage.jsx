import { Link } from "react-router-dom";
import errorAnimation from "../src/assets/Animation404.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center text-center"
    >
      <Lottie
        animationData={errorAnimation}
        loop={true}
        autoplay={true}
        style={{ width: "400", height: "400" }}
      />

      <div className="text-2xl font-bold md:text-4xl">
        Something&apos;s Wrong Here... <br />
        <p className="mt-10 text-base font-normal">
          We cann&apos;t find the page you are looking for...
        </p>
        <br />
        <Link
          className="btn btn-outline mb-20 border-2 border-amber-500 bg-transparent text-xl text-amber-500 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
