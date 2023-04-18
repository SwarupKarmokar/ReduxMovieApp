import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import MovieDetail from './pages/MovieDetailPage/MovieDetail'
import PageNotFound from './pages/PageNotFoundPage/PageNotFound'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App