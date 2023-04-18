import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { getAllMovies, getAllShows } from '../../redux/movies/movieSlice'
import MovieCard from '../../components/MovieCard/MovieCard'

import './MovieListingStyle.scss'
import { Settings } from '../../common/settings'

const MovieListing = () => {
    // // slider const 
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 3
    // };
    // // slider const 

    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    let renderMovies, renderShows = "";

    renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );

    renderShows =
        shows.Response === "True" ? (
            shows.Search.map((show, index) => (
                <MovieCard key={index} data={show} />
            ))
        ) : (
            <div className="movies-error">
                <h3>{shows.Error}</h3>
            </div>
        );


    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...Settings}>
                        {renderMovies}
                    </Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    <Slider {...Settings}>
                        {renderShows}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing