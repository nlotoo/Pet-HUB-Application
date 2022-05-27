import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Logout = () => {

    let navigate = useNavigate()

    useEffect(() => {
        navigate('/login')
        window.localStorage.clear()
        window.location.reload();
    },[])

}

export default Logout