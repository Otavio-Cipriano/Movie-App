import './MovieList.css'
import React from 'react'
import { useMovies } from '../contexts/MoviesProvider';
import MovieCard from './MovieCard';
import Paginator from './Paginator';

export default function MovieList({ openModal }) {
    const { movies, currentTitle } = useMovies();
    return (
        <div className={currentTitle ? 'movielist-container' : 'hide'}>
            <div className="top-bar">
                <h3>Results for {currentTitle}</h3>
                <Paginator />
            </div>
            <ul className="movielist">
                {
                    movies[0]? (
                        movies.map((movie, index) => {
                            return (
                                <MovieCard openModal={openModal} movie={movie} key={index} />
                            )
                        })
                    ):(
                        <span>No Results</span>
                    )
                }
            </ul>
        </div>
    )
}
