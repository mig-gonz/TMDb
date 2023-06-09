import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useNavigate,
} from "react-router-dom";
import {
  About,
  Contact,
  // Header,
  Login,
  Movies,
  Navbar,
  Profile,
  Register,
} from "./components";
import { Home } from "./container";
import "./App.css";
import stateContext from "./context/StateContext";
// useParams(), useNavigate(),
// createContext(), useContext(), useReducer()

function App() {
  const [movies, setMovies] = useState([]);

  const apiKey = "api_key=55f130ea060d300d440fc9bf79c531c8";
  const randomMovieSearch = `https://api.themoviedb.org/3/discover/movie?${apiKey}`;

  const randomMovies = () => {
    fetch(randomMovieSearch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    randomMovies();
  }, []);

  return (
    <stateContext.Provider value={{ movies, setMovies }}>
      <Router>
        <div className="header__bg">
          <Navbar />
        </div>
        {/* gallery maybe reuse the components so they display to rows */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </stateContext.Provider>
  );
}

export default App;
