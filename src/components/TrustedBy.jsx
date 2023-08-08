import { useForm } from "react-hook-form";
import icon1 from "../assets/icons/accenture-4.png";
import icon2 from "../assets/icons/react.png";
import icon3 from "../assets/icons/airbnb.png";
import icon4 from "../assets/icons/sky-4.png";
import google from "../assets/icons/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const TrustedBy = () => {
  const [logInForm, setLogInForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("")


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  // This below funtion for SignUp from 
  const onSubmitSignUpFrom = (data) => {
    console.log(data)

    // check confirm password match with password 

    if(data.password !== data.confirmPassword){
      setConfirmPasswordError("Don't Match Re-typed Password. Try again.")
    } else{
      setConfirmPasswordError("")
    }
    
  };

  // This below funtion for Login from 
  const onSubmitLoginFrom = (data) => {
    console.log(data)

    // check confirm password match with password 

    if(data.password !== data.confirmPassword){
      setConfirmPasswordError("Don't Match Re-typed Password. Try again.")
    } else{
      setConfirmPasswordError("")
    }
    
  };




  const handleGoogleSignIn = () => {
    console.log("Hello Nayem from Google");
  };



  const handleLogInFormUI = () => {
    setLogInForm(!logInForm);
  };

  // Hide password
  const handlePasswordHide = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
        {logInForm ? (
          <div className="relative bg-[#F9F0FF] s w-[480px] rounded-lg  flex flex-col">
            <div className="relative top-[-35px] w-[428px] container  mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <form
                onSubmit={handleSubmit(onSubmitLoginFrom)}
                className="shadow-[4px_3px_10px_3px_#00000024] bg-white px-6 py-8 rounded  text-black w-full"
              >
                <h1 className="text-4xl text-center font-semibold font-Montserrat">
                  Login
                </h1>
                <button className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]s w-full text-base font-medium font-Montserrat text-center my-4 py-3 rounded bg-green text-white bg-[#722ED1] hover:bg-green-dark focus:outline-none">
                  Start your free trial
                </button>

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Your primary email"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="text-red-500">Please Give Your Valid Email...</span>}

                <input
                  type={showPassword ? "text" : "password"}
                  className="relative block border border-grey-light w-full p-3 rounded mb-4"
                  placeholder="Password"
                  {...register("password", {  required: true,
                     pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/  })}
                />
                {/* errors will return when field validation fails  */}
                {errors.password && <span className="text-red-500">Password Required...</span>}
                 {/* errors will return when field validation fails  */}
                 {errors.password?.type === 'required' && <span className="text-red-500">Password Required...</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-500">Six characters, at least one uppercase letter, one lowercase letter and one number</span>}
                {showPassword ? (
                  <span className="absolute top-[230px] right-12">
                    <svg
                      onClick={handlePasswordHide}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6  text-black cursor-pointer"
                    >
                      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </svg>
                  </span>
                ) : (
                  <span className="absolute top-[230px] right-12">
                    <svg
                      onClick={handlePasswordHide}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-black cursor-pointer"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Re-type Password"
                  {...register("confirmPassword", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.confirmPassword && (
                  <span className="text-red-500">Re-type Password Required...</span>
                )}
                <span className="text-red-400">{ConfirmPasswordError}</span>
                {showConfirmPassword ? (
                  <span className="absolute top-[295px] right-12">
                    <svg
                      onClick={handleShowConfirmPassword}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6  text-black cursor-pointer"
                    >
                      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </svg>
                  </span>
                ) : (
                  <span className="absolute top-[295px] right-12">
                    <svg
                      onClick={handleShowConfirmPassword}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-black cursor-pointer"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}

                <button className="border-2 border-[#722ED1] hover:bg-[#722ED1] hover:text-white  px-6 font-Montserrat text-lg tracking-wide transition duration-300 ease-in w-full text-center py-3 rounded bg-green text-black  hover:bg-green-dark focus:outline-none my-1">
                  Login
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
                  Have not account yet?
                  <span
                    onClick={handleLogInFormUI}
                    className="cursor-pointer no-underline pl-2 text-blue-700"
                  >
                    Sign Up
                  </span>
                  .
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="relative bg-[#F9F0FF] s w-[480px] rounded-lg  flex flex-col">
            <div className="relative top-[-35px] w-[428px] container  mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <form
                onSubmit={handleSubmit(onSubmitSignUpFrom)}
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
                {errors.name && <span className="text-red-500">Please Give Your Name</span>}

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Your primary email"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="text-red-500">Please Give Your Valid Email...</span>}

                <input
                   type={showPassword ? "text" : "password"}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  {...register("password", { 
                    required: true,
                     pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ 
                    })}
                />
                {/* errors will return when field validation fails  */}
                {errors.password?.type === 'required' && <span className="text-red-500">Password Required...</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-500">Six characters, at least one uppercase letter, one lowercase letter and one number</span>}

                {showPassword ? (
                  <span className="absolute top-[295px] right-12">
                    <svg
                      onClick={handlePasswordHide}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6  text-black cursor-pointer"
                    >
                      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </svg>
                  </span>
                ) : (
                  <span className="absolute top-[295px] right-12">
                    <svg
                      onClick={handlePasswordHide}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-black cursor-pointer"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Re-type Password"
                  {...register("confirmPassword", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.confirmPassword && (<span className="text-red-500">Re-type Password Required...</span>)}
                {showConfirmPassword ? (
                  <span className="absolute top-[365px]  right-12">
                    <svg
                      onClick={handleShowConfirmPassword}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6  text-black cursor-pointer"
                    >
                      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </svg>
                  </span>
                ) : (
                  <span className="absolute top-[365px] right-12">
                    <svg
                      onClick={handleShowConfirmPassword}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-black cursor-pointer"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}

                  <span className="text-red-400">{ConfirmPasswordError}</span>

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
                  <span
                    className="cursor-pointer no-underline pl-2 text-blue-700"
                    onClick={handleLogInFormUI}
                  >
                    Log in
                  </span>
                  .
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      {/* Right Side End */}
    </div>
  );
};

export default TrustedBy;
