import React from "react";
import Notes from "./Notes";
import {useEffect, useState} from "react";

const Notebook = () => {

  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState("");
  const [ids, setIds] = useState(1);
  

  const handleChange = (event)=>{
    setValue(event.target.value);
  };
 useEffect(()=>{
    const notes00= [];
    for (let i = 0; i < ids; i++) {
      const note = localStorage.getItem(i);
      if(note){
        notes00.push(note)
      }
    };
    setNotes(notes00)
    console.log(" hey i am running")
 },[ids])
  const addTodo= ()=>{
  localStorage.setItem(ids,value)
  setIds(ids+1);
  };
  return (
    <>
          <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         Your Note 
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={value}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="container d-flex m-auto">

      <button type="button" className="btn btn-info" onClick={addTodo}>add note</button> 
      </div>
        <Notes/>
      </div>
    </>
  );
};

export default Notebook;