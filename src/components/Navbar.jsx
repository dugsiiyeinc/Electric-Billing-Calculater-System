import React, { useState } from "react";
import { X, Menu, User, LogIn, LogOut } from "lucide-react"; // Added LogIn and LogOut icons
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const onlineUser = JSON.parse(localStorage.getItem("onlineUser")) || null;
  const navigate = useNavigate();

  const toggleDrawerBtn = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("onlineUser");
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  // Ripple effect function
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add("ripple");

    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(ripple);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
        >
          Electric Billing
        </NavLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-700 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 transition-all duration-200"
                  : "hover:text-indigo-600 transition-colors duration-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billingCalculator"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 transition-all duration-200"
                  : "hover:text-indigo-600 transition-colors duration-200"
              }
            >
              Exchange
            </NavLink>
          </li>
          {onlineUser && (
            <li>
              <NavLink
                to="/savedData"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 transition-all duration-200"
                    : "hover:text-indigo-600 transition-colors duration-200"
                }
              >
                Saved Data
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 transition-all duration-200"
                  : "hover:text-indigo-600 transition-colors duration-200"
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Profile Icon and Login Button (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          {onlineUser && (
            <button
              onClick={handleProfileClick}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Profile"
            >
              {onlineUser.profilePic ? (
                <img
                  src={onlineUser.profilePic}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <User size={24} className="text-gray-700" />
              )}
            </button>
          )}
          <button
            onClick={onlineUser ? handleLogout : () => navigate("/login")}
            onMouseDown={createRipple} // Add ripple effect
            className={`${
              onlineUser
                ? "bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800"
                : "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
            } text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 relative overflow-hidden`}
          >
            {onlineUser ? (
              <>
                <LogOut size={20} className="inline-block" />
                <span>Log out</span>
              </>
            ) : (
              <>
                <LogIn size={20} className="inline-block" />
                <span>Log In</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          onClick={toggleDrawerBtn}
          aria-label="Toggle Menu"
        >
          {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileDrawerOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 absolute w-full left-0 top-full animate-slideDown">
          <ul className="flex flex-col space-y-4 text-center text-gray-700 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold transition-colors duration-200"
                    : "hover:text-indigo-600 transition-colors duration-200"
                }
                onClick={toggleDrawerBtn}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/billingCalculator"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold transition-colors duration-200"
                    : "hover:text-indigo-600 transition-colors duration-200"
                }
                onClick={toggleDrawerBtn}
              >
                Exchange
              </NavLink>
            </li>
            {onlineUser && (
              <li>
                <NavLink
                  to="/savedData"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-600 font-semibold transition-colors duration-200"
                      : "hover:text-indigo-600 transition-colors duration-200"
                  }
                  onClick={toggleDrawerBtn}
                >
                  Saved Data
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold transition-colors duration-200"
                    : "hover:text-indigo-600 transition-colors duration-200"
                }
                onClick={toggleDrawerBtn}
              >
                About
              </NavLink>
            </li>
            {onlineUser && (
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-600 font-semibold transition-colors duration-200"
                      : "hover:text-indigo-600 transition-colors duration-200"
                  }
                  onClick={toggleDrawerBtn}
                >
                  Profile
                </NavLink>
              </li>
            )}
            <li>
              <button
                onClick={onlineUser ? handleLogout : () => navigate("/login")}
                onMouseDown={createRipple} // Add ripple effect
                className={`${
                  onlineUser
                    ? "bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800"
                    : "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
                } text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full flex items-center justify-center space-x-2 relative overflow-hidden`}
              >
                {onlineUser ? (
                  <>
                    <LogOut size={20} className="inline-block" />
                    <span>Log out</span>
                  </>
                ) : (
                  <>
                    <LogIn size={20} className="inline-block" />
                    <span>Log In</span>
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;