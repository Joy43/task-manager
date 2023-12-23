import { Link } from "react-router-dom";
import icon from "../../../assets/icon.png";
import useAuth from "../../../Hooks/useAuth";
import GoogleAuth from "../../authinfo/Googlelogin/Googlelogin";

const Navbar = () => {
  // ------------google login---------
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut().then().catch();
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
    </>
  );
  return (
    <>
      <div
        className="navbar background-color: #00DBDE  z-10  max-w-screen-xl  text-white"
        style={{
          background: "linear-gradient(90deg, #00DBDE 0%, #8A2387 100%)",
        }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 gap-2 shadow bg-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn  btn-ghost normal-case text-xl">
            <img className="w-14" src={icon} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to="dashboard/userhome">
            <button className="btn btn-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list-task"
                viewBox="0 0 16 16"
              >
                <path d="M6 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
              Let’s Explore
            </button>
          </Link>

          {/* ---------google --------------*/}
          <div>
            <div></div>

            {user ? (
              <button onClick={handleLogout} className="btn">
                {" "}
                Sign out{" "}
              </button>
            ) : (
              <GoogleAuth></GoogleAuth>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
