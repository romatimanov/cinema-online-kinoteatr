// App.js
import './App.css';
import { Header } from './Header/Header';
import { RandomFilms } from './RandomFilms/RandomFilms';
import { Film } from './Film/Film';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Genres } from './Genres/Genres';
import { GenreFilms } from './GenreFilms/GenreFilms';
import { Profile } from './Profile/Profile';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/films" element={<Film />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genreFilms" element={<GenreFilms />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<RandomFilms />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
