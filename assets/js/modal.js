let backgroundModal = document.getElementById('background-modal')
let modal = document.getElementById('modal')
let btnComoJogar = document.getElementById('btnComoJogar')
backgroundModal.addEventListener('click', (e) => {
    if (e.target.classList.value == 'background-modal' || e.target.classList.value == 'close') {
        backgroundModal.classList.add('d-none')
    }
})

btnComoJogar.addEventListener('click', () => {
    backgroundModal.classList.remove('d-none')
})