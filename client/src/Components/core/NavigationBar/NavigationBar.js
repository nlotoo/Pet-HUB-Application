import './NavigationBar.css';

import { Link, NavLink } from 'react-router-dom';
import { loginStorageCheker } from '../../../services/loginStorage';
import { navSlide } from '../../../services/Slider';
import SearchBox from '../../AdditionalComponents/SearchBox/SearchBox';
import { Waether } from '../../AdditionalComponents/Weather/Weather';

const NavigationBar = () => {

    let isLoged = loginStorageCheker();
    let userID = window.localStorage.getItem('User ID')


    const actionStyle = ({ isActive }) => {
        return isActive
            ? 'menu-a-tag active-link'
            : 'menu-a-tag'
    }


    return (
        <nav className='navigation-bar'>
            <div onClick={navSlide} className={`burger-desktop`} >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div >
            <div className='logo'>
                <h4><Link className='logo-heading' to="/"> <span className='pet-heading' >Pet</span> Catalog</Link></h4>
            </div>
            <ul className='nav-links-desktop' >

                <div onClick={navSlide}  >
                    <i className="fa-solid fa-arrow-right"></i>
                </div >
                <li>
                    <NavLink
                        to="/"
                        className={actionStyle}
                    >Home
                    </NavLink>
                </li>
                <li><NavLink className={actionStyle} to="/about-us">About </NavLink></li>
                <li><NavLink className={actionStyle} to="/get-all-pets">All dog Catalog </NavLink></li>
                {isLoged && <li><NavLink className={actionStyle} to={"/my-favorites/" + userID}>My Favorites </NavLink></li>}

                {isLoged && <li><NavLink className={actionStyle} to={"/user-profile/" + userID}>Profile </NavLink></li>}
                {isLoged && <li><NavLink className={actionStyle} to={"/get-user-pets/" + userID}>Your Catalog </NavLink></li>}
                {isLoged && <li><NavLink className={actionStyle} to={"/create-new-pet/" + userID}>Add new pet </NavLink></li>}
                {!isLoged && <li><NavLink className={actionStyle} to="/sign-up">Register </NavLink></li>}
                {!isLoged && <li><NavLink className={actionStyle} to="/login">Login </NavLink></li>}
                {isLoged && <li><NavLink className={actionStyle} to="/logout">Logout </NavLink></li>}

            </ul>

            <SearchBox />

            <Waether />
        </nav >
    );

};

export default NavigationBar;