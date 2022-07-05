import './NavigationBar.css';

import { Link, } from 'react-router-dom';
import { loginStorageCheker } from '../../../services/loginStorage';
import { navSlide } from '../../../services/Slider';
import SearchBox from '../../AdditionalComponents/SearchBox/SearchBox';

const NavigationBar = () => {

    let isLoged = loginStorageCheker();
    let userID = window.localStorage.getItem('User ID')


    




    return (
        <nav className='navigation-bar'>
            <div onClick={navSlide} className={`burger-desktop`} >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div >
            <div className='logo'>

                <h4><Link className='logo-heading' to="/">The Pet Care</Link></h4>
            </div>

            <ul className='nav-links-desktop' >
                <li><Link className='menu-a-tag' to="/">Home</Link></li>
                <li><Link className='menu-a-tag' to="/about-us">About </Link></li>
                <li><Link className='menu-a-tag' to="/get-all-pets">All dog Catalog </Link></li>
                {isLoged && <li><Link className='menu-a-tag' to={"/my-favorites/" + userID}>My Favorites </Link></li>}

                {isLoged && <li><Link className='menu-a-tag' to={"/user-profile/" + userID}>Profile </Link></li>}
                {isLoged && <li><Link className='menu-a-tag' to={"/get-user-pets/" + userID}>Your Catalog </Link></li>}
                {isLoged && <li><Link className='menu-a-tag' to={"/create-new-pet/" + userID}>Add new pet </Link></li>}
                {!isLoged && <li><Link className='menu-a-tag' to="/sign-up">Register </Link></li>}
                {!isLoged && <li><Link className='menu-a-tag' to="/login">Login </Link></li>}
                {isLoged && <li><Link className='menu-a-tag' to="/logout">Logout </Link></li>}

            </ul>


            <SearchBox />
        </nav >
    );

};

export default NavigationBar;