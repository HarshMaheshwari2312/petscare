import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import CategorizedAnimal from "./Pages/CategorizedAnimals";
import PetProfile from "./Pages/PetProfile";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Homepage/>} />
        <Route path=":category">
          <Route index element={<CategorizedAnimal />} />
          <Route index={false} path=":id" element={<PetProfile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
