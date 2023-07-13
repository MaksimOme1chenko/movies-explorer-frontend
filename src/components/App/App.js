import React from 'react';
import './App.css';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { Routes, Route } from "react-router-dom";

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);

  function handleMenuClick() {
    setBurgerMenuOpen(true);
  }

  function closePopups() {
    setBurgerMenuOpen(false);
  }

  return(
    <div className='page'>
      <div className='page__content'>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='*' element={ <NotFound /> } />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/movies' element={<Movies handleMenuClick={handleMenuClick} isOpen={isBurgerMenuOpen} onClose={closePopups}/>} />
          <Route path='/saved-movies' element={<SavedMovies handleMenuClick={handleMenuClick} isOpen={isBurgerMenuOpen} onClose={closePopups}/>} />
          <Route path='/profile' element={<Profile handleMenuClick={handleMenuClick} isOpen={isBurgerMenuOpen} onClose={closePopups}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
