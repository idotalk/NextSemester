import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Graphcomp from "./components/Graph";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/table" element={<Table />} />
          <Route path="/graph" element={<Graphcomp />} />
        </Routes>
        <footer class="pt-4 text-muted text-center text-small">
          <p class="mb-1">
            Check Project @&nbsp;
            <a href="https://github.com/idotalk" target="_blank" rel="noopener">
              idotalk
            </a>
          </p>
          <br></br>
        </footer>
      </div>
    </Router>
  );
};

export default App;
