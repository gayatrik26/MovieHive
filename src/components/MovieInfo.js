import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const MovieInfo = () => {
  const {id} = useParams();
  const { loading } = useGlobalContext();
  if(loading){
    return(
      <div className='moive-section'>
        <div className='loading'>
          Loading...
        </div>
      </div>
    )
  }

  return (
    <>
      <div> Movie Info {id}</div>
    </>
  )
}

export default MovieInfo
