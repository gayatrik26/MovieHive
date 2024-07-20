import React from 'react'
import { useParams } from 'react-router-dom'

const MovieInfo = () => {
  const {id} = useParams();
  return (
    <>
      <div> Movie Info {id}</div>
    </>
  )
}

export default MovieInfo
