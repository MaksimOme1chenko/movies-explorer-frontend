import React from 'react';
import './App.css';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import moviesFilter from '../../utils/MoviesFilter';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoTooltip from '../InfoTooltip/infoTooltip';

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] =React.useState([]);
  const [isMoviesLoadings, setIsMoviesLoadings] = React.useState(false);
  const [moviesErrorMessage, setMoviesErrorMessage] = React.useState("");
  const [savedMoviesErrorMessage, setSavedMoviesErrorMessage] = React.useState('');
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(true);
  const [authErrorMessage, setAuthErrorMessage] = React.useState('')
  const [currentUser, setCurrentUser] = React.useState({})
  const [loggedIn, setLoggedIn] = React.useState(false);

  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    if(loggedIn){
      mainApi.getUserData()
      .then(userData => setCurrentUser(userData))
      .then(() => setLoggedIn(true))
      .then(() => navigate(location.pathname, { replace: true }))
      .then(() => {
        mainApi.getSavedMovies()
          .then(res => localStorage.setItem('saved-movies', JSON.stringify(res)))
          .then(() => setSavedMovies(JSON.parse(localStorage.getItem('saved-movies'))))
          .catch((err) => {
            console.log(err);
          })

        if (localStorage.getItem('filtered-movies') !== null) {
          const localFilteredMoviesCards = JSON.parse(localStorage.getItem('filtered-movies'));

          setMovies(localFilteredMoviesCards);
        };
        if (localStorage.getItem('saved-movies') !== null) {
          const localFilteredSavedMoviesCards = JSON.parse(localStorage.getItem('saved-movies'))
            setSavedMovies(localFilteredSavedMoviesCards)
        }
      })
      .catch(err => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);


  function handleSearchMovies(values) {
    setMoviesErrorMessage('');

    if (localStorage.getItem('movies') !== null) {
      handleSearchMoviesFromLocalStorage(values);
    } else {
      setIsMoviesLoadings(true);
      moviesApi.getMovies()
        .then(res => localStorage.setItem('movies', JSON.stringify(res)))
        .then(() => handleSearchMoviesFromLocalStorage(values))
        .then(() => setTimeout(() => localStorage.removeItem('movies'), 60 * 60 * 1000))
        .catch(() => setMoviesErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
        .finally(() => setIsMoviesLoadings(false));
    };
  };

   function handleSearchMoviesFromLocalStorage(values) {
    const localMoviesCards = JSON.parse(localStorage.getItem('movies'));

    const filteredMoviesCards = moviesFilter(values, localMoviesCards);

    setMovies(filteredMoviesCards);

    if (filteredMoviesCards.length === 0) {
      setMoviesErrorMessage('Ничего не найдено');
    };

    localStorage.setItem('filtered-movies', JSON.stringify(filteredMoviesCards));
  };

  function handleSaveMovie(movie) {
    const isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.movieId);
    if (!isSaved)
      mainApi.saveMovie(movie)
        .then((savedMovie) => {
          const updatedSavedMovies = [...savedMovies, savedMovie];
          setSavedMovies(updatedSavedMovies); 
        })
        .catch((err) => {
          console.log(err);
        })
  }


  function handleDeleteMovie(movieId){
    const updatedSavedMovies = savedMovies.filter((movie) => movie._id !== movieId);
    mainApi.deleteSaveMovie(movieId)
    .then(() => {
      setSavedMovies(updatedSavedMovies);
      localStorage.setItem('saved-movies', JSON.stringify(updatedSavedMovies));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleSearchSavedMovies(values) {
    setSavedMoviesErrorMessage('');

    const localSavedMoviesCards = JSON.parse(localStorage.getItem('saved-movies'));

    const filteredSavedMoviesCards = moviesFilter(values, localSavedMoviesCards);

    setSavedMovies(filteredSavedMoviesCards);

    if (filteredSavedMoviesCards.length === 0) {
      setSavedMoviesErrorMessage('Ничего не найдено');
    };
  };


  function handleLoginUser({email, password}) {
    const userData = mainApi.authorize({email, password})
    .then(() => {
      if(userData) {
        setLoggedIn(true);
        setCurrentUser({email, password})
        localStorage.setItem('authorized', 'true');
        navigate('/movies', {replace: true})
      }
    })
    .catch((err) => {
      console.log(err);
      setAuthErrorMessage('Что-то пошло не так. попробуйте еще раз.')
    })
  }

  function handleRegisterUser({name, email, password}) {
    const userData = mainApi.register({name, email, password})
    .then(() => {
      if(userData) {
        handleLoginUser({email, password})
        navigate('/movies', { replace: true })
      }
    })
    .catch((err) => {
      setAuthErrorMessage('Что-то пошло не так. попробуйте еще раз.')
      console.log(err)
    })
  }
  
  function tokenCheck() {
    const authorized = localStorage.getItem('authorized');
    if (authorized) {
      mainApi
        .getUserData()
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          navigate(location.pathname, { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }


  React.useEffect(() => {
    tokenCheck()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function handleUpdateUser(newUserData) {
    mainApi
      .updateUserdata(newUserData)
      .then((data) => {
        setCurrentUser(data);
        setInfoTooltipOpen(true);
        setSuccess(true);
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setSuccess(false);
        console.log(err);
      });
  }

  function handleLogout() {
    mainApi
      .signout()
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        setSuccess(false);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMenuClick() {
    setBurgerMenuOpen(true);
  }

  function handleOverlayClick(e) {
    if (
      e.target.classList.contains("popup_is-opened") ||
      e.target.classList.contains("popup__button-close")
    ) {
      closePopups();
    }
  }

  function closePopups() {
    setBurgerMenuOpen(false);
    setInfoTooltipOpen(false);
  }

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn}/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<Login onLogin={handleLoginUser} error={authErrorMessage}/>} />
          <Route path="/signup" element={<Register onRegistr={handleRegisterUser} error={authErrorMessage}/>} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                handleMenuClick={handleMenuClick}
                isOpen={isBurgerMenuOpen}
                onClose={closePopups}
                movies={movies}
                savedMovies={savedMovies}
                onSubmit={handleSearchMovies}
                isLoading={isMoviesLoadings}
                loggedIn={loggedIn}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                errorMessage={moviesErrorMessage}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                handleMenuClick={handleMenuClick}
                isOpen={isBurgerMenuOpen}
                onClose={closePopups}
                movies={savedMovies}
                savedMovies={savedMovies}
                loggedIn={loggedIn}
                errorMessage={savedMoviesErrorMessage}
                onSubmit={handleSearchSavedMovies}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                handleMenuClick={handleMenuClick}
                isOpen={isBurgerMenuOpen}
                onClose={closePopups}
                loggedIn={loggedIn}
                handleUpdateUser={handleUpdateUser}
                handleLogout={handleLogout}
              />
            }
          />
        </Routes>
        <InfoTooltip 
        isOpen={isInfoTooltipOpen}
        onClose={closePopups}
        isSuccess={isSuccess}
        onOverlayClose={handleOverlayClick}
        />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
