import React from "react";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const foodDetails = useLoaderData();
  console.log(foodDetails);

  const {
    name,
    photo,
    quantity,
    location,
    expiredDate,
    status,
    donator,
    notes,
  } = foodDetails;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-56">
        <img src={photo} alt="Food" className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-orange-500 flex items-center">
            {name}
          </h2>
          <p className="text-sm font-semibold">
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg">
              {status}
            </span>
          </p>
        </div>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">Notes:</span> {notes}
        </p>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Quantity:</span>{" "}
            {parseInt(quantity)}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Expires:</span> {expiredDate}
          </p>
        </div>
        <div className="mt-6 flex items-center">
          <img
            src={donator?.donatorPhoto}
            alt="Donator"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-gray-700 font-semibold">
              {donator?.donatorName}
            </p>
            <p className="text-sm text-gray-500">{donator?.donatorEmail}</p>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
