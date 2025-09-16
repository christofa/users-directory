import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import FetchPage from "./Pages/FetchPage";
import AxiosPage from "./Pages/AxiosPage";


function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fetch" element={<FetchPage />} />
      <Route path="/axios" element={<AxiosPage />} />
  
    </Routes>
  )
}

export default App;
