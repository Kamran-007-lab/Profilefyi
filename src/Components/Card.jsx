import React from "react";
import { useCart } from "../contexts/CartContext";

function Card(props) {
  const{addItem,removeItem,updateItem,items,total,sum}=useCart()
  const checkItem =(props) => {
    // console.log(props.info.id)
    const tmp = items.find((tmp) => tmp.id === props.info.id)
    // const tmp=null
    const newProduct = {
      id:props.info.id,
      title: props.info.title,
      price: props.info.price,
      image:props.info.image,
      quantity: 1
    }
    !tmp ? addItem(newProduct) : updateItem(props.info.id,1)
  }
  
  // console.log(props.info.category)
  return (
    <>
      <div className="w-full h-auto bg-white border border-black p-4 m-4 rounded-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-2xl">
        <div className=" shadow-2xl ">
          <img
            className=" rounded-2xl  w-full md:h-[400px] sm:h-[500px]"
            src={props.info.image}
            alt="product-img"
          />
        </div>
        <div className="my-4 grid justify-items-center">
          <h1 className="font-bold ">{props.info.title}</h1>
          <h1 className="font-semibold font-serif mt-2">${props.info.price} only</h1>
          {/* <h1>
            {props.info.description}
          </h1> */}
        </div>
        <div className="flex justify-center items-center  ">
          <button onClick={() => checkItem(props)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-500 to-black group-hover:from-gray-300 group-hover:to-black hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
