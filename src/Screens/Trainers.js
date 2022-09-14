import React from "react";
import logo from "../Assets/team-1.jpg";
import logo1 from "../Assets/team-2.jpg";
import logo2 from "../Assets/team-3.jpg";
import '../App.css';
const Trainers = () => {
  const trainers = [
    {
      id: 1,
      image: logo,
      name: "Sarah",
      awards: "World Fitness Runner Up 2012",
      exp: "3yrs",
    },
    {
      id: 2,
      image: logo1,
      name: "John",
      awards: "Heavy Weight Champion 2020",
      exp: "5yrs",
    },
    {
      id: 3,
      image: logo2,
      name: "Emily",
      awards: "World Fitness Winner 2011",
      exp: "2yrs",
    },
  ];
  return (
    <>
      <h1 className="text-center text-2xl mb-7 uppercase">Our Trainers</h1>
      <div className="row justify-center sm:justify-between md:justify-center lg:justify-between p-3">
        {trainers.map((trainer) => (
          <div className=" col-12 col-sm-6 col-md-4 col-lg-3 mb-5 hover:scale-110" key={trainer.id}>
            <div class="flex justify-center">
              <div className="rounded-lg shadow-lg max-w-sm trainerCard">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img
                    class="rounded-t-xl "
                    src={trainer.image}
                    alt="icon"
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-bold text-center">
                    Expert Trainers
                  </h5>
                  <p class="text-gray-700 text-base mb-2">
                   {trainer.name}
                  </p>
                  <p class="text-gray-700 text-base mb-2">
                   {trainer.awards}
                  </p>
                  <p class="text-gray-700 text-base mb-2">
                   Exp:-{trainer.exp}
                  </p>
                </div>
              </div>
            </div>
          </div>))}
       </div>
  
    </>
  );
};

export default Trainers;
