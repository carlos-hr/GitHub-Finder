import React, { useEffect, useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { getUser } from '../services/requests';

const GlobalState = (props) => {

    const [user, setUser] = useState(null)
    const [username, setUsername] = useState(null)
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        getUser(username, setUser)
    }, [username])
    const data = {user, setUser, username, setUsername, userData, setUserData}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState