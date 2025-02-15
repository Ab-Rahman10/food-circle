import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { BsArrowLeft } from "react-icons/bs";
import axios from "axios";
import useAuth from "../../Hooks/Context";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import toast from "react-hot-toast";
import { ThemeContext } from "../../Provider/AuthProvider";

const FoodDetails = () => {
  const axiosSecure = UseAxiosSecure();
  const foodDetails = useLoaderData();
  const { user } = useAuth();
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const {
    _id,
    name,
    photo,
    quantity,
    location,
    expiredDate,
    status,
    donator,
    notes,
  } = foodDetails;

  const handleOpenModal = async (id) => {
    document.getElementById("my_modal_5").showModal();
  };

  const handleRequest = async (e) => {
    e.preventDefault();

    const donarName = donator?.donatorName;
    const pickupLocation = location;
    const requestDate = e.target.requestDate.value;
    const note = e.target.notes.value;
    const userEmail = user?.email;
    const reqData = {
      photo,
      donarName,
      pickupLocation,
      expiredDate,
      requestDate,
      note,
      userEmail,
    };

    try {
      await axiosSecure.post(`/food-request`, reqData);
      await axiosSecure.patch(`/requestFoods/${_id}`, {
        status: "Requested",
      });

      document.getElementById("my_modal_5").close();
      navigate("/myFood-request");
      toast.success("Requested");
    } catch (err) {}
  };

  return (
    <div className={`${isDarkMode && "bg-gray-950"}`}>
      <div
        className={`flex flex-col items-center lg:w-9/12 mx-auto px-4 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row gap-5 py-20 ${
          isDarkMode ? "bg-gray-950 text-gray-200" : "bg-white text-gray-900"
        }`}
      >
        {/* Food Card */}
        <div
          className={`w-full max-w-md shadow-lg rounded-lg overflow-hidden order-1 lg:order-2 ${
            isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
          }`}
        >
          {/* Image Section */}
          <div className="h-56">
            <img
              src={photo}
              alt="Food"
              className="w-full h-full object-cover"
            />
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
            <p className="mt-2">
              <span className="font-semibold">Notes:</span> {notes}
            </p>

            {/* Additional Info */}
            <div className="mt-4 space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Location:</span> {location}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Quantity:</span>{" "}
                {parseInt(quantity)}
              </p>
              <p className="text-sm">
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
                <p className="font-semibold">{donator?.donatorName}</p>
                <p className="text-sm">{donator?.donatorEmail}</p>
              </div>
            </div>

            {/* Request Button */}
            <div className="mt-6">
              <button
                onClick={() => handleOpenModal(_id)}
                className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Request
              </button>
            </div>

            {/* Modal */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div
                className={`modal-box ${
                  isDarkMode
                    ? "bg-gray-950 text-gray-400 border border-gray-600"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                <h3 className="font-bold text-lg mb-4 text-center text-orange-500">
                  Request Food
                </h3>
                <form
                  onSubmit={handleRequest}
                  className={`w-full p-4 rounded-lg ${
                    isDarkMode ? "bg-gray-950" : "bg-white"
                  }`}
                >
                  {/* Food Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Food name
                    </label>
                    <input
                      type="text"
                      value={name}
                      readOnly
                      className={`w-full p-2 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-900 text-gray-400"
                          : "border-gray-300 bg-gray-100 text-gray-700"
                      } rounded-md focus:outline-none`}
                    />
                  </div>

                  {/* Food Image */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Food Image
                    </label>
                    <img
                      src={photo}
                      alt="Food"
                      className={`w-full h-32 object-cover rounded-md border ${
                        isDarkMode ? "border-gray-600" : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Donator Email */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Donator Email
                    </label>
                    <input
                      type="email"
                      value={donator?.donatorEmail}
                      readOnly
                      className={`w-full p-2 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-900 text-gray-400"
                          : "border-gray-300 bg-gray-100 text-gray-700"
                      } rounded-md focus:outline-none`}
                    />
                  </div>

                  {/* Donator Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Donator Name
                    </label>
                    <input
                      type="text"
                      value={donator?.donatorName}
                      readOnly
                      className={`w-full p-2 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-900 text-gray-400"
                          : "border-gray-300 bg-gray-100 text-gray-700"
                      } rounded-md focus:outline-none`}
                    />
                  </div>

                  {/* User Email */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      readOnly
                      className={`w-full p-2 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-900 text-gray-400"
                          : "border-gray-300 bg-gray-100 text-gray-700"
                      } rounded-md focus:outline-none`}
                    />
                  </div>

                  {/* Request Date */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Request Date
                    </label>
                    <input
                      name="requestDate"
                      type="text"
                      value={format(new Date(), "P")}
                      readOnly
                      className={`w-full p-2 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-900 text-gray-400"
                          : "border-gray-300 bg-gray-100 text-gray-700"
                      } rounded-md focus:outline-none`}
                    />
                  </div>

                  {/* Pickup Location */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      readOnly
                      className={`w-full p-2 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-900 text-gray-400"
                          : "border-gray-300 bg-gray-100 text-gray-700"
                      } rounded-md focus:outline-none`}
                    />
                  </div>

                  {/* Expire Date */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Expire Date
                    </label>
                    <input
                      type="text"
                      value={format(new Date(expiredDate), "P")}
                      readOnly
                      className={`w-full p-2 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-900 text-gray-400"
                          : "border-gray-300 bg-gray-100 text-gray-700"
                      } rounded-md focus:outline-none`}
                    />
                  </div>

                  {/* Additional Notes */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      required
                      name="notes"
                      placeholder="Add any additional notes here..."
                      className={`w-full p-2 border ${
                        isDarkMode
                          ? "border-gray-600 bg-gray-900 text-gray-400"
                          : "border-gray-300 bg-white text-gray-700"
                      } rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none`}
                    ></textarea>
                  </div>

                  {/* Modal Action Buttons */}
                  <div className="modal-action">
                    <button
                      className={`py-2 px-5 rounded-md ${
                        isDarkMode
                          ? "bg-orange-500 hover:bg-orange-600"
                          : "bg-custom-orange hover:bg-orange-500"
                      } text-white transition`}
                      type="submit"
                    >
                      Request
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>

        {/* Go Back Button */}
        <Link to="/available-foods" className="order-2 lg:order-1">
          <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 flex items-center">
            <BsArrowLeft className="mr-2" /> Go back to Available foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodDetails;
