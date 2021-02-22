import './Modal.css';
import React, { useEffect, useRef, useState } from 'react'
import { useMovies } from '../contexts/MoviesProvider';
import DetectClickOutside from '../hooks/detectClickOutside';
import ImageLoader from './ImageLoader';

export default function Modal({ modal, handleClose }) {
    const { searcMovieById, movieDetail } = useMovies()
    const [modalLoaded, setModalLoaded] = useState(false)
    const modalRef = useRef()
    DetectClickOutside(modalRef, handleClose)
    useEffect(() => {
        searcMovieById(modal.content.imdbID)
    }, [])
    return (
        <div className="overlay">
            {
                movieDetail.Title ?
                    (
                        <div onLoad={() => setModalLoaded(true)} ref={modalRef} className={`modal ${modalLoaded ? 'modal-open' : 'modal-not-open'}`}>
                            <span onClick={() => handleClose({content: {}, open: false})} className="close-button">←</span>
                            <div className="modal-content">
                                <div className="sidebar">
                                    <div className="image-container">
                                        <ImageLoader poster={movieDetail.Poster} alt={movieDetail.Title} />
                                    </div>
                                    <div className="movie-details">
                                        <p><b>Country:</b>  {movieDetail.Country}</p>
                                        <p><b>Genre:</b>  {movieDetail.Genre}</p>
                                        <p><b>Director:</b>  {movieDetail.Director}</p>
                                        <p><b>Writer:</b>  {movieDetail.Writer}</p>
                                        <p><b>Language:</b>  {movieDetail.Language}</p>
                                        <p><b>Released:</b>  {movieDetail.Released}</p>
                                        <p><b>Runtime:</b>  {movieDetail.Runtime}</p>
                                    </div>
                                </div>
                                <div className="main">
                                    <h3>{movieDetail.Title}</h3>
                                    <p><b>Synopis: </b>{movieDetail.Plot}</p>
                                    <p><b>Awards: </b>{movieDetail.Awards}</p>
                                    <p><b>Actors: </b>{movieDetail.Actors}</p>
                                    {movieDetail.Ratings ?
                                        movieDetail.Ratings.map((rate, index) => {
                                            return (
                                                <p key={index}><b>{rate.Source}: </b>{rate.Value}</p>
                                            )
                                        }) :
                                        null
                                    }
                                </div>
                            </div>

                        </div>
                    ) :
                    <div className="spinner"></div>
            }
        </div>
    )
}
