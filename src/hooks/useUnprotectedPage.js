import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/Coordinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            localStorage.clear()
            goToLoginPage(navigate)
        }
    }, [navigate])

}

export default useUnprotectedPage