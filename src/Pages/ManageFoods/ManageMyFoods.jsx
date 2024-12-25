import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/Context";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const ManageMyFoods = () => {
  const [manageFoods, setManageFoods] = useState([]);
  const { user } = useAuth();
  const email = user?.email;

  useEffect(() => {
    const fetchingManageFoods = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/food-manage/${email}`
      );
      console.log(data);
      setManageFoods(data);
    };
    fetchingManageFoods();
  }, []);

  // Delete food

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <div className="mt-10 mb-5">
        <h2 className="text-2xl font-bold text-center">Manage my Foods</h2>
        <p className="text-center text-sm mt-2 text-gray-500">
          View and manage the foods you've added. Update or delete items as
          needed to keep your list up to date.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="text-gray-700 bg-gray-100">
              <th className="px-4 py-3 text-left"></th>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Food Name</th>
              <th className="px-4 py-3 text-left">Expire date</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {manageFoods.map((food, idx) => (
              <tr key={food._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-4">{idx + 1}</td>
                <td className="px-4 py-4 w-16 h-16">
                  <img
                    src={food.photo}
                    alt="Food"
                    className="w-full h-full object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-4">{food.name}</td>
                <td className="px-4 py-4">
                  {format(new Date(food.expiredDate), "P")}
                </td>
                <td className="px-4 py-4">{food.location}</td>
                <td className="px-4 py-4">{food.status}</td>
                <td className="px-4 py-4 flex gap-2">
                  <Link to={`/update-food/${food._id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Go Back Button */}
      <Link to="/available-foods" className="flex justify-center mt-3">
        <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 flex items-center">
          <BsArrowLeft className="mr-2" /> Go back to Available foods
        </button>
      </Link>
    </div>
  );
};

export default ManageMyFoods;
