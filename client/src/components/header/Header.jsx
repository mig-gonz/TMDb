import { useContext } from "react";
import "./header.css";
import backgroundImage from "../../assets/krists-luhaers-AtPWnYNDJnM-unsplash.jpg";
import stateContext from "../../context/StateContext";

const Header = () => {
  // const { movies } = useContext(stateContext);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="header__container">
      <div
        className="hero h-full w-5/6 rounded-2xl"
        style={backgroundImageStyle}
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold header__content-color">
              Welcome to shmovie fanatics
            </h1>
            <p className="mb-5">
              Explore the world of movies with shmovie fanatics. Discover the
              latest releases, dive into your favorite genres, and stay
              up-to-date with the hottest trends in cinema. Join our community
              of movie enthusiasts and share your passion for films. Whether
              you're a casual viewer or a hardcore cinephile, shmovie fanatics
              is your ultimate destination for all things movies.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
