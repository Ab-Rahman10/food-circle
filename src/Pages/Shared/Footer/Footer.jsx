const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto px-4 py-8 space-y-8 lg:space-y-0 lg:flex lg:justify-between">
        {/* Column 1 */}
        <div>
          {/* Logo Section */}
          <div className="mb-4">
            <img
              src="/path-to-your-logo.png"
              alt="Food Circle Logo"
              className="h-12 w-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-orange-500">Food Circle</h3>
          <p className="mt-2 text-sm">
            Sharing food, spreading happiness. Join us in making a difference in
            your community by sharing surplus food with those in need.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a
                href="/available-foods"
                className="hover:underline hover:text-orange-500"
              >
                Available Foods
              </a>
            </li>
            <li>
              <a
                href="/add-food"
                className="hover:underline hover:text-orange-500"
              >
                Add Food
              </a>
            </li>
            <li>
              <a
                href="/myFood-request"
                className="hover:underline hover:text-orange-500"
              >
                My Food Requests
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-2">Contact Us</h3>
          <p>
            Email:{" "}
            <span className="text-orange-500">support@foodcircle.com</span>
          </p>
          <p>
            Phone: <span className="text-orange-500">+123 456 7890</span>
          </p>
          <p>
            Address:{" "}
            <span className="text-orange-500">
              123 Food Lane, Foodtown, FC 56789
            </span>
          </p>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="h-6 w-6 text-orange-500"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="/icons/twitter.svg"
                alt="Twitter"
                className="h-6 w-6 text-orange-500"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="h-6 w-6 text-orange-500"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-orange-500 pt-4 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-500">Food Circle</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
