import React, { useEffect } from "react";
import HomePage from "pages/HomePage";
import Login from "pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import getCookie from "utils/utils";
import Contacts from "pages/Contacts";
import "styles/App.css";

const App = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie() == "") navigate("/login");
  }, []);

  return (
    <>
      <header className="navbar">
        <Link to="/">
          <h1>CRM-Era</h1>
        </Link>
      </header>
      <main className="grid">
        <aside className="sidebar">
          <Link to="/contacts">Contacts</Link>
          <Link to={`/contacts`}>Contacts</Link>
        </aside>
        <div className="main-grid">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
