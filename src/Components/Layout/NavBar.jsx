import { Link } from "react-router-dom";
import { useState } from "react";
import mobileLogo from "../../assets/logo-mobile.png";
import webLogo from "../../assets/logo-web.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden items-center justify-between font-inter md:flex">
        <img src={webLogo} alt="" className="w-24" />
        <div className="flex gap-8">
          <Link className=" group relative text-xl text-dark-green hover:text-current ">
            <span>Home</span>
            <div
              className={`h-[2.5px] w-full
                          origin-left scale-x-0 bg-dark-green transition-all
                          duration-500 group-hover:scale-x-100`}
            ></div>
          </Link>
          <Link className=" group relative text-xl text-dark-green hover:text-current ">
            <span>Products</span>
            <div
              className={`h-[2.5px] w-full
                          origin-left scale-x-0 bg-dark-green transition-all
                          duration-500 group-hover:scale-x-100`}
            ></div>
          </Link>
          <Link className=" group relative text-xl text-dark-green hover:text-current ">
            <span>Contact us</span>
            <div
              className={`h-[2.5px] w-full
                          origin-left scale-x-0 bg-dark-green transition-all
                          duration-500 group-hover:scale-x-100`}
            ></div>
          </Link>
        </div>
      </nav>

      <nav className="relative flex items-center justify-center font-inter md:hidden">
        <img
          src={mobileLogo}
          alt=""
          className="mx-auto w-12"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`flex h-36 flex-col justify-evenly ${
            isMenuOpen ? "visible" : "invisible"
          } absolute -left-14 top-20 z-50 w-[105dvw]`}
        >
          <Link
            className={`${
              isMenuOpen ? "block" : "translate-x-full"
            } bg-light-green py-3 pl-6 text-xl text-dark-green transition-all duration-500`}
          >
            Home
          </Link>
          <Link
            className={`${
              isMenuOpen ? "block" : "translate-x-full"
            } bg-light-green py-3 pl-6 text-xl text-dark-green transition-all delay-75 duration-500`}
          >
            Products
          </Link>
          <Link
            className={`${
              isMenuOpen ? "block" : "translate-x-full"
            } bg-light-green py-3 pl-6 text-xl text-dark-green transition-all delay-150 duration-500`}
          >
            Contact us
          </Link>
        </div>
      </nav>
    </>
  );
}
