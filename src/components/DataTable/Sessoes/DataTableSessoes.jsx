import { deleteSessoes } from '../../../api/apiService';
import { useSessao } from '../../../Context/useSessao';
import { initModal } from '../../../util/modal';
const DataTableSessoes = (props) => {
    const { sessao, setId } = props;
    const { setTitle, setSalvar } = useSessao();
    return(
        <tr>
            <td>{sessao.dia_semana}</td>
             <td>{sessao.horario}</td>
            <td>{sessao.id_filme}</td>
            <td><button onClick={() => {
               setId(sessao.sessoes_id)
               console.log("id:sessao",sessao.sessoes_id)
               initModal()
               setTitle("Editar uma Sessão")
               setSalvar(false)
            }}>Editar</button></td>
            <td><button onClick={() => {
                deleteSessoes(sessao.sessoes_id)
            }}>excluir</button></td>
        </tr>
    );
}

export default DataTableSessoes;