import React from "react";
import PropTypes from 'prop-types';

const Notes = (props) => {
  return (
    <div className="accordion accordion-flush container" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {props.title}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};
Notes.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
export default Notes;
