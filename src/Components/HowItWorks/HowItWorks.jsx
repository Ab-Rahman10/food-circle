import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="py-12 my-5 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Our mission is to connect food donors with those in need. Here's how
          you can make a difference.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Step 1: Donate
            </h3>
            <p className="text-gray-600">
              Simply sign up and donate food items that you no longer need.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Step 2: Connect
            </h3>
            <p className="text-gray-600">
              Our platform connects you with people who need food in your area.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Step 3: Help
            </h3>
            <p className="text-gray-600">
              Make a difference by sharing your food and helping those in need.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Ready to make an impact?
          </h3>
          <p className="text-gray-700 mb-6">
            Join us today and become a part of this incredible mission.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
