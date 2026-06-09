import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/loginPage";
import DasboardPage from "./page/DashboardPage";
import HomePage from "./page/HomePage";
import SideBar from "./component/sideBar";
import RegisterPage from "./page/registerPage";
import AboutUsPage from "./page/AboutUsPage";

function App() {
  const [authedUser, setAuthedUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("temanMood_user");
    if (savedUser) {
      setAuthedUser(JSON.parse(savedUser));
    }
  }, []);

  const onLogOutHandler = () => {
    setAuthedUser(null);
    localStorage.removeItem("temanMood_user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  };

  if (authedUser === null) {
    return (
      <div className="home-container">
        <main className="home-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="layout">
        <SideBar
          authedUser={authedUser}
          onLogOutHandler={onLogOutHandler}
        />
      </div>
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DasboardPage />} />
          <Route path="/About" element={<AboutUsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;