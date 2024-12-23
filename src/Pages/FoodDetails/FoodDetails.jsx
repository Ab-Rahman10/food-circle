import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import { BsArrowLeft } from "react-icons/bs";

const FoodDetails = () => {
  const foodDetails = useLoaderData();

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
    <div className="flex flex-col items-center lg:w-9/12 mx-auto px-4 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row gap-5">
      {/* Food Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden order-1 lg:order-2">
        {/* Image Section */}
        <div className="h-56">
          <img src={photo} alt="Food" className="w-full h-full object-cover" />
        </div>

        {/* Details Section */}
        <div className="p-6">
          {/* Title and Status */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-orange-500">{name}</h2>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-sm font-semibold">
              {status}
            </span>
          </div>

          {/* Notes */}
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">Notes:</span> {notes}
          </p>

          {/* Additional Info */}
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Quantity:</span>{" "}
              {parseInt(quantity)}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Expires:</span>{" "}
              {format(new Date(expiredDate), "P")}
            </p>
          </div>

          {/* Donator Info */}
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

          {/* Request Button */}
          <div className="mt-6">
            <button className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              Request
            </button>
          </div>
        </div>
      </div>

      {/* Go Back Button */}
      <Link to="/available-foods" className="order-2 lg:order-1">
        <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 flex items-center">
          <BsArrowLeft className="mr-2" /> Go back to available foods
        </button>
      </Link>
    </div>
  );
};

export default FoodDetails;
