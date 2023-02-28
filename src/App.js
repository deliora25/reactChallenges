import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "./components/LayoutPage";
import ThankYouPage from "./components/ThankYouPage";
// import Sample from "./components/Sample";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
