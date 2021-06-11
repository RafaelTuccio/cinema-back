import { createContext, useState, useContext } from "react";

export const FimeContext = createContext({});

export const FilmeProvider = (props) => {
    let [title, setTitle] = useState("");
    let [id, setId] = useState("");
    let [salvar, setSalvar] = useState(false)
    

    


    return(
        <FimeContext.Provider value={ 
            {
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
        </FimeContext.Provider>
    )
}

export const useFilme = () => useContext(FimeContext);