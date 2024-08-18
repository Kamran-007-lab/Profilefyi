import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import CartCount from "./CartCount.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <Link to="/">
            <h1 className="text-4xl font-medium">Profile.fyi</h1>
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
            <div className="icon__wrapper">
              <AiOutlineUser />
            </div>
            <Link to="/checkout">
              <div className="icon__wrapper relative">
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
