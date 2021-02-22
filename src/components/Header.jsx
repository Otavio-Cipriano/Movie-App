import './Header.css'
import React, { useState } from 'react'
import { useMovies } from '../contexts/MoviesProvider'

export default function Header() {
    const {searchMovie, currentTitle} = useMovies()
    return (
        <header className={currentTitle? 'header': 'header full-view'}>
            <h2>Movie Searcher</h2>
            <form>
                <input 
                onChange={e => searchMovie(e.target.value)}
                onKeyPress={e => {
                    if(e.key == 'Enter'){
                        e.preventDefault()
                    }
                }}
                type="text" 
                placeholder="Enter a name to search..."/>
            </form>
        </header>
    )
}
