import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../../Provider/AuthProvider";

const SeasonalFeast = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Sample data for seasonal dishes
  const featuredDishes = [
    {
      id: 1,
      name: "Spicy Autumn Chili",
      description:
        "A warm and comforting chili with seasonal spices, perfect for chilly nights.",
      image: "https://i.ibb.co.com/TLFrBWg/pexels-photo-958545.jpg",
      status: "Trending",
    },
    {
      id: 2,
      name: "Maple-Glazed Chicken",
      description:
        "Juicy chicken with a sweet maple glaze, perfect for a cozy dinner.",
      image: "https://i.ibb.co.com/bzj1Dh9/pexels-photo-12737808.jpg",
      status: "New",
    },
    {
      id: 3,
      name: "Pumpkin Risotto",
      description: "A creamy pumpkin risotto that's full of autumn flavors.",
      image: "https://i.ibb.co.com/W5Sstrm/pexels-photo-9792458.jpg",
      status: "Seasonal",
    },
  ];

  return (
    <section
      className={`seasonal-feast  ${
        isDarkMode
          ? "bg-gray-950"
          : "bg-gradient-to-tr from-white via-orange-100"
      }`}
      data-aos="fade-up"
    >
      <div className="w-11/12 lg:w-9/12 mx-auto py-8">
        <div className="text-center" data-aos="zoom-in">
          <h2
            className={`text-3xl font-extrabold mb-4 ${
              isDarkMode ? "text-white/90" : "text-gray-800"
            }`}
          >
            Seasonal Feast: What's Fresh & Trending
          </h2>
          <p
            className={`text-lg mb-10 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore the flavors of the season! Discover fresh ingredients,
            trending dishes, and seasonal specials picked just for you.
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className={`dish-card ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-all duration-200`}
                data-aos="flip-left"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isDarkMode ? "text-gray-100" : "text-gray-700"
                    }`}
                  >
                    {dish.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {dish.description}
                  </p>
                  <button
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-700 transition"
                    data-aos="fade-right"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8" data-aos="fade-up">
            <Link to="/available-foods">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-700 transition">
                Explore Available Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalFeast;
