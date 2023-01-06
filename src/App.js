import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import "./App.css";
import { Details } from "./pages/Details/Details";
import { Orders } from "./pages/Orders";

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <div className="dashboard-body">
          <Routes>
            <Route exact path="/" element={<Orders/>} />
            <Route exact path="/Details" element={<Details/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
