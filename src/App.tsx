import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <MainComponent />
      </div>
    </Router>
  );
}

export default App;
