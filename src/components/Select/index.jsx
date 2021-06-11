import "./style.css"
import { useState } from 'react'
const Select = (props) => {
    let [selected, setSelected] = useState("Escolha um cinema")
    let { cinemas, selectCinema } = props;

    const initCombo = () => {
        const comboOpen = document.getElementById("options-container");
        comboOpen.classList.toggle("active")
    }


    return(
        <div>
        <div className="select-box">
            <div id="options-container" className="options-container">

                {
                    cinemas.map((cinema) => {
                        return (
                        <div key={cinema.cinema_id} className="option">
                        <input type="radio" 
                        className="radio" 
                        id={cinema.cinema_id}
                        
                        name="category" 
                        onClick={(e) => {
                            setSelected(cinema.cinema_nome);
                            selectCinema(cinema.cinema_id);
                            
                            initCombo()
                        }}
                        />
                        <label htmlFor={cinema.cinema_id}>{cinema.cinema_nome}</label>
                    </div>
                    );
                    })
                }

                
                
            </div>
            <div onClick={initCombo} className="selected">
                {selected}
            </div>
        </div>
        </div>
    )
}

export default Select































// import "./style.css"
// import { initCombo, closeCombo } from '../../util/comboBox';
// import { useEffect, useState } from "react";


// const Select = (props) => {
//     let { cinemas, setCinema_nome, setCinema_id, cinema_nome, cinema_id } = props;
//     let [dados, setDados] = useState(cinemas);
    
//     const addDados = (objeto) => {
//         setDados(objeto)
//     }

//     const filtrarNome = (list, digitado) => {
//         let expressao = new RegExp(digitado, "i")
//         list.map((item) => {
//             if(!expressao.test(item.cinema_nome)){
//                 addDados([...item.cinema_nome, item.cinema_nome])
//             }
//         })
//     }

//     useEffect(() => {
        
        
//     },[addDados])

//     return(
//         <div className="combo-container" id="">
//                 <input onClick={initCombo}
//                         id="filter"
//                         className="input-combo" 
//                         type="text" 
//                         placeholder="Selecione um Cinema" 
//                         value={cinema_nome}
//                         onChange={(e) => {
//                             setCinema_nome(e.target.value);
//                             filtrarNome(e.target.value)
//                         }}
//                         />
//             <div id="combo" className="combo-box">
//                 <ul>
//                     {
//                         dados.map((item) => {
//                             return (
//                             <li className="list-combo" 
//                                 id={item.cinema_id} 
//                                 key={item.cinema_id} 
//                                 onClick={(e) => {
//                                     setCinema_nome(e.target.textContent); 
//                                     setCinema_id(e.target.id);
//                                     closeCombo();
//                                 }}>
//                                 {item.cinema_nome}
//                             </li>)
//                         })
//                     }
                    
//                 </ul>
//             </div>

//         </div>
//     )
// }

// export default Select;