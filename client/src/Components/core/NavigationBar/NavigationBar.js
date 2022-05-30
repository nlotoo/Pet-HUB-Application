
import { Link,  } from 'react-router-dom'

import { loginStorageCheker } from '../../../services/loginStorage';
import './NavigationBar.css'

const NavigationBar = () => {

    let isLoged = loginStorageCheker()


    return (<div className='navbar-root' >
        <header>
            <nav className="nav-bar">
                <ul className='nav-bar-ul-list'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="/contact-us">Contatct us</Link></li>
                    <li><Link to="/pets-catalog">Pets Catalog</Link></li>
                    <li><Link to="/user-profile">Profile</Link></li>
                    <li><Link to="/create-new-pet">Add new pet</Link></li>
                    {!isLoged && <li><Link to="/sign-up">Register</Link></li>}
                    {!isLoged && <li><Link to="/login">Login</Link></li>}
                    {isLoged && <li><Link to="/logout">Logout</Link></li>}
                </ul>
            </nav>
        </header>
    </div >)

};

export default NavigationBar;