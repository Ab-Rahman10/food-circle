import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../../Provider/AuthProvider";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Food Circle has transformed my dining experience! The variety and freshness of the dishes are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I love the community vibe here. Every meal feels special and the service is top-notch.",
    rating: 4,
  },
  {
    id: 3,
    name: "Alex Johnson",
    text: "A wonderful platform that connects food lovers with local vendors. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Davis",
    text: "The quality of food is excellent and the delivery is super fast!",
    rating: 5,
  },
  {
    id: 5,
    name: "Michael Brown",
    text: "Great selection of dishes and fantastic customer service.",
    rating: 4,
  },
  {
    id: 6,
    name: "Olivia Wilson",
    text: "I enjoy the variety of cuisines offered here. My favorite is the local specialties.",
    rating: 5,
  },
  {
    id: 7,
    name: "Liam Taylor",
    text: "An amazing platform that supports local vendors and offers delicious meals.",
    rating: 4,
  },
  {
    id: 8,
    name: "Sophia Anderson",
    text: "Highly recommended for anyone who loves exploring new food options.",
    rating: 5,
  },
  {
    id: 9,
    name: "Noah Martinez",
    text: "The food quality is always consistent and superb!",
    rating: 5,
  },
  {
    id: 10,
    name: "Ava Thomas",
    text: "I appreciate the care taken in preparing every dish. Truly delightful!",
    rating: 4,
  },
  {
    id: 11,
    name: "Ethan Jackson",
    text: "The experience of ordering through Food Circle is smooth and satisfying.",
    rating: 5,
  },
  {
    id: 12,
    name: "Isabella White",
    text: "A perfect blend of local flavors and quality service. Will order again!",
    rating: 5,
  },
];

const Reviews = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className={`pt-24 pb-32 ${isDarkMode ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 ${
            isDarkMode ? "text-gray-100" : "text-gray-800"
          }`}
          data-aos="fade-down"
        >
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className={`p-6 rounded-lg shadow-md ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3
                    className={`text-xl font-semibold ${
                      isDarkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {review.name}
                  </h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.182c.969 0 1.371 1.24.588 1.81l-3.391 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.175 0l-3.392 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.182a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
