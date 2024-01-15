import axios from "axios";
import { BASE_URL } from "../../constants/Urls";

export const PutAdress = (form, addressUrl, dataUp, getUserData) => {
  const url = `${BASE_URL}/${addressUrl}`;
  axios

    .put(url, form, { headers: { auth: localStorage.getItem("token") } })
    .then((res) => {
      dataUp(res);
    })
    .catch((err) => console.log(err.response));
};