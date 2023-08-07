import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import { Perspective } from "@egjs/flicking-plugins";
import profile from "../assets/Profile.png";
import profile2 from "../assets/Profile2.png";
import profile3 from "../assets/Profile3.png";
import profile4 from "../assets/Profile4.png";
import icon1 from "../assets/icons/Tonkean.png";
import icon2 from "../assets/icons/BigSpring.png";
import icon3 from "../assets/icons/Clearbit.png";
import icon4 from "../assets/icons/Mine.png";
import icon5 from "../assets/icons/Shake.png";
import testo from '../assets/testo.png'

const Testimonial = () => {
  const plugins = [
    new AutoPlay({
      duration: 2000,
      direction: "NEXT",
      stopOnHover: true,
      animationDuration: 1000,
    }),
    new Perspective({ rotate: -1, scale: 2, perspective: 200 }),
  ];

  return (
    <div
    style={{
        backgroundImage: `url(${testo})`,
        height: "696px",
        backgroundRepeat: "no-repeat",
        backgroundSize : "cover"
      }}>
      <div className="container mx-auto py-56 px-3">
        {/* Slider Start  */}
        <Flicking circular={true} plugins={plugins}>
          <div className="text-center">
            <h1 className="text-xl font-Montserrat font-medium">
              "What I love about Qubly is the easy way we can collaborate even
              if there is a lot <br /> of people involved in the process"
            </h1>
            <img src={profile} alt="" className="mx-auto py-8" />
            <p className="text-xl font-Montserrat font-semibold">
              Guillaume Cabane
            </p>
            <p className="text-lg font-Montserrat font-semibold">
              CTO @ BigSpring
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-Montserrat font-medium">
              "What I love about Qubly is the easy way we can collaborate even
              if there is a lot <br /> of people involved in the process"
            </h1>
            <img src={profile2} alt="" className="mx-auto py-8 rounded-full" />
            <p className="text-xl font-Montserrat font-semibold">Martin</p>
            <p className="text-lg font-Montserrat font-semibold">
              CEO @ DumbalSy
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-Montserrat font-medium">
              "What I love about Qubly is the easy way we can collaborate even
              if there is a lot <br /> of people involved in the process"
            </h1>
            <img src={profile3} alt="" className="mx-auto py-8 rounded-full" />
            <p className="text-xl font-Montserrat font-semibold">Jems</p>
            <p className="text-lg font-Montserrat font-semibold">
              HR @ HelloTing
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-Montserrat font-medium">
              "What I love about Qubly is the easy way we can collaborate even
              if there is a lot <br /> of people involved in the process"
            </h1>
            <img src={profile4} alt="" className="mx-auto py-8 rounded-full" />
            <p className="text-xl font-Montserrat font-semibold">Kurban</p>
            <p className="text-lg font-Montserrat font-semibold">
              COO @ RasikaHub
            </p>
          </div>
        </Flicking>
        {/* Slider End  */}

        {/* Brand Start  */}
        <div>
          <hr className="my-8 p-3 bg-[#DEC9FA}" />
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5  ">
            <img src={icon1} alt="" className="   lg:object-contain" />
            <img src={icon2} alt="" className="   lg:object-contain" />
            <img src={icon3} alt="" className="   lg:object-contain" />
            <img src={icon4} alt="" className="   lg:object-contain" />
            <img src={icon5} alt="" className="   lg:object-contain" />
          </div>
        </div>
        {/* Brand End  */}
      </div>
    </div>
  );
};

export default Testimonial;
