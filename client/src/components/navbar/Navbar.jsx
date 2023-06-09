import { useNavigate } from "react-router-dom";
import "./navbar.css";
import blackSwanImage from "../../assets/blackswan.jpg";
import whiteSwanImage from "../../assets/chris-zhang-mpK_8ekpfu8-unsplash.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  const paths = [
    { label: "Shmovie Fanatics", path: "/" },
    { label: "Movies", path: "/movies" },
    { label: "About", path: "/about" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 z-10 w-full">
      <div className="flex-1">
        {paths.map((path) => (
          <a
            key={path.path}
            className="btn btn-ghost normal-case text-2xl"
            onClick={() => {
              handleNavigation(path.path);
              console.log(path.path);
            }}
          >
            {path.label}
          </a>
        ))}
      </div>

      <div className="flex-none gap-2">
        <div className="form-control input__width">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-34 md:w-auto"
          />
        </div>

        {/* If logged in then display below code */}

        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={whiteSwanImage} alt="swan" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};
export default Navbar;
