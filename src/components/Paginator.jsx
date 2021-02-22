import './Paginator.css'
import React, { useState } from 'react'
import { useMovies } from '../contexts/MoviesProvider'

export default function Paginator() {
    const { nbResults, paginateSearchMovie, currentPage } = useMovies()
    function paginating(page) {
        if (page == 'next') {
            paginateSearchMovie(currentPage + 1)
        } else {
            if (currentPage >= 1) {
                paginateSearchMovie(currentPage - 1)
            }
        }
    }
    return (
        <div className="paginator">
            <button onClick={e => paginating('back')}>←</button>
            <span>{currentPage * 10 - 9} - {currentPage * 10}  of {nbResults} </span>
            <button onClick={e => paginating('next')}>→</button>
        </div>
    )
}
