import './App.css';
import MovieList from './MovieList';
import { MoviesProvider } from '../contexts/MoviesProvider';
import Header from './Header';
import React, { useEffect, useState } from 'react';
import Modal from './Modal'

function App() {
  const [modal, setModal] = useState({ content: {}, open: false })
  return (
    <div className="app">
      <MoviesProvider>
        <Header />
        <MovieList openModal={setModal} />
        {modal.open ? <Modal modal={modal} handleClose={setModal} /> : null}
      </MoviesProvider>
    </div>
  );
}

export default App;
