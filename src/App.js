import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import MovieInfo from './components/MovieInfo'
import ErrorPage from './components/ErrorPage'
import './index.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="movies/:id" element={<MovieInfo/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App