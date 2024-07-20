import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

const AppProvider = ({ children }) => {

    const [Loading , setLoading] = useState(true);
    const [movies , setMoives] = useState(null);
    const [error , SetError] = useState({ show: "false" , msg: ""});
    const [query , setQuery] = useState("titanic");

    const getMovies = async(url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            if(data.Response === "True"){
                setLoading(false);
                setMoives(data.Search || data);
                SetError({show : "false" , msg: ""});
            }else{
                SetError({
                    show: true,
                    msg: data.error,
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMovies(`${API_URL}&s=${query}`);
    },[query]);

    return (
        <AppContext.Provider value={{Loading , error , movies , query , setQuery}}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext , AppProvider , useGlobalContext};