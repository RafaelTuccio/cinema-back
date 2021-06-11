import { initModal } from "../../../util/modal";
import { useFilme } from "../../../Context/useFilme";
import { deleteFilmes } from '../../../api/apiService';

const DataTableFilmes = (props) => {
    const { filme } = props;
    
    const { setTitle, setId, setSalvar} = useFilme();
    return(
        <tr>
            <td>{filme.filme_nome}</td>
            <td>{filme.filme_genero}</td>
            <td>{filme.filme_duracao}</td>
            <td>{filme.filme_classificacao}</td>
            <td>{filme.filme_lancamento}</td>
            {/* <td>{filme.filme_sinopse}</td> */}
            <td><button onClick={(e) => {
                setId(filme.filme_id)
                setTitle("Editar Filme");
                initModal();
                setSalvar(false)
            }}>click</button></td>
            <td><button onClick={() => {
                deleteFilmes(filme.filme_id)
            }}>Excluir</button></td>
        </tr>
    );
}

export default DataTableFilmes;