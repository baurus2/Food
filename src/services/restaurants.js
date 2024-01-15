import axios from "axios"
import { BASE_URL } from "../constants/Urls"

export const getRestaurantsDetails = (setRestaurantDetail, id, setLoading) => {
    setLoading(true);
    const header = {
        headers: {
          auth: localStorage.getItem("token")
            
        }
      }

    axios.get(`${BASE_URL}/restaurants/${id}`, header)
        .then((res) => {
            setRestaurantDetail(res.data.restaurant)
            setLoading(false);
        })
        .catch((err) => {
            alert(err.message)
            setLoading(false);
        })
}