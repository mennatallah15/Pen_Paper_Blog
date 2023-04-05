import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Home from "../Pages/Home";
import "./Nav.css";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Nav() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <div>
        <div className="navbar">
          <div className="container mx-auto">
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
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <Link to="/signup">
                    <li>Register</li>
                  </Link>
                  <Link to="/login">
                    <li>Login</li>
                  </Link>
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl lg:inline md:hidden sm:hidden Logo">
                <img
                  className="lg:w-32 ml-10"
                  src="src/assets/Images/Logo2.png"
                  alt=""
                />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li className="text-2xl">
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              {!user && (
                <div>
                  <Link to="/signup">
                    <a className="btn flex float-right">Register</a>
                  </Link>
                  <Link to="/login">
                    <a className="btn flex float-right">Login</a>
                  </Link>
                </div>
              )}
              {user && (
                <>
                  <span>{user.email}</span>
                  <button
                    className="btn flex float-right"
                    onClick={handleClick}
                  >
                    Log Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
