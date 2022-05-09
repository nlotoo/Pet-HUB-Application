import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import HomePage from './Components/HomePage/HomePage'
import Footer from './Components/Footer/Footer';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';


const App = () => {
  // 

  return (
    <div className='root'>
      <header>
        <NavigationBar />
      </header>
      <div className='content'>
        <Routes>
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/' element={<HomePage />} />

        </Routes>
      </div>
      <footer className='footer-content'>
        <Footer />
      </footer>
    </div>
  )
};

export default App;