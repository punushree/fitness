import React, {useState } from "react";
const BMI = ({ setShow, show }) => {
  const [bmi, setBmi] = useState({
    weight: "",
    height: "",
    status: "",
  });
const [body_mass, setBodymass] = useState("");
  function calculateBMI() {
      let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
      console.log("BMI Value calculated is", bmi);
    setBodymass(bmi);
    let bmiStatus = getStatus(bmi);
    setBmi({ ...bmi, status: bmiStatus, height: "", weight: "" });
  }

  function getStatus(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 25) {
      return "Normal";
    } else if (bmi >= 25 && bmi <= 30) {
      return "Overweight";
    } else if (bmi >= 30 && bmi <= 35) {
      return "Obese Class 1";
    } else if (bmi >= 35 && bmi <= 40) {
      return "Obese Class 2";
    } else {
      return "Obese Class 3";
    }
  }
  const handleChange = (e) => {
    e.preventDefault();
    setBmi({ ...bmi, [e.target.name]: e.target.value });
  };
  const { weight, height,status } = bmi;
  return (
    <div
      className="w-full h-screen z-10 fixed top-0"
      style={{ background: "rgba(0, 0, 0, 0.9)" }}
    >
      <div className="bg-white rounded w-1/2  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
        <i class="fas fa-times float-right" onClick={() => setShow(!show)}></i>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Enter Your Weight in (Kgs):
            </label>
            <input
              type="email"
              class="form-control"
              onChange={handleChange}
              name="weight"
              value={weight}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Enter Your Height in (cm)
            </label>
            <input
              type="password"
              class="form-control"
              name="height"
              value={height}
              onChange={handleChange}
            />
          </div>
        </form>
        <button
          type="button"
          className="uppercase font-bold bg-blue-500 text-black d-block m-auto  p-2 rounded"
          onClick={calculateBMI}
        >
          calculate
        </button>
        {body_mass && (
          <div className="mt-4">
            <p>
              According to your height and weight:-
            </p>
            <p>Your BMI is: {body_mass} </p>
            <p>You are currently: {status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;
