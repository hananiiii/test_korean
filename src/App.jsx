import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home.tsx";

function App() {

  return (
    <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <div className="pages">
          <Routes>
            <Route path="/test_korean/" element={<Home />} />
            <Route path="/test_korean/home" element={<Home />} />
           
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
  )
}

export default App