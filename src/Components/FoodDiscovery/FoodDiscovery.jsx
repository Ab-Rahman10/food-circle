import { useContext, useEffect } from "react";
import { motion } from "motion/react";
import { RxTransparencyGrid } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../../Provider/AuthProvider";

const FoodDiscovery = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gray-950"
          : "bg-gradient-to-tr from-white via-orange-100"
      } `}
    >
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <section className="flex flex-col lg:flex-row gap-14 lg:gap-72 items-center justify-between py-10">
          {/* Left Content */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <h2
              className={`text-4xl font-bold ${
                isDarkMode ? "text-white/90" : "text-gray-800"
              }`}
            >
              Discover the Joy of Food
            </h2>
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              At Food Circle, we bring people together through the love of food.
              Explore our curated selection of dishes and dive into a culinary
              experience like no other. Let's make every meal a celebration!
            </p>
            <button className="px-6 py-3 bg-orange-500 text-white text-lg rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
              Explore Now
            </button>
          </div>

          {/* Right Content */}
          <div className="mt-6 md:mt-0 relative flex-1 space-y-4">
            <motion.div
              animate={{ x: [30, 50, 30] }}
              transition={{ duration: 5, delay: 2, repeat: Infinity }}
            >
              <img
                className="w-48 h-28 object-cover rounded-tl-3xl rounded-tr-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-500"
                src="https://i.ibb.co.com/0JYkJTT/pexels-photo-376464.jpg"
                alt="Food 1"
              />
            </motion.div>
            <div className="flex items-center">
              <motion.div
                animate={{ x: [-30, -50, -30] }}
                transition={{ duration: 5, delay: 1, repeat: Infinity }}
              >
                <img
                  className="w-48 h-28 object-cover rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl border-b-4 border-r-4 border-blue-500"
                  src="https://i.ibb.co.com/3BdbZMq/pexels-photo-5840079.jpg"
                  alt="Food 2"
                />
              </motion.div>
              <motion.div
                animate={{ x: [20, 50, 20] }}
                transition={{ duration: 5, delay: 2, repeat: Infinity }}
                className="text-5xl text-blue-600"
              >
                <RxTransparencyGrid />
              </motion.div>
            </div>
            <motion.div
              animate={{ x: [30, 50, 30] }}
              transition={{ duration: 5, delay: 1, repeat: Infinity }}
            >
              <img
                className="w-48 h-28 object-cover rounded-tl-3xl rounded-tr-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-500"
                src="https://i.ibb.co.com/TLFrBWg/pexels-photo-958545.jpg"
                alt="Food 3"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodDiscovery;
