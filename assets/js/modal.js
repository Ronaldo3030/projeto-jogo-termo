let url = window.location.href;

let backgroundModal = document.getElementById('background-modal')
let backgroundModal2 = document.getElementById('background-modal2')
let modal = document.getElementById('modal')
let btnComoJogar = document.getElementById('btnComoJogar')
backgroundModal.addEventListener('click', (e) => {
    if (e.target.classList.value == 'background-modal' || e.target.classList.value == 'close') {
        backgroundModal.classList.add('d-none')
    }
})

if(url.includes('play')){
    let backgroundModal2 = document.getElementById('background-modal2')
    let modal2 = document.getElementById('modal2')
    backgroundModal2.addEventListener('click', (e) => {
        if (e.target.classList.value == 'background-modal' || e.target.classList.value == 'close') {
            backgroundModal2.classList.add('d-none')
        }
    })
}else{
    btnComoJogar.addEventListener('click', () => {
        backgroundModal.classList.remove('d-none')
    })
}

