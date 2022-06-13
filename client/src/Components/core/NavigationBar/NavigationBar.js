
import { useContext } from 'react';
import { Link, } from 'react-router-dom'
import { ThemeContext } from '../../../App';
import { loginStorageCheker } from '../../../services/loginStorage';
import './NavigationBar.css'



const NavigationBar = () => {
    let theme = useContext(ThemeContext)

    let isLoged = loginStorageCheker()


    const navSlide = (e) => {
        const burger = document.getElementsByClassName('burger-desktop')[0]  
        burger.classList?.toggle('toggle')

        const navLink = document.getElementsByClassName('nav-links-desktop')[0]
        navLink.classList.toggle('nav-active')

        const NavLinksLI = document.querySelectorAll('.nav-links-desktop li')
        NavLinksLI.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + index}s`
        })

    }

    return (
        <nav className='navigation-bar'>

            <div className='logo'>
                <h4>The Pet Care</h4>
            </div>

            <ul style={theme} className='nav-links-desktop' >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About</Link></li>
                <li><Link className='disabled' to="/our-catalog">Our Catalog</Link></li>
                {isLoged && <li><Link to="/user-profile">Profile</Link></li>}
                {isLoged && <li><Link to="/pets-catalog">Pets Catalog</Link></li>}
                {isLoged && <li><Link to="/create-new-pet">Add new pet</Link></li>}
                {!isLoged && <li><Link to="/sign-up">Register</Link></li>}
                {!isLoged && <li><Link to="/login">Login</Link></li>}
                {isLoged && <li><Link to="/logout">Logout</Link></li>}
            </ul>
            <div onClick={navSlide} className={`burger-desktop`} >
                <div  className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>


        </nav >
    )

};

export default NavigationBar;