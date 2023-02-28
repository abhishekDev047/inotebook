import React from "react";

const Notes = (props) => {
  return (
    <ol className="list-group list-group-numbered my-5">
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Task <input className="form-check-input mx-1" type="checkbox" value="" /></div>
      </div>
      <button type="button" className="btn btn-outline-danger" onClick={props.delete}>Delete</button>
    </li>
    </ol>
  );
};
export default Notes;
