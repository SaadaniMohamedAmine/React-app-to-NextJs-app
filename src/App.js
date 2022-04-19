import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PublicLayout from "./layouts/PublicLayout";
import Details from "./components/Details";
import RealUsers from "./pages/RealUsers";

const App = () => {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users-plat" element={<RealUsers />} />
          <Route path="/users-plat/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  );
};

export default App;
