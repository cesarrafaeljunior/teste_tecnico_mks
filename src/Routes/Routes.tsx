import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="mainPage" />} />
      <Route path="/mainPage" element={<MainPage />} />
    </Routes>
  );
};

export { RoutesMain };
