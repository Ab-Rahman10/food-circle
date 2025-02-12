import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-orange-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Food Circle
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-12"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Food Circle is a community-driven platform designed to connect food
          enthusiasts with local vendors, offering a wide variety of fresh and
          delicious food options. It aims to promote local businesses and
          provide users with a seamless experience to discover and order food.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* New content sections */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Our Mission
          </h3>
          <p className="text-lg md:text-xl text-gray-700">
            At Food Circle, our mission is to bring people together by providing
            access to fresh, local food. We work directly with local vendors to
            showcase their products, ensuring that every meal is not only
            delicious but also supports the local economy.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            What We Offer
          </h3>
          <p className="text-lg md:text-xl text-gray-700">
            Food Circle provides a wide range of options for food lovers.
            Whether you're looking for breakfast, lunch, dinner, or snacks, we
            have something for everyone. Our platform is easy to navigate, and
            our vendors are always ready to deliver fresh, high-quality food
            directly to your door.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Why Choose Us?
          </h3>
          <p className="text-lg md:text-xl text-gray-700">
            - **Fresh Ingredients**: All food items are made with fresh, locally
            sourced ingredients. - **Support Local Businesses**: By choosing
            Food Circle, you help promote local food vendors. - **Seamless
            Ordering**: Our platform is user-friendly and allows you to quickly
            find, order, and track your food. - **Wide Selection**: From
            traditional dishes to new culinary creations, we offer a broad range
            of food options.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Our Community
          </h3>
          <p className="text-lg md:text-xl text-gray-700">
            Food Circle is more than just a platform for food delivery. It's a
            community of passionate food lovers, home cooks, and local chefs.
            Our mission is to build lasting relationships between food
            enthusiasts and local vendors, making every meal an opportunity to
            support a neighbor.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Join the Food Circle
          </h3>
          <p className="text-lg md:text-xl text-gray-700">
            Ready to explore a world of flavors? Join the Food Circle today and
            start discovering delicious food from local vendors. Whether you're
            looking for a quick snack or a full meal, we have everything you
            need to satisfy your cravings.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.button
            className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600"
            whileHover={{ scale: 1.05 }}
          >
            Discover More
          </motion.button>
          <motion.button
            className="bg-gray-700 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            Join Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
