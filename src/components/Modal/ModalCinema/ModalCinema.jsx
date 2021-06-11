import "../style.css";
import { closeModal } from '../../../util/modal'; 
import FormCinemas from "../../Form/FormCinemas";
import { useCinema } from '../../../Context/useCinema';


const ModalCinema = (props) => {
    
    let { cinemaSubmitHandler} = props;
    let { title, id, setId } = useCinema("")

    // const limpaForm = () => {
    //     setCinema_uf("");
    //     setCinema_id("");
    //     setCinema_nome("");
    //     setCinema_cidade("");
    // }

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
                <FormCinemas cinemaSubmitHandler={cinemaSubmitHandler} />
            </div>
        </div>
    )
}

export default ModalCinema;