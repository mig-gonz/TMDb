import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  About,
  Contact,
  Header,
  Login,
  Navbar,
  Profile,
  Register,
} from "./components";
import { Home } from "./container";
import "./App.css";
// useParams(), useNavigate(),
// createContext(), useContext(), useReducer()

function App() {
  return (
    <Router>
      <div className="header__bg">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
