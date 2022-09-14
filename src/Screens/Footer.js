import React from "react";

const Footer = () => {
  return (
    <div className="bg-light w-full text-dark p-3">
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
              Monday: <span className="text-green-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Tuesday: <span className="text-green-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Wednesday: <span className="text-green-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Thursday: <span className="text-green-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Friday: <span className="text-green-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Saturday: <span className="text-green-700">6:00am - 10:30pm</span>
            </li>
            <li>
              Sunday: <span className="text-green-700">Closed</span>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h1 className=" text-dark font-bold text-2xl">Address</h1>
          <ul>
            <li>
              <i class="fas fa-phone text-green-700 mr-2"></i>   7980226858
            </li>
            <li>
              <i class="fas fa-phone text-green-700 mr-2"></i>   9980326858
            </li>
            <li>
              <i class="fas fa-envelope text-green-700 mr-2"></i>   samrat@gmail.com
            </li>
            <li>
              <i class="fas fa-map-marker-alt text-green-700 mr-2"></i>   Kolkata
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h1 className="text-white font-bold text-2xl">
            NewsLetter
          </h1>
          <p className="text-gray-500 my-2 ">Subscribe For Latest Updates</p>
          <input type="text" placeholder="Enter your email" className="form-control my-2" />
          <button type="button" className="py-2 px-3 bg-green-600 rounded">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
