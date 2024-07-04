import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Education = () => {
  return (
    <div className="w-full" id="education">
      <h2 className="mx-auto mb-12 max-w-max pb-2 text-center text-3xl font-bold tracking-tight md:mb-16 md:text-4xl">
        Education
      </h2>

      <div className="flex justify-center p-4">
        <div className="mx-auto flex flex-col p-2 md:grid">
          <div className="flex md:contents">
            <div className="relative col-start-1 col-end-2 mx-auto">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="h-full w-1 rounded-t-full"></div>
              </div>
              <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-4 border-black bg-white"></div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="relative col-start-2 col-end-6 my-6 ml-4 rounded-xl bg-white p-4 text-gray-800 lg:w-[450px]"
            >
              <p className="font-bold">HSC</p>
              <small>2019 - 2021</small>
              <h3 className="text-lg font-semibold lg:text-xl">
                Higher Secondary School Certificate
              </h3>
              <p className="mt-2 leading-6">
                Police Lines School And College, Rangpur
              </p>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-1 col-end-2 mx-auto">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="h-full w-1"></div>
              </div>
              <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-4 border-black bg-white"></div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="relative col-start-2 col-end-6 my-6 ml-4 rounded-xl bg-white p-4 text-gray-800 lg:w-[450px]"
            >
              <p className="font-bold">B.Sc</p>
              <small>2021 - Present</small>
              <h3 className="text-lg font-semibold lg:text-xl">
                Bachelor of Science
              </h3>
              <small>Mathematics</small>
              <p className="mt-2 leading-6">Carmichael College</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
