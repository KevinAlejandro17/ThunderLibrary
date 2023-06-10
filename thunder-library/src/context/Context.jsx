import React, { useState, createContext, useContext, useEffect } from "react";
import { supabase } from "../../backend/client";
import { toast } from "react-hot-toast";

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
  const [selectedBook, setSelectedBook] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [rentals, setRentals] = useState([]);

  const getCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    //console.log(user);
    setCurrentUser(user);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getRentals = async (userID = currentUser.id) => {
    const { data, error } = await supabase
      .from("rental")
      .select()
      .eq("id_user", userID);

    if (error) {
      toast.error(error.message);
    }
    setRentals(data);
  };

  getRentals();

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
        selectedBook,
        setSelectedBook,
        currentUser,
        rentals,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default ContextProvider;
