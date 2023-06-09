import React, { useState, createContext, useContext } from "react";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Context provider");
  return context;
};

const ContextProvider = ({ children }) => {
  const [tabValue, setTabValue] = useState();
  const [session, setSession] = useState(null);
  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(true);

  const [setselectedBook, setSetselectedBook] = useState(null);

  const [notFound, setNotFound] = useState(false);

  return (
    <authContext.Provider
      value={{
        tabValue,
        setTabValue,
        session,
        setSession,
        query,
        setQuery,
        notFound,
        setNotFound,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default ContextProvider;
