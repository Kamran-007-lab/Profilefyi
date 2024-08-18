import React from "react";
import { useCart } from "../contexts/CartContext";
const CartCount = ({ size }) => {

  const {items,sum} = useCart()
  console.log(items);
  return (
    <div
      className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
    >
      {items && items.length}
    </div>
  );
};

export default CartCount;
