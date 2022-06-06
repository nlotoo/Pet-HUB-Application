
import { useEffect } from 'react';
import { Link, } from 'react-router-dom'

import { loginStorageCheker } from '../../../services/loginStorage';
import useResponsiveDesign from '../../../services/useResposiveDisplayTool';
import './NavigationBar.css'


const NavigationBar = () => {

    let isLoged = loginStorageCheker()



  


    const menuDrop = (e) => {

        return 'tablet-menu-down'
        

    }



    return (<div className='navbar-root' >
        <header>
            <nav className={`nav-bar${useResponsiveDesign()}`}>
                {"-tablet" === useResponsiveDesign() ? <div className='icon'><button onClick={menuDrop} >&#9776;</button></div> : ''}
                <ul className={`nav-bar-ul-list${useResponsiveDesign()}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="/contact-us">Contatct us</Link></li>
                    {isLoged && <li><Link to="/user-profile">Profile</Link></li>}
                    {isLoged && <li><Link to="/pets-catalog">Pets Catalog</Link></li>}
                    {isLoged && <li><Link to="/create-new-pet">Add new pet</Link></li>}
                    {!isLoged && <li><Link to="/sign-up">Register</Link></li>}
                    {!isLoged && <li><Link to="/login">Login</Link></li>}
                    {isLoged && <li><Link to="/logout">Logout</Link></li>}
                </ul>
            </nav>
        </header>
    </div >)

};

export default NavigationBar;