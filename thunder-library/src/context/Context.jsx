import React, { useState, createContext, useContext } from "react";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Context provider");
  return context;
};

const ContextProvider = ({ children }) => {
  const [tabValue, setTabValue] = useState();

  return (
    <authContext.Provider
      value={{
        tabValue,
        setTabValue,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default ContextProvider;
