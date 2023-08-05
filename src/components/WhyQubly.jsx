import React from "react";
import Eye from "../assets/Eye.png";
import vbIcon from "../assets/icons/vbIcon.png";
import paIcon from "../assets/icons/paIcon.png";
import drIcon from "../assets/icons/drIcon.png";

const WhyQubly = () => {
  return (
    <div className="container mx-auto py-32 px-3">
      {/* Top section Start  */}
      <div className="text-center">
        <span className="flex mx-auto bg-[#F7F1FF] w-[170px] py-3  text-center rounded-3xl">
          <img src={Eye} alt="star" className="px-4 object-contain" />
          <h1 className="text-base font-Montserrat font-semibold text-[#722ED1] mr-2">
            Why Qubly
          </h1>
        </span>

        <h1 className="py-6 font-Montserrat text-4xl font-semibold ">
          Get actionable insights from Big Data in 3 steps
        </h1>
        <p className="text-lg md:text-xl lg:text-xl font-Montserrat text-gray-500 pb-6 leading-7">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod <br /> tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua.
        </p>
      </div>
      {/* Top section End */}

      {/* Bottom section Start  */}

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 pt-8">
        {/* first card */}
        <div className="text-center w-[380px] rounded-md bg-gradient-to-r from-blue-200 to-cyan-200 p-1">
          <div className="h-full w-full bg-white pt-5 hover:bg-gradient-to-r from-blue-200 to-cyan-200 ">
            <img
              src={vbIcon}
              alt=""
              className="mx-auto object-contain bg-[#E6F7FF] px-5 py-5 rounded-full"
            />

            <h1 className="text-xl font-Montserrat font-black py-4">
              Valuable business insights
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-Montserrat text-gray-500 pb-6 leading-7">
              Collect processed & cleansed data that <br /> is ready to be
              analyzed to gather <br /> valuable business insights.
            </p>
          </div>
        </div>

        {/* second card */}

        <div className="text-center w-[380px] rounded-md bg-gradient-to-r from-red-200 to-red-400 p-1">
          <div className="h-full w-full bg-white pt-5 hover:bg-gradient-to-r from-red-200 to-red-400">
            <img
              src={paIcon}
              alt=""
              className="mx-auto object-contain bg-[#FFF1F0] px-5 py-5 rounded-full"
            />

            <h1 className="text-xl font-Montserrat font-black py-4">
              Powerful Algorithms
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-Montserrat text-gray-500 pb-6 leading-7">
              With the help of powerful algorithms, <br /> quality rules &
              techniques, obtain <br /> simplified & enriched data.
            </p>
          </div>
        </div>

        {/* theird card */}
        <div className="text-center w-[380px] rounded-md bg-gradient-to-r from-lime-100 to-lime-400 p-1 ">
          <div className="h-full w-full bg-white pt-5  hover:bg-gradient-to-r from-lime-100 to-lime-400  transition duration-300 ease-in">
            <img
              src={drIcon}
              alt=""
              className="mx-auto object-contain bg-[#F6FFED] px-5 py-5 rounded-full"
            />

            <h1 className="text-xl font-Montserrat font-black py-4">
              Data in real-time
            </h1>
            <p className="text-lg md:text-xl lg:text-xl font-Montserrat text-gray-500 pb-6 leading-7">
              Collect data in real-time from multiple <br /> channels and move
              it into a data lake, in <br /> its original format.
            </p>
          </div>
        </div>
      </div>
      {/* Bottom section End */}
    </div>
  );
};

export default WhyQubly;
