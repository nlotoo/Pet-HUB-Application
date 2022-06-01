import React from 'react';
import { Route, Routes } from 'react-router-dom';

import '../src/App.css'

import NavigationBar from './Components/core/NavigationBar/NavigationBar';
import HomePage from './Components/core/HomePage/HomePage'
import Footer from './Components/core/Footer/Footer';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import LoginPage from './Components/auth/LoginPage/LoginPage'
import SignUpPage from './Components/auth/SignUpPage/SingUpPage'

import Logout from './Components/auth/Logout/Logout';
import ProfilePage from './Components/ProfileComponents/ProfilePage/ProfilePage';
import CreatePetPage from './Components/ProfileComponents/CreatePetPage/CreatePetPage';

import PetsCatalog from './Components/ProfileComponents/PetsCatalog/PetsCatalog';
const App = () => {


  return (
    <div className='root'>
      <header>
        <NavigationBar />
      </header>
      <div className='content'>
        <Routes>
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/home-page-banner' element={<HomePage />} />
          <Route path='/home-page' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/user-profile' element={<ProfilePage />} />
          <Route path='/pets-catalog' element={<PetsCatalog />} />
          <Route path='/create-new-pet' element={<CreatePetPage />} />
          


        </Routes>
      </div>
      <footer className='footer-content'>
        <Footer />
      </footer>
    </div>
  )
};

export default App;