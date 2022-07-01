let campoAlert = document.querySelector('.alert')

function nextKey(proxId, prevId) {
    campoAlert.classList.add('d-none')
    if (event.keyCode === 8) {
        document.getElementById(prevId).focus()
        return
    }
    if (event.keyCode !== 13) {
        document.getElementById(proxId).focus()
        return
    }
    pressEnter()
}

function pressEnter() {
    if (event.keyCode === 13) {
        let arrPalavraUser = []
        let palavras = document.querySelectorAll('.palavraInput')
        let campoPalavra
        palavras.forEach(palavra => {
            arrPalavraUser.push(palavra.value)
            campoPalavra = palavra.parentNode.parentNode
        })
        let palavraUser = arrPalavraUser.join('')
        if (palavraUser.length == 5) {
            verifyGame(palavraUser)
        } else {
            campoPalavra.style.animation = ""
            setTimeout(() => campoPalavra.style.animation = "wrong .4s ease-in-out", 5)
            insertText(campoAlert, "essa palavra não é aceita")
        }

    }
}

function verifyGame(userWord) {
    if (palavra === userWord) {
        alert("Ganhou!")
    } else {
        alert("Perdeu")
    }
}

function insertText(element, text) {
    element.classList.remove('d-none')
    element.innerHTML = text
}