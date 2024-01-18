import React from "react";
import { MoonLoader } from "react-spinners";
import { FaReact } from "react-icons/fa";
import Countdown from "./shared/Coundown"; // Import the Countdown component

const WaitingComponent = () => {
  return (
    <section className="relative bg-black dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex flex-col items-center justify-center h-full">
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 mb-4 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Høitomt Service
              <svg
                className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 transform hover:scale-110"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/Kontakt"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Kontakt
            </a>
<br />
            <p className="text-white text-center" >- Ta ei ventebolle imens.</p>
<p className="text-white text-center mt-4 text-lg font-bold font-medium">
  <div><small>- Ei bolle har aldri skada non! - Sigurd Jesnes </small></div>
</p>



          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <video
            className="w-full h-full object-cover brightness-100 mb-8"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="src/assets/images/copy_C83D7C0A-B73A-43C5-B382-DAE47F839875.MOV"
              type="video/mp4"
            />
            Your browser does not support the video tag. - Bytt nettleser oliver!!
          </video>
          <div className="flex flex-col items-center">
            <MoonLoader color="#61dafb" size={25} />
            <p className="text-white mt-1">Loading...</p>
            <FaReact className="text-blue-300 mt-4" size={30} />
            <div style={{ color: 'white' }}>- Powered by Jesnes.</div>
            {/* Integrate Countdown component */}
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingComponent;
