import { useEffect, useState } from "react";
import { useFilme } from "../../../Context/useFilme";
import { FilmeById, saveFilmes, updateFilmes } from "../../../api/apiService";
import { closeModal } from "../../../util/modal";
import { validaData } from '../../../util/validacao';

const FormFilmes = (props) => {

    let { id } = props;

    const { salvar } = useFilme();

    const [error, setError] = useState("");
    const [filme_id, setFilme_id] = useState("")
    const [filme_nome, setFilme_nome] = useState("")
    const [filme_duracao, setFilme_duracao] = useState("")
    const [filme_genero, setFilme_genero] = useState("")
    const [filme_classificacao, setFilme_classificacao] = useState("")
    const [filme_lancamento, setFilme_lancamento] = useState("")
    const [filme_sinopse, setFilme_sinopse] = useState("")

    const handleFilmes = (data, id) => {
        if(salvar){
            console.log("salvou")
            const result = saveFilmes(data);
        }else{
            console.log("editou")
            const result = updateFilmes(data);
        }
        closeModal();
        limpaForm();
    }

    const editHandler = (id) => {
        return FilmeById(id)
    }

    const limpaForm = () => {
        setFilme_lancamento("");
        setFilme_nome("");
        setFilme_sinopse("");
        setFilme_duracao("");
        setFilme_genero("");
        setFilme_id("");
        setFilme_classificacao("");
    }

    useEffect(() => {
        if(id){
            editHandler(id)
                .then((result) => {
                    console.log(result.data.data[0]);
                    setFilme_nome(result.data.data[0].filme_nome)
                    setFilme_id(result.data.data[0].filme_id)
                    setFilme_genero(result.data.data[0].filme_genero)
                    setFilme_classificacao(result.data.data[0].filme_classificacao)
                    setFilme_duracao(result.data.data[0].filme_duracao)
                    setFilme_sinopse(result.data.data[0].filme_sinopse)
                    setFilme_lancamento(result.data.data[0].filme_lancamento)
                })
        }
    },[id])

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleFilmes({
                filme_nome,
                filme_sinopse,
                filme_genero,
                filme_duracao,
                filme_lancamento,
                filme_classificacao,
                filme_id
            })
        }}>
            
            <div className="row">
                <div className="col-12">
                    <div className="input-group">
                        <label htmlFor="filme_nome">Nome</label>
                        <input id="filme_nome"
                            type="text"
                            value={filme_nome}
                            onChange={(e) => {
                                setFilme_nome(e.target.value);
                            }} />
                        <span>{error}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="input-group">
                        <label htmlFor="filme_genero">Gênero</label>
                        <input id="filme_genero"
                            type="text"
                            value={filme_genero}
                            onChange={(e) => {
                                setFilme_genero(e.target.value);
                            }} />
                        <span>{error}</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="input-group">
                        <label htmlFor="filme_duracao">Duração</label>
                        <input id="filme_duracao"
                            type="text"
                            value={filme_duracao}
                            onChange={(e) => {
                                setFilme_duracao(e.target.value);
                            }} />
                        <span>{error}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="input-group">
                        <label htmlFor="filme_classificacao">Classificação</label>
                        <input id="filme_classificacao"
                            type="text"
                            value={filme_classificacao}
                            onChange={(e) => {
                                setFilme_classificacao(e.target.value);
                            }} />
                        <span>{error}</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="input-group">
                        <label htmlFor="filme_lancamento">Lançamento</label>
                        <input id="filme_lancamento"
                            type="text"
                            value={filme_lancamento}
                            onChange={(e) => {
                                validaData(e.target.value);
                                setFilme_lancamento(e.target.value);
                            }} />
                        <span>{error}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="input-group">
                        <label htmlFor="filme_sinopse">Sinopse</label>
                        <input id="filme_sinopse"
                            type="text"
                            value={filme_sinopse}
                            onChange={(e) => {
                                setFilme_sinopse(e.target.value);
                            }} />
                        <span>{error}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button>Cadastrar</button>
                </div>
            </div>
        </form>
    );
}

export default FormFilmes;