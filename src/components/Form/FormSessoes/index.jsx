import { useState, useEffect } from 'react';
import DataList from '../../DataList/index'
import { listarFilmes, saveSessao, sessaoById, updateSessoes } from '../../../api/apiService.js'
import { useSessao } from '../../../Context/useSessao';
import { closeModal } from '../../../util/modal';

const FormSessoes = () => {
    let [sessoes_id, setSessoes_id] = useState("")
    let [dia_semana, setDia_semana] = useState("");
    let [horario, setHorario] = useState("");
    let [idFilme, setIdFilme] = useState("");
    let [filmes, setFilmes] = useState([])
    let [error, setError] = useState('');
    let { idCinema, id, salvar} = useSessao();
    

    const editHandler = (id) => {
        return sessaoById(id)
    }

    const handleSessoes = (data) => {
        if(salvar){
            saveSessao(data);
        }else{
            updateSessoes(data, id);
        }
        closeModal();
        
    }


    useEffect(() => {
        listarFilmes()
            .then((result) => {
                setFilmes(result.data.data)
            })

    },[])



    useEffect(() => {
        if(id){
            editHandler(id)
                .then((result) => {
                    if(result){
                        setSessoes_id(result.data.data[0].sessoes_id)
                        setDia_semana(result.data.data[0].dia_semana)
                        setHorario(result.data.data[0].horario)
                        
                    }else{
                        console.log("erro")
                    }
                }).catch(err => console.log(err))
        }
    },[id])
    return(
            <form onSubmit={(e) => {
            e.preventDefault();
            handleSessoes({
                sessoes_id,
                dia_semana,
                horario,
                idCinema,
                idFilme
                
            })
            }}>
               duvida {id}
                <div className="row">
                    <div className="col-3">
                        <div className="input-group">
                            <label htmlFor="dia_semana">Dia</label>
                            <input id="dia_semana" 
                            type="text" 
                            value={dia_semana} 
                            onChange={(e) => {
                                setDia_semana(e.target.value);
                            }} />
                            <span>{error}</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="input-group">
                            <label htmlFor="horario">Horário</label>
                            <input id="horario" 
                            type="text" 
                            value={horario} 
                            onChange={(e) => {
                                setHorario(e.target.value);
                            }} />
                            <span>{error}</span>
                        </div>
                    </div>
                </div>
               <DataList filmes={filmes} setIdFilme={setIdFilme}/>
               <div className="row">
                    <div className="col-3">
                        <button>Salvar</button>
                    </div>
               </div>
            </form>
    );
}

export default FormSessoes;