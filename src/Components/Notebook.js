import React from "react";

const Notebook = () => {
  return (
    <>
          <div className="container">
      <div className="mb-3 container">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title of the Note
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         Your Note 
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="container d-flex m-auto">

      <button type="button" className="btn btn-info">add note</button>
      </div>
      </div>
    </>
  );
};

export default Notebook;