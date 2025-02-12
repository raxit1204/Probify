import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-600 to-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://cdn-icons-png.flaticon.com/128/8991/8991181.png"
                alt="Logo"
                className="h-10 w-10"
              />
              <h2 className="text-2xl font-bold">Probify</h2>
            </div>
            <p className="text-primary-100">
              Empowering your financial decisions
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-primary-100 hover:text-white transition"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-primary-100 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-primary-100 hover:text-white transition"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-primary-100 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-400 p-2 rounded-full hover:bg-primary-300 transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="#"
                className="bg-primary-400 p-2 rounded-full hover:bg-primary-300 transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="#"
                className="bg-primary-400 p-2 rounded-full hover:bg-primary-300 transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-400 text-center text-primary-100">
          © 2025 Probify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
