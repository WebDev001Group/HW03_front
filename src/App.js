import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./router/privateRoute";
import LoginPage  from "./components/loginPage/loginPage";
import NotePage  from "./components/mainPage/notePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/notes" element={<PrivateRoute />}>
          <Route path="/notes" element={<NotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
