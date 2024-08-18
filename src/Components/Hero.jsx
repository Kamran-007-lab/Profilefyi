import React, { useEffect, useState } from "react";
import Card from "./Card";
const Hero = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
//   console.log(data);


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
