import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../../Components/Slider/FoodCard/FoodCard";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchingAvailableFoods = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
      setFoods(data);
      console.log(data);
    };

    fetchingAvailableFoods();
  }, []);
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-center ">Available foods</h2>
        <p className="text-center text-sm mt-2 text-gray-500">
          Explore a variety of available food items ready for donation. Choose
          from a wide range of options <br className="hidden lg:block" /> to
          help others in need. Your contribution makes a difference!
        </p>
      </div>
      <hr className="my-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
