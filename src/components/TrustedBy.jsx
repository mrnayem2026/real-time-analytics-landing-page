import icon1 from "../assets/icons/accenture-4.png";
import icon2 from "../assets/icons/react.png";
import icon3 from "../assets/icons/airbnb.png";
import icon4 from "../assets/icons/sky-4.png";

const TrustedBy = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 py-32">
      {/* Left Side Start  */}
      <div>
        <p className="py-6 font-Montserrat text-4xl font-semibold ">
          See why the world’s best <br /> companies use Qubly to <br /> become
          truly data-driven.
        </p>
        <div className="flex items-center gap-7 py-5">
          <div className="w-[144px] h-1 bg-[#D6D6D6]"></div>
          <p className="text-lg md:text-xl lg:text-xl font-Montserrat text-gray-500  leading-7">
            Trusted by
          </p>
          <div className="w-[144px] h-1 bg-[#D6D6D6]"></div>
        </div>
        <div className="grid lg:grid-cols-2 pt-14">
          <div>
            <img src={icon1} alt="accenture-4"  className="pb-14"/>
            <img src={icon2} alt="react" />
          </div>
          <div>
            <img src={icon3} alt="airbnb" className="pb-14"/>
            <img src={icon4} alt="sky-4" />
          </div>
        </div>
      </div>
      {/* Left Side End */}

      {/* Right Side Start  */}
      <div>
           
      </div>
      {/* Right Side End */}
    </div>
  );
};

export default TrustedBy;
