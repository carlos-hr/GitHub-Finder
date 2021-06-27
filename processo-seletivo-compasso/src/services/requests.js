import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToDetails } from '../routes/coordinator';

const header = {
    headers: {
        Authorization: "c1d162a1cd97dbd948a24e626689f981b1f302a0"
    }
}

export const getData = (username, request, setUserData, history) => {
    
    axios.get(`${BASE_URL}/${username}/${request}`, header)
    .then((res) => {
        setUserData(res.data)
        goToDetails(history, username, request)
    })
    .catch((err) => {
        alert(err.response.data)
        setUserData(false)
    })
    
}

export const getUser = ( username, setUser) => {

    if(username !== null) {
        axios.get(`${BASE_URL}/${username}`, header)
        .then((res) => {
            setUser(res.data)
            console.log("entrou aqui")
        })
        .catch((err) => {
            setUser(false)
            console.log("entroua")
            alert(err.response.data.message)
        })
    }   
}