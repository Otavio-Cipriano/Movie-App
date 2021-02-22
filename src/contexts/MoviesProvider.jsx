import React, { useContext, useState, useEffect } from 'react';

const MoviesContext = React.createContext();
const Api = process.env.REACT_APP_OMDB_API;
const ApiKey = process.env.REACT_APP_OMDB_API_KEY;

export function useMovies(){
    return useContext(MoviesContext)
}

export function MoviesProvider({children}) {
    const [movies, setMovies] = useState([]);
    const [movieDetail, setMovieDetail] = useState([])
    const [nbResults, setNbResults ] = useState('');
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const getMovieRequest = async() =>{
        if(currentTitle){
            const url = 
            `${Api}?s=${currentTitle}&type=movie&apikey=${ApiKey}`
            const response = await fetch(url);
            const responseJson = await response.json()
            if(responseJson.Search){
                setMovies(responseJson.Search)
                setNbResults(responseJson.totalResults)
            }
        }
    }

    const searchMovie = async(title) => {
        setMovies([])
        setCurrentTitle(title)
        const url = `${Api}?s=${title}&type=movie&apikey=${ApiKey}`
        const response = await fetch(url);
        const responseJson = await response.json()

        if(responseJson.Search){
            setMovies(responseJson.Search)
            setNbResults(responseJson.totalResults)
            // console.log(responseJson.Search)
        }
    }
    const paginateSearchMovie = async(page) =>{
        setMovies([])
        setCurrentPage(page)
        const url = `${Api}?s=${currentTitle}&page=${page}&type=movie&apikey=${ApiKey}`
        const response = await fetch(url);
        const responseJson = await response.json()
        if(responseJson.Search){
            setMovies(responseJson.Search)
            setNbResults(responseJson.totalResults)
        }
    }

    const searcMovieById = async(id) =>{
        const url = `${Api}?i=${id}&type=movie&apikey=${ApiKey}`
        const response = await fetch(url);
        const responseJson = await response.json()
        if(responseJson){
            setMovieDetail(responseJson)
        }
    }

    useEffect(() => {
        getMovieRequest()
    }, [])

    const value = {
        movies,
        nbResults,
        searchMovie,
        paginateSearchMovie,
        currentPage,
        currentTitle,
        searcMovieById,
        movieDetail
    }
    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
}
