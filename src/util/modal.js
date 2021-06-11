export const initModal = () => {
    const modalOpen = document.getElementById("modal");
    modalOpen.classList.add("modal-show")
}

export const closeModal = () => {
    const modalClose = document.getElementById("modal")
    modalClose.classList.remove("modal-show")
}



// const openModal = document.querySelector("#open-modal");
//     openModal.addEventListener("click", () => {
//     initModal("modal")
// })


// export const close = document.querySelector("#close-modal");
// close.addEventListener("click", () =>{
//     closeModal('modal')
// })

