import { useState, useEffect } from 'react';
import { useCinema } from '../../../Context/useCinema';
import {cinemaById, saveCinemas, updateCinemas} from "../../../api/apiService";
import { closeModal } from '../../../util/modal';

const FormCinemas = (props) => {
    //let { cinemaSubmitHandler } = props;
    let [error, setError] = useState()
    let [cinema_id, setCinema_id] = useState("")
    let [cinema_nome, setCinema_nome] = useState("")
    let [cinema_cidade, setCinema_cidade] = useState("")
    let [cinema_uf, setCinema_uf] = useState("")
    
    let {id, setId, salvar} = useCinema();
  

    const handleCinema = (data, id) => {
        if(salvar){
            console.log("salvou")
            saveCinemas(data);
        }else{
            console.log("editou")
            updateCinemas(data);
        }
        
        closeModal();
        setId("")
        
    }

    const editHandler = (id) => {
        return cinemaById(id)
    }

    useEffect(() => {
        if(id){
            editHandler(id)
                .then((result) => {
                    setCinema_id(result.data.data[0].cinema_id);
                    setCinema_nome(result.data.data[0].cinema_nome);
                    setCinema_cidade(result.data.data[0].cinema_cidade);
                    setCinema_uf(result.data.data[0].cinema_uf);
                })
        }
    },[id])



    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            handleCinema({
                cinema_id,
                cinema_nome,
                cinema_cidade,
                cinema_uf
            })
            setId("");
        }}>
           
            <div className="row">
                <div className="col-12">
                    <div className="input-group">
                        <label htmlFor="cinema_nome">Nome</label>
                        <input id="cinema_nome" 
                        type="text" 
                        value={cinema_nome} 
                        onChange={(e) => {
                            setCinema_nome(e.target.value);
                        }} />
                        <span>{error}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                 <div className="col-6">
                    <div className="input-group">
                        <label htmlFor="cinema_cidade">Cidade</label>
                        <input id="cinema_cidade" 
                        type="text" 
                        value={cinema_cidade} 
                        onChange={(e) => {
                            setCinema_cidade(e.target.value);
                        }} />
                        <span>{error}</span>
                    </div>
                 </div>
                <div className="col-6">
                    <div className="input-group">
                        <label htmlFor="cinema_uf">Estado</label>
                        <input id="cinema_uf" 
                        type="text" 
                        value={cinema_uf} 
                        onChange={(e) => {
                            setCinema_uf(e.target.value);
                        }} />
                        <span>{error}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button>Salvar</button>
                </div>
            </div>
        </form>
    );
}

export default FormCinemas;