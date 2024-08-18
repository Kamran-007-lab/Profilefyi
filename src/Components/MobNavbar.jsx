import { BsSearch } from "react-icons/bs";
import { RiHome2Fill } from "react-icons/ri";

import { AiOutlineShoppingCart, AiOutlineGlobal } from "react-icons/ai";
import CartCount from "./CartCount.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobNavbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-6 transition-transform transform hover:scale-125 duration-300 ease-in-out shadow-2xl">
            <Link to="/">
              <RiHome2Fill size={30} />
            </Link>
            {/* <BsSearch size={24} /> */}
          </div>
          <h1 className="text-4x1">Profile.fyi</h1>
          <div className="flex gap-4 text-[30px]">
            <AiOutlineGlobal
              className="icon__wrapper relative transition-transform transform hover:scale-125 duration-300 ease-in-out shadow-2xl"
              onClick={toggleVisibility}
            />
            <div
              className={
                visible
                  ? "top-24 right-2 px-8 py-3 z-10 text-base absolute bg-gray-200 font-bold rounded-md text-black"
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
            <Link to="/checkout">
              <div className="icon__wrapper relative transition-transform transform hover:scale-125 duration-300 ease-in-out shadow-2xl">
                <AiOutlineShoppingCart />
                <CartCount size="w-[20px] h-[20px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobNavbar;