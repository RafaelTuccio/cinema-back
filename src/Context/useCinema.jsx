import { createContext, useState, useContext } from "react";

export const CinemaContext = createContext({});

export const CinemaProvider = (props) => {
    
    let [title, setTitle] = useState("");
    let [id, setId] = useState("");
    let [salvar, setSalvar] = useState(false)

    return(
        <CinemaContext.Provider value={{
            id, 
            setId,
            title,
            setTitle,
            salvar, 
            setSalvar
        }}>
            {
                props.children
            }
        </CinemaContext.Provider>
    )
}

export const useCinema = () => useContext(CinemaContext);