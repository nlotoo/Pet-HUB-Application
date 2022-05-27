import { useEffect } from 'react';
import { loginStorageCheker } from '../../../services/loginStorage';
import './NavigationBar.css'

const NavigationBar = () => {

    let isLoged = loginStorageCheker()
    useEffect(() => {

    }, [])

    return (<div className='navbar-root' >
        <header>
            <nav className="nav-bar">
                <ul className='nav-bar-ul-list'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">About</a></li>
                    <li><a href="/contact-us">Contatct us</a></li>
                    {!isLoged && <li><a href="/sign-up">Register</a></li>}
                    {!isLoged && <li><a href="/login">Login</a></li>}

                    {isLoged && <li><a href="/logout">Logout</a></li>}
                </ul>
            </nav>
        </header>
    </div>)

};

export default NavigationBar;