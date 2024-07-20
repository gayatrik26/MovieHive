import { NavLink, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const MovieInfo = () => {
  const { id } = useParams();
  const imgUrl = "https://via.placeholder.com/200/200";
  console.log(id);

  const { loading, movies } = useFetch(`&i=${id}`);

  if (loading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>
      </section>
    );
  };

  return (
    <div>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
          <img src={movies.Poster === "N/A" ? imgUrl : movies.Poster} alt="#" />
          </figure>
          <div className="card-content">
            <p className="title">{movies.Title}</p>
            <p className="card-text">{movies.Released}</p>
            <p className="card-text">{movies.Genre}</p>
            <p className="card-text">{movies.imdbRating} / 10</p>
            <p className="card-text">{movies.Country}</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieInfo;