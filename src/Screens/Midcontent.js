import React, { useState, useEffect } from "react";
import services from "../API_SERVICES/service";
import ExerciseCard from "./ExerciseCard";

const Midcontent = () => {
  const [show, setShow] = useState(false);
  const [exercises, setExercise] = useState("");
  useEffect(() => {
    console.log("Value of set is", exercises);
  });
  const ProgramSetter = (id) => {
    let params;
    if (id === 1) {
      params = "upper arms";
    } else if (id === 2) {
      params = "cardio";
    } else {
      params = "waist";
    }
    services
      .get(params)
      .then((response) => {
        setExercise(response.data);
        setShow(!show);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Programs = [
    {
      id: 1,
      program_name: "Body Building",
      desc: " This program mainly focuses on whole body building starting from chest legs biceps triceps shoulder back",
      icon_name: "far fa-dumbbell text-3xl text-white",
    },
    {
      id: 2,
      program_name: "Cardio Training",
      desc: "This program mainly focuses on strengthening your cardiovascular system.",
      icon_name: "fas fa-running text-3xl text-white",
    },
    {
      id: 3,
      program_name: "Fat Burning",
      desc: "This program mainly focuses on getting rid of your rigid fat from your body",
      icon_name: "fas fa-fire text-3xl text-white",
    },
  ];
  return (
    <div style={{marginBottom: '50px'}}>
      <h1 className="text-center font-bold text-2xl uppercase my-4">
       {show === true ? "Explore Exercises" : "Explore Our Programs"} 
      </h1>
      {!show ? (
        <div class="flex flex-wrap space-around md:justify-center sm:justify-center lg:justify-center p-2">
          {Programs.map((program) => (
            <div
              class="w-full sm:w-40 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-gray-400 my-2 mx-2 hover:bg-green-500 h-auto rounded p-3"
              key={program.id}
           
            >
              <i className={program.icon_name}></i>
              <p className=" text-white font-bold my-2 ">
                {program.program_name}
              </p>
              <p className="text-white">{program.desc}</p>
              <button
                className="bg-black  rounded p-2 text-white my-3"
                onClick={() => ProgramSetter(program.id)}
              >
                Join Now <i class="fad fa-arrow-right  ml-3 font-bold"></i>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ExerciseCard Exercises={exercises} />
      )}
    </div>
  );
};

export default Midcontent;
