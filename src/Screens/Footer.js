import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full text-white p-3">
      <div className="row justify-center">
        <div className="col-3">
          <h1 className=" text-white font-bold text-2xl">
            Quick Links
          </h1>
          <ul >
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Trainer</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-3">
          <h1 className=" text-white font-bold text-2xl">
            Opening Hours
          </h1>
          <ul>
            <li>
              Monday: <span className="text-red-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Tuesday: <span className="text-red-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Wednesday: <span className="text-red-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Thursday: <span className="text-red-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Friday: <span className="text-red-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Saturday: <span className="text-red-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Sunday: <span className="text-red-700">Closed</span>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h1 className=" text-white font-bold text-2xl">Address</h1>
          <ul>
            <li>
              <i class="fas fa-phone text-red-700 mr-2"></i>   7980226858
            </li>
            <li>
              <i class="fas fa-phone text-red-700 mr-2"></i>   9980326858
            </li>
            <li>
              <i class="fas fa-envelope text-red-700 mr-2"></i>   samrat@gmail.com
            </li>
            <li>
              <i class="fas fa-map-marker-alt text-red-700 mr-2"></i>   Kolkata
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h1 className="text-white font-bold text-2xl">
            NewsLetter
          </h1>
          <p className="text-gray-500 my-2 ">Subscribe For Latest Updates</p>
          <input type="text" placeholder="Enter your email" className="form-control my-2" />
          <button type="button" className="py-2 px-3 bg-red-600 rounded">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
