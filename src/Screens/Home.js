import React, { useState } from "react";
import logo from "../Assets/img-1.jpg";
import logo1 from "../Assets/img-2.jpg";
import logo2 from "../Assets/img-3.jpg";
import BMI from "./bmi";
import ContentFirst from "./ContentFirst";
import Footer from "./Footer";
import Midcontent from "./Midcontent";
import Pricing from "./Pricing";
import Trainers from "./Trainers";
const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? <BMI setShow={setShow} show={show}  /> : null}
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img src={logo} class="d-block w-100 h-1/5 " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <button
                className=" border-2 rounded border-orange-400 hover:cursor-pointer text-4xl p-7 "
                onClick={() => setShow(!show)}
              >
                BMI CALCULATOR
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={logo1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={logo2} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Midcontent />
      <ContentFirst />
      <Trainers />
      <Pricing />
      <hr></hr>
      <Footer />
    </>
  );
};

export default Home;
