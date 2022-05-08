import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import NavigationBar from './Components/NavigationBar/NavigationBar';
import NavigationBar from './Components/NavigationBarBoostrap/NavigationBarBoostrap';


const App = () => {
  // 

  return (
    <div className='root'>
      <header>
        <NavigationBar />
      </header>
    </div>
  )
};

export default App;