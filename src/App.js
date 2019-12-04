import React from "react";
import "./App.css";
import Survey from "./components/survey";
import Header from "./components/header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Survey />
    </React.Fragment>
  );
}

export default App;
