import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = `https://www.omdbapi.com/?&apikey=${API_KEY}`;

const useFetch = (id) => {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState({ show: "false", msg: "" });
  const [movies, setMovies] = useState(null);

  const getMovie = async (url) => {
    setloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      if (data.Response === "True") {
        setloading(false);
        setMovies(data.Search || data);
        setError({ show: "false", msg: "" });
      } else {
        setError({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${id}`);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    }
  }, [id]);

  return { loading, error, movies };
};

export default useFetch;