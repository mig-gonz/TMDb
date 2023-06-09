import { useContext } from "react";
import stateContext from "../../context/StateContext";
import "./galleryItem.css";

const GalleryItem = () => {
  const { query, movies } = useContext(stateContext);

  return (
    <div className="gallery__container">
      <div className="overflow-x-auto  w-5/6">
        <div className="flex space-x-4">
          {movies.map((movie) => (
            <div
              className="card card-compact w-96 bg-base-100 shadow-xl"
              key={movie.id}
            >
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </figure>
              <div className="card-body w-48 ">
                <h2 className="card-title">{movie.title}</h2>
                <p>Released: {movie.release_date}</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GalleryItem;
