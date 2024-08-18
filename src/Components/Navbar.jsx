import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineGlobal,
} from "react-icons/ai";
import CartCount from "./CartCount.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <Link to="/">
            <h1 className="text-4xl font-medium transition-transform transform hover:scale-125 duration-300 ease-in-out shadow-2xl">Profile.fyi</h1>
          </Link>
          <div className="relative w-full max-w-[500px]">
            <input
              className=" bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search Product..."
            />
            <BsSearch
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
              size={20}
            />
          </div>

          <div className="flex gap-4">
            <div className="icon__wrapper relative transition-transform transform hover:scale-125 duration-300 ease-in-out shadow-2xl">
              <AiOutlineGlobal onClick={toggleVisibility} className="cursor-pointer" />
              <div
                className={
                  visible
                    ? "top-24 px-8 py-3 z-10 text-base absolute bg-gray-200 font-bold rounded-md text-black"
                    : "hidden"
                }
              >
                <ul className="list-disc space-y-1">
                  <li className="cursor-pointer">INR(₹)</li>
                  <li className="cursor-pointer">USD($)</li>
                  <li className="cursor-pointer">EURO(€)</li>
                  <li className="cursor-pointer">YEN(¥)</li>
                  <li className="cursor-pointer">POUND(£)</li>
                </ul>
              </div>
            </div>
            <div className="icon__wrapper">
              <AiOutlineUser />
            </div>
            <Link to="/checkout">
              <div className="icon__wrapper relative transition-transform transform hover:scale-125 duration-300 ease-in-out shadow-2xl">
                <AiOutlineShoppingCart />
                <CartCount size="w-[25px] h-[25px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;



//icon__wrapper relative transition-transform transform hover:scale-125 duration-300 ease-in-out shadow-2xl