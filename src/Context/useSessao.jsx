import { createContext, useState, useContext } from "react";

export const SessaoContext = createContext({});

export const SessaoProvider = (props) => {
    let [title, setTitle] = useState("");
    let [id, setId] = useState("");
    let [idCinema, setIdCinema] = useState("");
    let [salvar, setSalvar] = useState(false);
    

    return(
        <SessaoContext.Provider value={ 
            {
                id, 
                setId,
                title,
                setTitle,
                idCinema, 
                setIdCinema,
                salvar, 
                setSalvar
            }}>
            {
                props.children
            }
        </SessaoContext.Provider>
    )
}

export const useSessao = () => useContext(SessaoContext);