import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import ToDoPage from "../pages/ToDoPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layout/MainLayout";
import MyToDoPage from "../pages/MyToDoPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<RegisterPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="todo" element={<MyToDoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
