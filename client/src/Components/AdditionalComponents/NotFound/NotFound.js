import { useNavigate } from 'react-router-dom'
import './not-found-page.css'

const NotFound = () => {

    const navigate = useNavigate();

    return (<div className="error-wrapper">
        <div onClick={()=> navigate('/')}>
            <h1>404 Error</h1>
            <h3>Sorry, we can’t seem to find what you’re looking for.</h3>
        </div>
    </div>)

}

export default NotFound