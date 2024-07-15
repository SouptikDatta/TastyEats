import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaCog, FaSignOutAlt, FaUserCircle, FaUser } from "react-icons/fa"; // Importing icons from FontAwesome
import Logo from '../assets/tasty-eats.png'
import { BiSolidDashboard } from "react-icons/bi";
import useAdmin from "../hooks/useAdmin";
import User from '../assets/user.svg'

const Profile = ({ user }) => {
  const [isAdmin] = useAdmin()
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 border-2 border-greenBG shadow-lg rounded-full hover:scale-125">
              {
                user.photoURL ? <img
                  alt="Profile"
                  src={user.photoURL ? user.photoURL : User}
                /> : <FaUserCircle className="w-full h-full text-green" />
              }
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-greenBG text-lg text-white">
            {/* Logo Section */}
            <div className="flex items-center justify-center bg-white p-2 rounded-lg shadow-inner shadow-black mb-4">
              <img src={Logo} alt="Logo" className="w-36" /> {/* Replace with your logo path */}
            </div>
            {/* Sidebar content here */}
            <ul>
              {isAdmin && (
                <li>
                  <Link className="hover:bg-green flex items-center" to="/dashboard">
                    <BiSolidDashboard className="mr-2" /> Dashboard
                  </Link>
                </li>
              )}
              <li>
                <Link className="hover:bg-green flex items-center" to="/">
                  <FaHome className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link className="hover:bg-green flex items-center" to="/order">
                  <FaShoppingCart className="mr-2" /> Order
                </Link>
              </li>
              <li>
                <Link className="hover:bg-green flex items-center" to="/update-profile">
                  <FaCog className="mr-2" /> Profile
                </Link>
              </li>
              <li>
                <a className="hover:bg-green flex items-center" onClick={handleLogout}>
                  <FaSignOutAlt className="mr-2" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
