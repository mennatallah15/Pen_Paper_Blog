import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import "./Nav.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import ChangePhoto from "./ChangePhoto";
import axios from "axios";

export default function Nav() {
  const [loggedUser, setLoggedUser] = useState([]);

  const { logout } = useLogout();
  const { user } = useAuthContext();

  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/users/${user?.user?.id}`
        );
        setLoggedUser(data);
      } catch (error) {
        console.log("Error in get User", error);
      }
    }
    // getUser();

    if (user) getUser();
  }, [user]);

  const [profilePhoto, setProfilePhoto] = useState(null);

  console.log("userrr", loggedUser?.email);
  const handleClick = () => {
    logout();
  };

  return (
    <>
      <div className="navbar py-16">
        <div className="container px-10 flex justify-between">
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
                className="menu menu-compact dropdown-content mt-3 shadow bg-[#f9f5f0] rounded-box w-52 p-5"
              >
                <Link to="/">
                  <li className="hover:text-[#f9f5f0] hover:bg-[#805541] rounded p-2">
                    Home
                  </li>
                </Link>
                <Link to="/signup">
                  <li className="hover:text-[#f9f5f0] hover:bg-[#805541] rounded p-2">
                    Register
                  </li>
                </Link>
                <Link to="/login">
                  <li className="hover:text-[#f9f5f0] hover:bg-[#805541] rounded p-2">
                    Login
                  </li>
                </Link>
                {user && (
                  <>
                    {/* <span>{user?.user?.email}</span> */}
                    <li
                      className="hover:text-[#f9f5f0] hover:bg-[#805541] rounded p-2"
                      onClick={handleClick}
                    >
                      Log Out
                    </li>
                  </>
                )}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl lg:inline hidden Logo">
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
          <div className="navbar-end flex justify-end">
            <a className="lg:hidden flex justify-end">
              <img className="w-28" src={loggedUser?.profilePhoto} alt="" />
            </a>
            {!user && (
              <div className="max-[1024px]:hidden">
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
                <div
                  className="relative cursor-pointer flex justify-center items-center gap-4 border-2 border-dotted border-amber-800 p-2 group"
                  // onMouseEnter={() => {
                  //   setShowDropDown(1);
                  // }}
                  // onMouseLeave={() => {
                  //   setShowDropDown(0);
                  // }}
                >
                  <img
                    className="btn-circle w-16 h-16"
                    src="../src/assets/Images/seaGirl.jpg"
                    alt="photo of the user"
                  />
                  <span className="overflow-hidden text-clip">
                    {user?.user?.email}
                  </span>

                  <div className="absolute top-20 mt-1 z-10 hidden group-hover:flex flex-col items-center">
                    <div className="w-0 h-0 border-t-0 border-transparent border-[15px] border-b-[15px] border-b-white cursor-auto">
                      &nbsp;
                    </div>
                    <div className="w-64 bg-white p-4 flex flex-col items-start gap-4 cursor-auto">
                      <ChangePhoto
                        setProfilePhoto={setProfilePhoto}
                        loggedUser={loggedUser}
                      />
                      <button className="" onClick={handleClick}>
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
