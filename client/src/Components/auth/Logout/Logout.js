import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Logout = () => {

    let navigate = useNavigate()

    useEffect(() => {
        navigate('/login')
        window.localStorage.clear()
    })

}

export default Logout