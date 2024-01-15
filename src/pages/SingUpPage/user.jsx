import axios from "axios"
import { BASE_URL } from '../../constants/Urls'
import {goToAdressPage} from '../../routes/Coordinator'


export const signup = (body, navigate) => {
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem('hasAddress', res.data.user.hasAddress) 
            goToAdressPage(navigate)
        })
        .catch((err) => alert(err.response.data.message))
    }




