import { useContext } from "react";
import stateContext from "../../context/StateContext";
import "./display.css";

const Display = () => {
  const { movies } = useContext(stateContext);

  const randomIndex = Math.floor(Math.random() * movies.length);

  const randomMovie = movies[randomIndex];

  const randomtitle = randomMovie?.title || "";
  const randomContent = randomMovie?.overview || "";
  const backdropPath = randomMovie?.backdrop_path || "";

  return (
    <div className="display__container">
      <div className="hero w-5/6 h-full">
        <div className="hero-content flex-col lg:flex-row h-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
            className="max-w-sm rounded-lg shadow-2xl h-64"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office Buzz</h1>

            <h2 className="font-bold">{randomtitle}</h2>
            <p className="py-6 over-view">{randomContent}</p>
            <button className="btn btn-primary">view more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
