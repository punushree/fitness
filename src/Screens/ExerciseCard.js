import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const ExerciseCard = ({ Exercises }) => {
  console.log("Value comming in params is", Exercises);
  const [pageNumber, setPageNumber] = useState(0);
  const ExercisePerPage = 15;
  const pagesVisited = pageNumber * ExercisePerPage;

  const DisplayExercises = Exercises.slice(
    pagesVisited,
    pagesVisited + ExercisePerPage
  ).map((item, index) => {
    return (
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" key={index}>
        <div className="card">
          <div className="card-body bg-white">
            <img src={item.gifUrl} alt="exercises" />
            <h4 className="card-title text-center font-bold">{item.name}</h4>
            <p className="card-text">
              <span className="font-bold mr-2">target muscles:</span>
              {item.target}
            </p>
          </div>
        </div>
      </div>
    );
  });
  const pageCount = Math.ceil(Exercises.length / ExercisePerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="container">
      <div className="row">
        {DisplayExercises}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default ExerciseCard;
