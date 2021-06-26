import React, { useEffect, useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const GlobalState = (props) => {

    const [user, setUser] = useState(null)
    const [username, setUsername] = useState("")
    const [searchedUser, setSearchedUser] = useState(null)
    const [userData, setUserData] = useState([])
    const getUser = () => {
        if (username !== "" ) {
            axios.get(`${BASE_URL}/${username}`, {headers: {Authorization: "f59776e8e3809cc716405f2592bf5e1083fdf6d5"}})
            .then((res) => {
                setUser(res.data)
            })
            .catch(() => {
                setUser(false)
            })
        } 
    }
    useEffect(() => {
        getUser()
    }, [username])
    const data = {user, setUser, username, setUsername, searchedUser, setSearchedUser, userData, setUserData}
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState