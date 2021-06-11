import DataTableSessoes from '../../DataTable/Sessoes/DataTableSessoes';
import { useSessao } from '../../../Context/useSessao';

const TableSessao = (props) => {
    const { sessoes } = props;
    const { id, setId } = useSessao();
    return(
            <table>
                <thead>
                    <tr>
                        <th>Home inicio</th>
                        <th>Hora Termino</th>
                        <th>Filme</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sessoes.map((sessao) => {
                            return(
                                <DataTableSessoes key={sessao.sessoes_id} sessao={sessao} id={id} setId={setId}/>
                            )
                        })
                    }
                </tbody>
            </table>
    );
}

export default TableSessao;