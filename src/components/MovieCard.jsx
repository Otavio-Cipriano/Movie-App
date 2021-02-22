import './MovieCard.css'
import React, { useEffect, useState } from 'react'
import ImageLoader from './ImageLoader';

export default function MovieCard({ movie, openModal }) {
    return (
        <li onClick={()=> openModal({content: movie, open: true})} className={`image-container ${movie ? null : 'loading'}`}>
            {/* <div className="icon-container"><i className="fav-icon" /></div> */}
            <ImageLoader poster={movie.Poster} alt={movie.Title}/>
            <div className="title-container"><span>{movie.Title}</span></div>
            
        </li>
    )
}
