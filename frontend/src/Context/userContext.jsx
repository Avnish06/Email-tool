import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

// Create Context
const UserContext = createContext(null);

// Provider
export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch (err) {
      console.error("Failed to parse user from storage", err);
      return null;
    }
  });

  // Sync with localStorage
  useEffect(() => {

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }

  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook
export const useDetails = () => {

  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useDetails must be used inside UserContextProvider"
    );
  }

  return context;
};
