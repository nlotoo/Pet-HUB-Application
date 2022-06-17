import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../src/App.css';

import LoadingSpinner from './Components/AdditionalComponents/LoadingSpinner/LoadingSpinner';
import NavigationBar from './Components/core/NavigationBar/NavigationBar';
import HomePage from './Components/core/HomePage/HomePage';
import LoginPage from './Components/auth/LoginPage/LoginPage';
import SignUpPage from './Components/auth/SignUpPage/SingUpPage';
import Logout from './Components/auth/Logout/Logout';
import Footer from './Components/core/Footer/Footer';
import OurCatalog from './Components/OurCatalog/OurCatalog';
import globalState from './services/globalStateHOC';

import { UserContext } from './services/UserContex';


const AboutUsPage = lazy(() => import('./Components/AdditionalComponents/AboutUsPage/AboutUsPage'));
const CreatePetPage = lazy(() => import('./Components/ProfileComponents/CreatePetPage/CreatePetPage'));
const PetsCatalog = lazy(() => import('./Components/ProfileComponents/PetsCatalog/PetsCatalog'));
const ProfilePage = lazy(() => import('./Components/ProfileComponents/ProfilePage/ProfilePage'));
const EditPetPage = lazy(() => import('./Components/ProfileComponents/EditPetPage/EditPetPage'));

const App = () => {

  let [value, setValue] = useState(null);
 
  return (
    <UserContext.Provider value={{ value, setValue }}>
      <div className='root'>
        <header>
          <NavigationBar />


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
              <Route path='/edit-pet/:id' element={<EditPetPage />} />

            </Routes>
          </Suspense>
          <footer className='footer-content'>
            <Footer />
          </footer>
        </div>


      </div >
    </UserContext.Provider>
  );
};

export default globalState(App);