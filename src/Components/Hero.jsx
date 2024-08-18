import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";
const Hero = () => {
  const data=useLoaderData()
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="grid lg:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 p-6 justify-items-center bg-gradient-to-tr from-stone-200 to-gray-400">
      {loading? (
        <div><h1 className="text-3xl text-justify ">Loading....</h1></div>

      ) : (
        data.length > 0 ? (
          data.map((item) => <Card key={item.id} info={item}/>)
        ) : (
          <p>No data available</p>
        )
      )}
        
      </div>
    </>
  );
};

export default Hero;
export const heroLoader = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
}
