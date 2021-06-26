import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToDetails } from '../routes/coordinator';

export const getData = (username, request, setUserData, history) => {
    
        axios.get(`${BASE_URL}/${username}/${request}`, {headers: {Authorization: "f59776e8e3809cc716405f2592bf5e1083fdf6d5"}})
        .then((res) => {
            setUserData(res.data)
            goToDetails(history, username, request)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    
}