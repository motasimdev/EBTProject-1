import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section className="bg-gray-400">
      <div className="w-[1280px] m-auto">
        {/* <div className="py-5 text-center">---- copyright ----</div> */}
        <footer className=" text-gray-100 pt-10 pb-6 mt-10">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ====== Column 1 ====== */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-3">
                Api
              </h2>
              <p className="text-sm leading-relaxed">
                Working together to make a positive impact in our community
                through honesty, integrity, and service.
              </p>
            </div>

            {/* ====== Column 2 ====== */}
            <div>
              <h3 className="text-white font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to={"/"} className="hover:text-white duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="hover:text-white duration-300">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="hover:text-white duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="hover:text-white duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* ====== Column 3 ====== */}
            <div>
              <h3 className="text-white font-semibold mb-3">Contact Info</h3>
              <ul className="text-sm space-y-2">
                <li>📍 Demra, Dhaka, Bangladesh</li>
                <li>📧 info@barakahtrust.org</li>
                <li>📞 +880 1234-567890</li>
              </ul>
            </div>
          </div>

          {/* ====== Divider ====== */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-300">MOTASIM</span>.
            All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
