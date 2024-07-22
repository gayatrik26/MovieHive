import React, { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const AppContext = React.createContext();

const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

// const AppProvider = ({ children }) => {

//     const [loading , setLoading] = useState(true);
//     const [movies , setMoives] = useState(null);
//     const [error , SetError] = useState({ show: "false" , msg: ""});
//     const [query , setQuery] = useState("titanic");

//     const getMovies = async(url) => {
//         setLoading(true);
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             console.log(data);
//             if(data.Response === "True"){
//                 setLoading(false);
//                 setMoives(Array.isArray(data.Search) ? data.Search : []);
//                 SetError({show : "false" , msg: ""});
//             }else{
//                 SetError({
//                     show: true,
//                     msg: data.Error,
//                 });
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         let timer = setTimeout(() => {
//             getMovies(`${API_URL}&s=${query}`); 
//         }, 500);
//         return () => clearTimeout(timer);
//     },[query]);

//     return (
//         <AppContext.Provider value={{loading , error , movies , query , setQuery}}>
//             {children}
//         </AppContext.Provider>
//     );
// };

const AppProvider = ({ children }) => {
    const [query, setQuery] = useState("joker");
    const { loading, error, movies } = useFetch(`&s=${query}`);
  
    return (
      <AppContext.Provider value={{ query, movies, setQuery, loading, error }}>
        {children}
      </AppContext.Provider>
    );
  };

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext , AppProvider , useGlobalContext};

