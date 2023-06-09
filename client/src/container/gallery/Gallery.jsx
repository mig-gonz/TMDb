import { useContext } from "react";
import stateContext from "../../context/StateContext";
import { GalleryItem } from "../../components";
import "./gallery.css";

const Gallery = () => {
  const { query, movies } = useContext(stateContext);

  return (
    <div>
      <div className="trending__container">
        <h1 className="trending__title">Trending Movies</h1>
      </div>
      <GalleryItem />
    </div>
  );
};
export default Gallery;
