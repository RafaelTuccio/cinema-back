import { useState } from 'react'

const SelectFilmes = (props) => {
    let [selected, setSelected] = useState("Escolha um cinema")
    let { filmes, setSelectFilme } = props;

    const initComboFilmes = () => {
        const comboOpen = document.getElementById("options-container-filmes");
        comboOpen.classList.toggle("active")
    }
    
    return(
        <div>
        <div className="select-box">
            <div id="options-container-filme" className="options-container">

                {
                    filmes.map((filme) => {
                        return (
                        <div key={filme.filme_id} className="option">
                        <input type="radio" 
                        className="radio" 
                        id={filme.filme_id}
                        
                        name="category" 
                        onClick={(e) => {
                            setSelected(filme.filme_nome);
                            setSelectFilme(filme.filme_id);
                            initComboFilmes()
                        }}
                        />
                        <label htmlFor={filme.filme_id}>{filme.filme_nome}</label>
                    </div>
                    );
                    })
                }

                
                
            </div>
            <div onClick={initComboFilmes} className="selected">
                {selected}
            </div>
        </div>
        </div>
    )
    
}

export default SelectFilmes;