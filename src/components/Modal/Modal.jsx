import "./style.css";
import { closeModal } from '../../util/modal'; 
import FormFilmes from "../Form/FormFilmes";
import { useFilme } from "../../Context/useFilme";


const Modal = (props) => {
    let { title, id, setId } = useFilme();

    return(
        <div id="modal" className="modal-container">
            
            <div className="modal">
                <div>
                    
                    <button className="btn-modal" onClick={(e) => {
                        setId("")
                        closeModal();
                    }}>X</button>
                </div>
                <div className="modal-head">
                   <h3>{title}</h3>
                </div>
                <FormFilmes closeModal={closeModal} id={id} setId={setId}/>
            </div>
        </div>
    )
}

export default Modal;