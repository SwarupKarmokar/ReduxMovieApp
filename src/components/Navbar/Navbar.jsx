import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import iam from '../../images/iam.jpg'
import './NavbarStyle.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice'

const Navbar = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (term === '') {
            return alert("Please Search With Valid Input")
        }
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm('')
    }

    return (
        <div className='header'>

            <div className="logo">
                <Link to={'/'}>ReduxMovieApp</Link>
            </div>

            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={term}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button type="submit">
                        Search
                    </button>
                </form>
            </div>

            <div className="user-image">
                <img src={iam} alt="Oops" />
            </div>
        </div>
    )
}

export default Navbar