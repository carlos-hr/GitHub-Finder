import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToDetails } from "../routes/coordinator";
import dotenv from "dotenv";

dotenv.config();

const header = {
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
};

export const getData = (username, request, setUserData, history) => {
  axios
    .get(`${BASE_URL}/${username}/${request}`, header)
    .then((res) => {
      setUserData(res.data);
      goToDetails(history, username, request);
    })
    .catch((err) => {
      setUserData(false);
    });
};

export const getUser = (username, setUser) => {
  if (username !== null) {
    axios
      .get(`${BASE_URL}/${username}`, header)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        setUser(false);
      });
  }
};
