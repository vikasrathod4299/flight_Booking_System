import React, { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
  },[user]);

  return (
    <authContext.Provider value={{user, setUser}}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
