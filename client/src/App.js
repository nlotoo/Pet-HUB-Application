import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../src/App.css'

import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'
import NavigationBar from './Components/core/NavigationBar/NavigationBar';
import HomePage from './Components/core/HomePage/HomePage';
import LoginPage from './Components/auth/LoginPage/LoginPage';
import SignUpPage from './Components/auth/SignUpPage/SingUpPage';
import Logout from './Components/auth/Logout/Logout';
import Footer from './Components/core/Footer/Footer';
import OurCatalog from './Components/OurCatalog/OurCatalog';


const AboutUsPage = lazy(() => import('./Components/AboutUsPage/AboutUsPage'));
const CreatePetPage = lazy(() => import('./Components/ProfileComponents/CreatePetPage/CreatePetPage'));
const PetsCatalog = lazy(() => import('./Components/ProfileComponents/PetsCatalog/PetsCatalog'));
const ProfilePage = lazy(() => import('./Components/ProfileComponents/ProfilePage/ProfilePage'));

export const ThemeContext = React.createContext();

const App = () => {

  const Theme = {
    background: 'brown'
  }



  return (
    <div className='root'>
      <header>

        <ThemeContext.Provider value={Theme}>
          <NavigationBar />
        </ThemeContext.Provider>

      </header>
      <div className='content'>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>

            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/' element={<HomePage />} />


            <Route path='/our-catalog' element={<OurCatalog />} />

            <Route path='/home-page-banner' element={<HomePage />} />
            <Route path='/home-page' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/user-profile' element={<ProfilePage />} />
            <Route path='/pets-catalog' element={<PetsCatalog />} />
            <Route path='/create-new-pet' element={<CreatePetPage />} />

          </Routes>
        </Suspense>
        <footer className='footer-content'>
          <Footer />
        </footer>
      </div>


    </div >
  )
};

export default App;