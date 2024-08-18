import { BsSearch } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import CartCount from "./CartCount.jsx";
import { Link } from "react-router-dom";

const MobNavbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-6">
            <Link to="/">
              <IoIosMenu size={30} />
            </Link>
            <BsSearch size={24} />
          </div>
          <h1 className="text-4x1">Profile.fyi</h1>
          <div className="flex gap-4 text-[30px]">
            <AiOutlineUser />
            <Link to="/checkout">
              <div className="relative cursor-pointer">
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
