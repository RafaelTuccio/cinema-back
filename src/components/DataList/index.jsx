import { useState } from "react";
import "./style.css"

const DataList = (props) => {

        let [selected, setSelected] = useState("Escolha um Filme")
        let { filmes, setIdFilme } = props;
    
        const initDataList = () => {
            const dataListOpen = document.getElementById("data-container");
            dataListOpen.classList.toggle("active")
        }
    
    
       

    return(
       
        <div>
            <div className="select-list-box">
                <div id="data-container" className="data-container">

                    {
                        filmes.map((filme) => {
                            return (
                            <div key={filme.filme_id} className="list">
                            <input type="radio" 
                            className="radio" 
                            id={filme.filme_id}
                            
                            name="category" 
                            onClick={() => {
                                setSelected(filme.filme_nome);
                                setIdFilme(filme.filme_id);
                                console.log(filme.filme_id)
                                initDataList()
                            }}
                            />
                            <label htmlFor={filme.filme_id}>{filme.filme_nome}</label>
                        </div>
                        );
                        })
                    }

                           
                    
                    </div>
                    <div onClick={() => {
                        initDataList();
                    }} className="selected">
                        {selected}
                    </div>
            </div>
        </div>
    )
}

export default DataList;