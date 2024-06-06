import Error from "Pages/Error";
import Home from "Pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
