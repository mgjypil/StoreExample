const modal = document.querySelectorAll('.preview');
const cardBtn = document.querySelectorAll('.product');
const modalClose = document.querySelectorAll('.preview-close');
const modalCard = document.querySelectorAll('.preview');

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-preview');
}

// show preview
cardBtn.forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', () => {
        activeModal(i)
    })
})

// hide preview
modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-preview')
        })
    })
})

// hide preview when clicking background
modal.forEach((modal) => {
    modal.addEventListener('click', () => {
        modal.classList.remove('active-preview')
    })
})

// dont hide preview on product click by event propagation
modalCard.forEach((modalCard) => {
    modalCard.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})