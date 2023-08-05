import ForEngineeringT from "../assets/ForEngineeringTeams.png";
import compass from "../assets/icons/compass.png";

const ForEngineeringTeams = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-36 py-10 lg:py-28 px-3">
      {/* Right side start  */}

      <div className="my-auto">
        <span className="flex bg-[#F7F1FF] w-[288px] py-3  text-center rounded-3xl">
          <img src={compass} alt="star" className="px-4 object-contain" />
          <h1 className="text-base font-Montserrat font-semibold text-[#722ED1] pr-3">
          For Engineering Teams
          </h1>
        </span>

        <h1 className="py-6 font-Montserrat text-4xl font-semibold ">
        Data-driven pipelines in minutes
        </h1>
        <p className="text-base md:text-xl lg:text-xl font-Montserrat text-gray-500 pb-6 leading-7">
        Maintenance-free data pipelines with quick set-up and <br /> straight-forward deployments that are powered by a modern <br /> & scalable platform.
        </p>
      </div>

      {/* Right side End  */}

      {/* Left side start  */}
      <img src={ForEngineeringT} alt="forPorductsTeam" />
      {/* Leftside End  */}
    </div>
  );
};

export default ForEngineeringTeams;
