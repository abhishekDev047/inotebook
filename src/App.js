import React from "react";
import Navbar from "./Components/Navbar";
import Notebook from "./Components/Notebook";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Notebook />}> </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
