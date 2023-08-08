import logo from "../assets/icons/logo.png";
import { BsFacebook } from "react-icons/Bs";
import { AiFillTwitterCircle } from "react-icons/Ai";
import { AiFillInstagram } from "react-icons/Ai";

const Footer = () => {
  return (
    <div className=" bg-[#FBFCFF] py-24">
      <footer className="container mx-auto footer p-10  text-base-content">
        <div>
          <img src={logo} alt="Logo" />
          <p className="py-5 text-base font-Montserrat ">
            Lorem ipsum dolor sit amet, <br />
            consectetuer adipiscing elit, sed <br />
            diam nonummy nibh euismod <br />
            tincidunt ut laoreet dolore magna <br />
            aliquam erat volutpat ut wisi enim <br />
            ad minim
          </p>
          <div className="flex gap-3">
            <BsFacebook className="h-7 w-7 text-blue-400"></BsFacebook>
            <AiFillTwitterCircle className="h-7 w-7 text-blue-400"></AiFillTwitterCircle>
            <AiFillInstagram className="h-7 w-7 text-gradient-to-r from-blue-500 to-red-600"></AiFillInstagram>
          </div>
        </div>

        <div>
          <span className="text-xl font-Montserrat font-semibold">Product</span>
          <a className="link link-hover text-sm font-Montserrat ">Connections</a>
          <a className="link link-hover text-sm font-Montserrat ">Protocols</a>
          <a className="link link-hover text-sm font-Montserrat ">Personas</a>
          <a className="link link-hover text-sm font-Montserrat ">Catalog</a>
          <a className="link link-hover text-sm font-Montserrat ">Pricing</a>
          <a className="link link-hover text-sm font-Montserrat ">Security</a>
          <a className="link link-hover text-sm font-Montserrat ">GDPR</a>
        </div>
        <div>
          <span className="text-xl font-Montserrat font-semibold">For Developers</span>
          <a className="link link-hover text-sm font-Montserrat">Docs</a>
          <a className="link link-hover text-sm font-Montserrat">API</a>
          <a className="link link-hover text-sm font-Montserrat">Open Source</a>
          <a className="link link-hover text-sm font-Montserrat">Engineering Team</a>
        </div>
        <div>
          <span className="text-xl font-Montserrat font-semibold">Company</span>
          <a className="link link-hover text-sm font-Montserrat">About us</a>
          <a className="link link-hover text-sm font-Montserrat">Contact</a>
          <a className="link link-hover text-sm font-Montserrat">Jobs</a>
          <a className="link link-hover text-sm font-Montserrat">Press kit</a>
        </div>
        <div>
          <span className="text-xl font-Montserrat font-semibold">Support</span>
          <a className="link link-hover text-sm font-Montserrat">Terms of use</a>
          <a className="link link-hover text-sm font-Montserrat">Privacy policy</a>
          <a className="link link-hover text-sm font-Montserrat">Cookie policy</a>
        </div>
        <div>
          <span className="text-xl font-Montserrat font-semibold">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-sm font-Montserrat">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
