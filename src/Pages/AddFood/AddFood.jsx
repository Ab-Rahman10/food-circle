import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/Context";
import axios from "axios";
import toast from "react-hot-toast";

const AddFood = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();

  const handleFoodSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.foodName.value;
    const photo = form.foodPhoto.value;
    const quantity = form.foodQuantity.value;
    const location = form.location.value;
    const expiredDate = startDate;
    const status = form.foodStatus.value;
    const donatorPhoto = form.donatorPhoto.value;
    const donatorName = form.donatorName.value;
    const donatorEmail = form.donatorEmail.value;
    const notes = form.notes.value;
    const addData = {
      name,
      photo,
      quantity,
      location,
      expiredDate,
      status,
      donator: { donatorPhoto, donatorName, donatorEmail },
      notes,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/foods`,
        addData
      );
      toast.success("Your food has been successfully added!");
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
        Add Food
      </h2>
      <form
        onSubmit={handleFoodSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {/* Food Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Name
          </label>
          <input
            name="foodName"
            type="text"
            placeholder="Enter food name"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Food Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Image
          </label>
          <input
            name="foodPhoto"
            type="url"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Food Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Quantity
          </label>
          <input
            name="foodQuantity"
            type="number"
            placeholder="Enter quantity"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pickup Location
          </label>
          <input
            name="location"
            type="text"
            placeholder="Enter pickup location"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Expired Date/Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expired Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Food Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Status
          </label>
          <select
            name="foodStatus"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="available">Available</option>
            <option value="not-available">Not Available</option>
          </select>
        </div>

        {/* Donator Photo URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Donator Photo URL
          </label>
          <input
            name="donatorPhoto"
            type="text"
            placeholder="Enter donator photo URL"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Donator Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Donator Name
          </label>
          <input
            name="donatorName"
            type="text"
            placeholder="Enter donator name"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Donator Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Donator Email
          </label>
          <input
            defaultValue={user?.email}
            name="donatorEmail"
            type="email"
            placeholder="Enter donator email"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Additional Notes */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            name="notes"
            placeholder="Enter any additional notes"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 text-right flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
