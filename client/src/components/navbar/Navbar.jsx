import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Navbar</h1>
      <>
        <button onClick={handle}>button</button>
      </>
    </div>
  );
};
export default Navbar;
