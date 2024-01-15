import { BASE_URL } from "../constants/Urls"
import axios from "axios"
import { goToHomePage } from "../routes/Coordinator"


export const placeOrder = (body, navigate, restaurantId) => {
    const header = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }

    axios
      .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, header)
      .then((res) => {
        alert("Pedido criado com sucesso!");
        goToHomePage(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };