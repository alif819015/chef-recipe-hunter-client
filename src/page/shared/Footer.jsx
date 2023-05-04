/* eslint-disable no-unused-vars */
import React from "react";
import img1 from '../../../public/google.png';
import img2 from '../../../public/facebook.png';
import img3 from '../../../public/git.png';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 w-full text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">About Us</h3>
              <p className="text-sm">
              Authentic Chinese cuisine made with fresh, locally sourced ingredients at our family-owned restaurant. Warm and inviting atmosphere with exceptional service. Come dine with us or order takeout today!
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <p className="text-sm">
                123 Main St
                <br />
                Anytown, China 12345
                <br />
                Phone: (+86) 456-7890
                <br />
                Email: info@restaurant.com
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Opening Hours</h3>
              <p className="text-sm">
                Monday - Friday: 11am - 10pm
                <br />
                Saturday - Sunday: 9am - 11pm
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h3 className="text-lg font-bold mb-2">Follow Us</h3>
              <div className="flex items-center space-x-4">
                <img style={{width: '28px'}} src={img1} alt="" />
                <img style={{width: '28px'}} src={img2} alt="" />
                <img style={{width: '38px'}} src={img3} alt="" />
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition duration-300"
                >
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition duration-300"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition duration-300"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm">
              &copy; 2023 Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
