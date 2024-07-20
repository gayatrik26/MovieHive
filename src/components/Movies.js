import React from 'react'
import { useGlobalContext } from '../context/context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movies } = useGlobalContext();
  const imgUrl = "https://via.placeholder.com/200/200";

  return (
    <>
      <section className='movie-page'>
        <div className='container grid grid-4-col'>
          {movies ? movies.map((movie) => {
            const { imdbID, Title, Poster } = movie;
            const moivename = Title.substring(0, 15);

            return (
              <NavLink to={`movies/${imdbID}`} key={imdbID}>
                <div className='card'>
                  <div className='card-info'>
                    <h2>{moivename.length > 12 ? `${moivename}...` : moivename}</h2>
                    <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                  </div>
                </div>
              </NavLink>
            );
          }): ""}
          </div>
      </section>
    </>
  );
};

export default Movies;