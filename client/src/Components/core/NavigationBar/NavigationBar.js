
import React, { useContext, useEffect, useState } from 'react';
import { Link, } from 'react-router-dom'
import { loginStorageCheker } from '../../../services/loginStorage';
import { getUserInfo } from '../../ProfileComponents/profile.service'

import './NavigationBar.css'
const NavigationBar = () => {

    let isLoged = loginStorageCheker()

    let [userName, setUserName] = useState()


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

    useEffect(() => {
        getUserInfo()
            .then(userInfo => {
                return setUserName(userInfo.username)
            })

    }, [])





    return (
        <nav className='navigation-bar'>
            <div className='logo'>

                <h4><Link className='logo-heading' to="/">The Pet Care</Link></h4>
            </div>

            <ul className='nav-links-desktop' >
                <li><Link className='menu-a-tag' to="/">Home</Link></li>
                <li><Link className='menu-a-tag' to="/about-us">About </Link></li>
                <li><Link className='menu-a-tag' to="/our-catalog">Our Catalog </Link></li>
                {isLoged && <li><Link className='menu-a-tag' to="/user-profile">Profile </Link></li>}
                {isLoged && <li><Link className='menu-a-tag' to="/pets-catalog">Pets Catalog </Link></li>}
                {isLoged && <li><Link className='menu-a-tag' to="/create-new-pet">Add new pet </Link></li>}
                {!isLoged && <li><Link className='menu-a-tag' to="/sign-up">Register </Link></li>}
                {!isLoged && <li><Link className='menu-a-tag' to="/login">Login </Link></li>}
                {isLoged && <li><Link className='menu-a-tag' to="/logout">Logout </Link></li>}
            </ul>
            <div onClick={navSlide} className={`burger-desktop`} >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div >
            <div>
                {isLoged && <Link className='menu-a-tag' to="/user-profile"> Welcome to hub {userName ? userName[0].toUpperCase() + userName.slice(1) : ''}!</Link>}

            </div>

        </nav >
    );

};

export default NavigationBar;