import { BASE_URL } from '../../constants/Urls'
import axios from "axios"
import {goToHomePage} from '../../routes/Coordinator'


export const addAdress = (body, navigate) => {
    
        axios.put(`${BASE_URL}/address`, body, { 
            headers: {
          auth: localStorage.getItem("token")
      }})
          .then((res) => {
            localStorage.clear()
            localStorage.setItem("token", res.data.token)
            localStorage.setItem('hasAddress', res.data.user.hasAddress) 
            localStorage.setItem("address", res.data.user.address)
            goToHomePage(navigate)
        })
        .catch((err) => alert(err.response.data.message))
    }

   


