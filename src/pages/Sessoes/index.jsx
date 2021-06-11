import { useState, useEffect } from 'react';
import Select from '../../components/Select';
import TableSessao from '../../components/Table/Sessoes/TableSessao';
import { listarSessoesByCinema, listarCinemas } from '../../api/apiService';
import { useSessao } from '../../Context/useSessao';
import { initModal } from '../../util/modal';
import ModalSessao from '../../components/Modal/ModalSessao/ModalSessao';

const Sessoes = () => {

    let [cinemas, setCinemas] = useState([]);
    let [sessoes, setSessoes] = useState([]);

    let { setTitle, setId, idCinema, setIdCinema, setSalvar } = useSessao();




    const selectCinema = (id) => {
        setIdCinema(id)
        
    }

    useEffect(() => {
        listarCinemas()
            .then((result) => {
                setCinemas(result.data.data)
            })
    }, [])



    useEffect(() => {
        if (idCinema) {
            listarSessoesByCinema(idCinema)
                .then((result) => {
                    if (result) {
                        setSessoes(result.data.data)
                    }
                }).catch((err) => console.log(err))
        }
    }, [selectCinema])


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <span>Cinema</span>
                </div>
                <div className="card-content">
                    <div className="row">
                        <div className="col-3">
                            <Select cinemas={cinemas}
                                setId={setId}
                                selectCinema={selectCinema} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="card">
                <div className="card-header">
                    <span>Sessoes</span>
                </div>
                <div className="card-content">
                    <div className="row">
                        <div className="col-12">
                            {
                                sessoes.length > 0 ?
                                    <TableSessao sessoes={sessoes} />
                                    : <h2>Este cinema não tem sessões cadastradas, deseja adicionar?</h2>
                            }
                        </div>
                    </div>
                </div>
                <ModalSessao />
                <button onClick={() => {
                    setTitle("Cadastrar uma Sessão")
                    initModal();
                    setId("")
                    setSalvar(true)
                }}>Cadastrar</button>

            </div>
        </>
    )
}

export default Sessoes;