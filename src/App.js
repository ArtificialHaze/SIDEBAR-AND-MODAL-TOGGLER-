import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};

export default App;
