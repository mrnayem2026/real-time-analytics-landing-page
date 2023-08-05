import forPorductsTeam from "../assets/forPorductsTeam.png";
import electronic from "../assets/icons/electronic-circuit.png"

const ForProductTeams = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-36 lg:py-32 px-3">
      {/* Left side start  */}
      <img src={forPorductsTeam} alt="forPorductsTeam" />
      {/* Leftside End  */}

      {/* Right side start  */}

      <div className="my-auto">
        <span className="flex bg-[#F7F1FF] w-[258px] py-3  text-center rounded-3xl">
          <img src={electronic} alt="star" className="px-4 object-contain" />
          <h1 className="text-base font-Montserrat font-semibold text-[#722ED1] pr-3">
          For Product Teams
          </h1>
        </span>

        <h1  className="py-6 font-Montserrat text-4xl font-semibold ">Launch with the best stack</h1>
        <p className="text-base md:text-xl lg:text-xl font-Montserrat text-gray-500 pb-6 leading-7">
          A centralized platform that integrates zillions of data sources <br />{" "}
          using Big Data ELT (Extract, Load & Transform) that leaves <br /> no
          data behind
        </p>
      </div>

      {/* Right side End  */}
    </div>
  );
};

export default ForProductTeams;
