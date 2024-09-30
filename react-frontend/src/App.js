import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Graphcomp from "./components/Graph";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import "./App.css";
import * as dotenv from "dotenv";

dotenv.config();
require('dotenv').config()

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.BACKURL;

  useEffect(() => {
    // Fetch data from Flask backend
    axios
      .get(`"${apiUrl}"`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/table" element={<Table data={data} />} />
          <Route path="/graph" element={<Graphcomp />} />
        </Routes>
        <footer class="pt-4 text-muted text-center text-small">
          <p class="mb-1">
            Check Project @&nbsp;
            <a href="https://github.com/idotalk" target="_blank" rel="noopener">
              idotalk
  `"${apiUrl}"`
            </a>
          </p>
          <br></br>
        </footer>
      </div>
    </Router>
  );
};

export default App;
