import "../style.css";
import { closeModal } from '../../../util/modal'; 
import FormSessao from "../../Form/FormSessoes/index";
import { useSessao } from '../../../Context/useSessao';


const ModalSessao = (props) => {
    
    let { title, id, setId, idCinema, setIdCinema } = useSessao("")


    return(
        
        <div id="modal" className="modal-container">
            <div className="modal">
                <div>
                    <button className="btn-modal" onClick={(e) => {
                        closeModal();
                        //limpaForm();
                    }}>X</button>
                </div>
                <div className="modal-head">
                    <h2>{title}</h2>
                </div>
                <FormSessao />
            </div>
        </div>
    )
}

export default ModalSessao;