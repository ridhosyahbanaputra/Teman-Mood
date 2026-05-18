import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginPage from "./page/loginPage";
import './style/index.css'
import DasboardPage from "./page/DashboardPage";
import Navigation from "./component/navigation";
import InfoUser from "./component/infoUser";
import HomePage from "./page/HomePage";
import Footer from "./component/footer";
import HomeNavigation from "./component/homeNavigation";
import KuisonerPage from "./page/kuisonerPage";
import SideBar from "./component/sideBar";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const savedUser = localStorage.getItem("temanMood_user");
    if (savedUser) {
      setAuthedUser(JSON.parse(savedUser));
    }
  }, [])

  const onLoginHandle = (email, password) => {
    if (email === "user@user.com" && password === "user") {
      const dummyUser = { name: "User", email: email, role: "user" };
      setAuthedUser(dummyUser);
      localStorage.setItem("temanMood_user", JSON.stringify(dummyUser));
      return true;
    } else {
      alert("email atau password salah")
    }
  }

  const onLogOutHandler = () => {
    setAuthedUser(null);
    localStorage.removeItem("temanMood_user");
  }

  if (authedUser === null) {
    return (
      <div className="home-container">
        <header className="home-header">
          <h1>TemanMood</h1>
          <HomeNavigation />
        </header>
        <main className="home-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLoginHandle={onLoginHandle} />} />
            <Route path="*" element={<LoginPage onLoginHandle={onLoginHandle} />} />
          </Routes>
        </main>
        {/* <footer className="home-footer">
          <Footer />
        </footer> */}
      </div>
    );
  }
  return (
    <div className="app">
      <div className="layout">
        {/* <h1>TemanMood</h1> */}
        <SideBar
          authedUser={authedUser}
          onLogOutHandler={onLogOutHandler}
        />
      </div>
      <main className="home-main">
        <h1>TemanMood</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DasboardPage />} />
          <Route path="/kuisoner" element={<KuisonerPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;