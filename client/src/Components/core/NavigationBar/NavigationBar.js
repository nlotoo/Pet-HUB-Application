
import { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom'

import { loginStorageCheker } from '../../../services/loginStorage';
import useResponsiveDesign from '../../../services/useResposiveDisplayTool';
import './NavigationBar.css'



const NavigationBar = () => {

    let isLoged = loginStorageCheker()

    let [clasActive, setClassActive] = useState()




    useEffect(() => {

    }, [])




    const navSlide = (e) => {
        const burger = document.getElementsByClassName('burger-desktop')[0]
            console.log(burger)
        burger.classList?.toggle('toggle')
        const navLink = document.getElementsByClassName('nav-links-desktop')[0]
        navLink.classList.toggle('nav-active')

        const NavLinksLI = document.querySelectorAll('.nav-links-desktop li')
        NavLinksLI.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 2}s`
        })
      

    }

    const changeState = (e) => {
        console.log('change')


    }


    return (
        <nav className='navigation-bar'>

            <div className='logo'>
                <h4>The Pet Care</h4>
            </div>

            <ul className='nav-links-desktop' >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About</Link></li>
                <li><Link aria-disabled='true' to="/our-catalog">Our Catalog</Link></li>
                {isLoged && <li><Link to="/user-profile">Profile</Link></li>}
                {isLoged && <li><Link to="/pets-catalog">Pets Catalog</Link></li>}
                {isLoged && <li><Link to="/create-new-pet">Add new pet</Link></li>}
                {!isLoged && <li><Link to="/sign-up">Register</Link></li>}
                {!isLoged && <li><Link to="/login">Login</Link></li>}
                {isLoged && <li><Link to="/logout">Logout</Link></li>}
            </ul>
            <div onClick={navSlide} className={`burger-desktop`} >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>


        </nav >
    )

};

export default NavigationBar;