import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';

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