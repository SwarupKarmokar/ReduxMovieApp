import React, { useEffect } from 'react'
import MovieListing from '../MoviListingPage/MovieListing'

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice'


const Home = () => {
    const dispatch = useDispatch();
    const movieText = 'spider'
    const showText = 'superman'

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));

    }, [])
    return (
        <>
            <div className='banner-img'>

            </div>
            <MovieListing />
        </>
    )
}

export default Home