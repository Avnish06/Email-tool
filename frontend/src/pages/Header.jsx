import React from "react";
import { useNavigate } from "react-router-dom";
import { useDetails } from "../Context/userContext";
import { Zap } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useDetails();

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="topbar fixed top-0 left-0 right-0 h-16 bg-background border-b border-border flex items-center z-[100] backdrop-blur-md">
      <div className="container max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
        {/* Left: Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
           <div className="logo-mark w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
            <Zap size={18} fill="currentColor" />
          </div>
          <div className="brand-name text-lg font-bold text-foreground tracking-tight">
            Hatbaliya Technology
          </div>
        </div>

        {/* Center: Main nav */}
        <nav className="nav-main hidden md:flex items-center gap-8">
          {[
            { label: "Campaigns", path: "/campaigns" },
            { label: "Analytics", path: "/analytics" },
            { label: "Templates", path: "/campaign/templates" },
            { label: "Contacts", path: "/contacts" },
          ].map((item) => (
            <span
              key={item.label}
              onClick={() => navigate(item.path)}
              className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {item.label}
            </span>
          ))}
        </nav>

        {/* Right: Auth */}
        <div className="nav-right flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                Hi, {user.name}
              </span>
              <button
                onClick={logout}
                className="nav-pill px-5 py-1.5 rounded-full border border-primary/50 text-primary text-sm font-medium hover:bg-primary/5 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="nav-pill px-5 py-1.5 rounded-full border border-primary/50 text-primary text-sm font-medium hover:bg-primary/5 transition-all"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="nav-pill nav-pill-filled px-6 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
              >
                Sign Up
              </button>
            </div>
          )}
          <div className="ml-2 pl-4 border-l border-border">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
