import { useCinema } from '../../../Context/useCinema'; 
import { initModal } from '../../../util/modal';
import { deleteCinemas } from '../../../api/apiService';

const DataTableCinemas = (props) => {
    const { cinema } = props;
    const { setTitle, setId, setSalvar} = useCinema();
    
    
    return(
        <tr>
            <td>{cinema.cinema_nome}</td>
            <td>{cinema.cinema_cidade}</td>
            <td>{cinema.cinema_uf}</td>
            <td>sessoes disponiveis</td>
            <td><button onClick={(e) => {
                setId(cinema.cinema_id)
                setTitle("Editar Cinema");
                initModal();
                setSalvar(false)
            }}>click</button></td>
            <td><button onClick={() => {
                deleteCinemas(cinema.cinema_id)
            }}>Excluir</button></td>
        </tr>
    );
}

export default DataTableCinemas;