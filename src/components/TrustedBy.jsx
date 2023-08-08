import { useForm } from "react-hook-form";
import icon1 from "../assets/icons/accenture-4.png";
import icon2 from "../assets/icons/react.png";
import icon3 from "../assets/icons/airbnb.png";
import icon4 from "../assets/icons/sky-4.png";
import google from "../assets/icons/google.png";
import { Link } from "react-router-dom";

const TrustedBy = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  const handleGoogleSignIn = () => {
    console.log("Hello Nayem from Google");
  };

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
            <img src={icon1} alt="accenture-4" className="pb-14" />
            <img src={icon2} alt="react" />
          </div>
          <div>
            <img src={icon3} alt="airbnb" className="pb-14" />
            <img src={icon4} alt="sky-4" />
          </div>
        </div>
      </div>
      {/* Left Side End */}

      {/* Right Side Start  */}
      <div>
        <div className="">
          <div className="relative bg-[#F9F0FF] w-[480px] rounded-lg  flex flex-col">
            <div className="relative top-[-35px] w-[428px] container  mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="shadow-[4px_3px_10px_3px_#00000024] bg-white px-6 py-8 rounded  text-black w-full"
              >
                <h1 className="text-4xl text-center font-semibold font-Montserrat">
                  Sign up
                </h1>
                <button className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]s w-full text-base font-medium font-Montserrat text-center my-4 py-3 rounded bg-green text-white bg-[#722ED1] hover:bg-green-dark focus:outline-none">
                  Start your free trial
                </button>

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="name"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.name && <span>Please Give Your Name</span>}

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Your primary email"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>Please Give Your Valid Email...</span>}

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>Password Required...</span>}

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Re-type Password"
                  {...register("confirmPassword", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.confirmPassword && (
                  <span>Re-type Password Required...</span>
                )}

                <button
                  type="submit"
                  className="border-2 border-[#722ED1] hover:bg-[#722ED1] hover:text-white  px-6 font-Montserrat text-lg tracking-wide transition duration-300 ease-in w-full text-center py-3 rounded bg-green text-black  hover:bg-green-dark focus:outline-none my-1"
                >
                  Sign Up
                </button>

                <p className="uppercase text-center font-Montserrat text-sm  py-2">
                  Or
                </p>

                <div className="flex items-center justify-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="rounded-[4px] bg-blue-400 text-center text-white flex justify-center items-center  w-[260px] p-[2px] font-Montserrat text-base tracking-wide"
                  >
                    <img
                      src={google}
                      alt="google icon"
                      className="w-10 p-2 bg-white mr-3 rounded-[4px]"
                    />
                    Sign in with google
                  </button>
                </div>

                <hr className="my-3 bg-[#8989A2] border-[1px]" />

                <div className="text-center text-lg text-gray-400">
                  Already have an account?
                  <Link className="no-underline pl-2 text-blue-700">
                    Log in
                  </Link>
                  .
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side End */}
    </div>
  );
};

export default TrustedBy;
