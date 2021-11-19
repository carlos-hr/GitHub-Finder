import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { getUser } from "../services/requests";

const GlobalState = (props) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [userData, setUserData] = useState(null);
  const data = { user, setUser, username, setUsername, userData, setUserData };
  
  useEffect(() => {
    getUser(username, setUser);
  }, [username]);
  

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
