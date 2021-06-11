import TableCinema from '../../components/Table/Cinema/TableCinema';
import ModalCinema from '../../components/Modal/ModalCinema/ModalCinema'
import { initModal } from '../../util/modal';
import { useEffect, useState } from 'react';
import { saveCinemas, listarCinemas } from '../../api/apiService';
import { useCinema } from '../../Context/useCinema';


const Cinemas = () => {

    
    let [cinemas, setCinemas] = useState([]);
    let { setSalvar } = useCinema();

    const cinemaSubmitHandler = (data) => {
            saveCinemas(data)
    }

    
    useEffect(() => {
        listarCinemas()
            .then((result) => {
                setCinemas(result.data.data)
            })
            
    },[cinemaSubmitHandler])

    

    return(
        <div className="card">
            
            <div className="card-header">
                <span>Cinemas</span>
            </div>
            <div className="card-content">
                <TableCinema cinemas={cinemas} />
            </div>
            <div>
                <ModalCinema cinemaSubmitHandler={cinemaSubmitHandler} />
                <button  onClick={() => {
                    setSalvar(true);
                    initModal();
                }}>Novo Cinema</button>
            </div>
        </div>
    );
}

export default Cinemas;