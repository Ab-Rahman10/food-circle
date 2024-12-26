import { motion } from "motion/react";

const FoodDiscovery = () => {
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto">
      <section className="flex flex-col lg:flex-row gap-14 lg:gap-72 items-center justify-between py-10">
        {/* Left Content */}
        <div className="space-y-4 text-center md:text-left flex-1">
          <h2 className="text-4xl font-bold text-gray-800">
            Discover the Joy of Food
          </h2>
          <p className="text-gray-600 text-lg">
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
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          >
            <img
              className="w-48"
              src="https://i.ibb.co.com/0JYkJTT/pexels-photo-376464.jpg"
            />
          </motion.div>
          <motion.div
            animate={{ x: [-50, -100, -50] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          >
            <img
              className="w-48"
              src="https://i.ibb.co.com/3BdbZMq/pexels-photo-5840079.jpg"
            />
          </motion.div>
          <motion.div
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          >
            <img
              className="w-48"
              src="https://i.ibb.co.com/TLFrBWg/pexels-photo-958545.jpg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoodDiscovery;
