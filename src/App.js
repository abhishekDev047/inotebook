import React from "react";
import Navbar from "./Components/Navbar";
import Notebook from "./Components/Notebook";
import Notes from "./Components/Notes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Notebook />}> </Route>
          <Route exact path="/Notes" element={<Notes title="hello" description="working" />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
