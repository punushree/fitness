import React from "react";
import logo from '../Assets/crown.png'
import logo1 from '../Assets/heart-attack.png';
import logo2 from '../Assets/gym.png';
const Pricing = () => {
  const pricing = [
    {
      id: 1,
      plan: "Basic",
      price: "25",
      icon:logo1,
      facilities: [
        {
          fac1: "Personal Trainer",
          fac1_icon:
            "far fa-times-circle align-self-center me-2 text-xl font-bold",
          fac2: "Free Consultation of Dietician",
          fac2_icon:
            "far fa-times-circle align-self-center me-2 text-xl font-bold",
          fac3: "2 hours of exercises",
          fac3_icon:
            "fal fa-check-circle align-self-center me-2 text-xl font-bold",
          fac4: "Free Fitness Merchandise",
          fac4_icon:
            "far fa-times-circle align-self-center me-2 text-xl font-bold",
        },
      ],
    },
    {
      id: 2,
      plan: "Premium",
      price: "50",
      icon:logo,
      facilities: [
        {
          fac1: "Personal Trainer",
          fac1_icon:
            "far fa-times-circle align-self-center me-2 text-xl font-bold",
          fac2: "Free Consultation of Dietician",
          fac2_icon:
            "far fa-check-circle align-self-center me-2 text-xl font-bold",
          fac3: "5 hours of exercises",
          fac3_icon:
            "fal fa-check-circle align-self-center me-2 text-xl font-bold",
          fac4: "Free Fitness Merchandise",
          fac4_icon:
            "far fa-times-circle align-self-center me-2 text-xl font-bold",
        },
      ],
    },
    {
      id: 3,
      plan: "Pro",
      price: "100",
      icon:logo2,
      facilities: [
        {
          fac1: "Personal Trainer",
          fac1_icon:
            "fal fa-check-circle align-self-center me-2 text-xl font-bold",
          fac2: "Free Consultation of Dietician",
          fac2_icon:
            "far fa-check-circle align-self-center me-2 text-xl font-bold",
          fac3: "8 hours of exercises",
          fac3_icon:
            "fal fa-check-circle align-self-center me-2 text-xl font-bold",
          fac4: "Free Fitness Merchandise",
          fac4_icon:
            "fal fa-check-circle align-self-center me-2 text-xl font-bold",
        },
      ],
    },
  ];
  return (
    <>
      <h1 className="font-bold text-3xl text-center mt-5 mb-4">
        CHECK OUT OUR MEMBERSHIP PLANS
      </h1>
      <div className="container p-4">
        <div className="row justify-center sm:justify-between md:justify-between lg:justify-center">
          {pricing.map((item) => (
            <div className=" col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div class="card hover:scale-110" key={item.id}>
                <div class="card-body ">
                  <img src={item.icon} alt="icon"  className="h-8 w-8 my-3"/>
                  <h5 class="card-title font-bold text-3xl ">{item.plan}</h5>
                  <p class="card-text font-bold text-2xl mb-3">
                    $<sub className="text-3xl">{item.price}</sub>
                  </p>
                  {item.facilities.map((facilities) => (
                    <>
                    <div className="flex my-2" key={item.id}>
                      <i className={facilities.fac1_icon}></i>
                      <p className="text-xl">{facilities.fac1}</p>
                    </div>
                      <div className="flex my-2" key={item.id}>
                      <i className={facilities.fac2_icon}></i>
                      <p className="text-xl">{facilities.fac2}</p>
                    </div>
                      <div className="flex my-2" key={item.id}>
                      <i className={facilities.fac3_icon}></i>
                      <p className="text-xl">{facilities.fac3}</p>
                    </div>
                      <div className="flex my-2" key={item.id}>
                      <i className={facilities.fac4_icon}></i>
                      <p className="text-xl">{facilities.fac4}</p>
                      </div>
                      </>
                  ))}
                  <p className="font-bold">See more benefits <i class="fal fa-arrow-right font-bold"></i></p>
                  <button type="button" className="bg-white d-block m-auto px-3 py-2 font-bold rounded my-3">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
