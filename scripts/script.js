const preview = document.querySelectorAll('.preview');
const cardBtn = document.querySelectorAll('.product');
const previewClose = document.querySelectorAll('.preview-close');
const previewCard = document.querySelectorAll('.preview');

let activePreview = (previewClick) => {
    preview[previewClick].classList.add('active-preview');
}

// show preview
cardBtn.forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', () => {
        activePreview(i)
    })
})

// hide preview
previewClose.forEach((previewClose) => {
    previewClose.addEventListener('click', () => {
        preview.forEach((previewRemove) => {
            previewRemove.classList.remove('active-preview')
        })
    })
})

// hide preview when clicking background
preview.forEach((preview) => {
    preview.addEventListener('click', () => {
        preview.classList.remove('active-preview')
    })
})

// dont hide preview on product click by event propagation
previewCard.forEach((previewCard) => {
    previewCard.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})