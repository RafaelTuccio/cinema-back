import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import TableFilme from '../../components/Table/Filmes/TableFilme';
import { initModal } from '../../util/modal';
import { listarFilmes, saveFilmes } from '../../api/apiService';
import { useFilme } from '../../Context/useFilme';

const Filmes = () => {

    let { setTitle, setSalvar } = useFilme()
    let [filmes, setFilmes] = useState([]);

    const filmesSubmitHandler = (data) => {
        saveFilmes(data);
    }


    useEffect(() => {
        listarFilmes()
            .then((result) => {
                setFilmes(result.data.data)
            })
    },[filmesSubmitHandler]);

    return(    
        <div className="card">
            <div className="card-header">
                <span>Filmes</span>
            </div>
            <div className="card-content">
                <TableFilme filmes={filmes} />
            </div>
            <div>
                <Modal filmesSubmitHandler={filmesSubmitHandler} />
                <button className="btn"
                onClick={() => {
                    setTitle("Cadastrar um filme")
                    initModal();
                    setSalvar(true)
                }}>Novo Filme +</button>
            </div>
        </div>
    )
}

export default Filmes;