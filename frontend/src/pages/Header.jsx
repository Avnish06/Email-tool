import React from "react";
import { useNavigate } from "react-router-dom";
import { useDetails } from "../Context/userContext";

const Header = () => {

  const navigate = useNavigate();
  const { user, setUser } = useDetails();

  /* ================= LOGOUT ================= */

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
        >
          Hatbaliya Technology
        </h1>

        {/* NAVIGATION */}
        <div className="flex items-center space-x-6">

          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">

            <span
              onClick={() => navigate("/campaigns")}
              className="cursor-pointer hover:text-indigo-600"
            >
              Campaigns
            </span>

            <span
              onClick={() => navigate("/analytics")}
              className="cursor-pointer hover:text-indigo-600"
            >
              Analytics
            </span>

            <span
              onClick={() => navigate("/templates")}
              className="cursor-pointer hover:text-indigo-600"
            >
              Templates
            </span>

            <span
              onClick={() => navigate("/contacts")}
              className="cursor-pointer hover:text-indigo-600"
            >
              Contacts
            </span>

          </nav>

          {/* AUTH BUTTONS */}
          {user ? (
            <div className="flex items-center gap-4">

              <span className="text-sm text-gray-600 hidden sm:block">
                Hi, {user.name}
              </span>

              <button
                onClick={logout}
                className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm hover:bg-indigo-50 transition"
              >
                Logout
              </button>

            </div>
          ) : (
            <div className="flex gap-3">

              <button
                onClick={() => navigate("/login")}
                className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded-full text-sm hover:bg-indigo-50 transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="bg-indigo-600 text-white px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
};

export default Header;
