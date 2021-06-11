import { useCinema } from '../../../Context/useCinema';
import DataTableCinemas from '../../DataTable/Cinemas/DataTableCinemas';
import ModalCinema from '../../Modal/ModalCinema/ModalCinema';


const TableCinema = (props) => {
    const { cinemas, editsubmitHandler } = props;
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Sessões</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cinemas.map((cinema) => {
                            return(
                                <DataTableCinemas key={cinema.cinema_id} 
                                cinema={cinema} 
                                editsubmitHandler={editsubmitHandler}
                                
                                />
                            )
                        })
                    }
                </tbody>
            </table>
            <ModalCinema />
        </div>
    );
}

export default TableCinema;