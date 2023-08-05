import banneImg from "../assets/banneImg.png";
import star from "../assets/icons/star.png";
import BGImg from '../assets/BG.png'

const Banner = () => {
  return (
    <div   style={{
        backgroundImage: `url(${BGImg})`,
        height: "696px", backgroundRepeat: "no-repeat",
      }}>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between py-20 px-3 lg:pt-36 " >
      {/* Left side start  */}
      <div>
        <span className="flex bg-[#F7F1FF] w-[258px] py-3  text-center rounded-3xl">
          <img src={star} alt="star" className="px-4 object-contain"/>
          <h1 className="text-base font-Montserrat font-semibold text-[#722ED1] pr-3">v3.1 released. <span className="border-b border-[#722ED1]">Learn more</span></h1>
        </span>

        <div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-Montserrat font-bold py-6" >
            Your data with <br /> real-time analytics
          </h1>
          <p className="text-lg md:text-xl lg:text-xl font-Montserrat text-gray-500 pb-6 leading-7">
            Harness the potential of Big Data Analytics & Cloud Services <br />
            and become a data-driven organization with Needle tail
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#722ED1] text-white py-3 px-6 rounded-full font-Montserrat text-lg tracking-wide">Start free trial</button>
          <button className="hover:bg-[#722ED1] hover:text-white  py-3 px-6 rounded-full font-Montserrat text-lg tracking-wide transition duration-300 ease-in">Learn more</button>
        </div>
      </div>
      {/* Left side End  */}

      {/* Right side start  */}
      <div>
        <img src={banneImg} alt="banneImg" className="object-cover" />
      </div>
      {/* Right side End  */}
    </div>
    </div>
  );
};

export default Banner;
