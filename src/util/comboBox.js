// export const initCombo = () => {
//     const comboOpen = document.getElementById("combo");
//     comboOpen.classList.add("combo-show")
// }

// export const closeCombo = () => {
//     const comboClose = document.getElementById("combo")
//     comboClose.classList.remove("combo-show")
// }


// export const procuraNome = (event) => {
//     let press = event.target.value;
//     const ulNomes = document.getElementById("list-info")
//     let nomes = ulNomes.getElementsByClassName("nome")
//     if(digitado.length > 0) {
//         for(let i = 0; i < nomes.length; i++){
//             let nome = nomes[i];
//             let dado = nome.textContent;
//             let expressao = new RegExp(digitado, "i")
//             if(!expressao.test(dado)){
//                 nome.classList.add("inv")
//             }else{
//                 nome.classList.remove("inv")
//             }
//         }
//     }else{
//         for(let i = 0; i < nomes.length; i++){
//             let nome = nomes[i];
//             nome.classList.remove("inv")
//         }
//     }
    
// }