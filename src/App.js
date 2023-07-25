import React from 'react';
import {Routes, Route} from 'react-router-dom' 
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Header from './pages/Section/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<AboutMe/>}></Route>
        <Route path='contact' element={<ContactMe/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
