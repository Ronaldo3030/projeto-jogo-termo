let resposta = document.getElementById('resposta')
let resposta2 = document.getElementById('resposta2')
let campoAlert = document.querySelector('.alert')
let numAleatorio = Math.floor(Math.random() * palavras.length)
let palavraAleatoria = palavras[numAleatorio]
let arrPalavraAleatoria = palavraAleatoria.split('')
let letras
let contador = 1
console.log(arrPalavraAleatoria)

function nextKey(proxId, prevId) {
    campoAlert.classList.add('d-none')
    if (event.keyCode === 219 || event.keyCode === 222 || event.keyCode === 16) {
        return
    }
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
    letras = document.querySelectorAll('.palavraInput'+contador)
    if (event.keyCode === 13) {
        let arrPalavraUser = []
        let campoPalavra
        letras.forEach(palavra => {
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
    if (palavraAleatoria === userWord) {
        // GANHOU
        verifyWordUser(userWord)
        insertText(campoAlert, "Genial!")
        backgroundModal2.classList.remove('d-none')
        resposta2.innerText = contador
    } else if (!palavras.includes(userWord)) {
        // PALAVRA NAO EXISTE
        insertText(campoAlert, "essa palavra não existe!")
    } else {
        // ACERTOU ALGUMAS LETRAS
        verifyWordUser(userWord)
        nextWord()
    }
}

function tapKey(id) {
    let local = document.getElementById(id)
    local.style.animation = ""
    setTimeout(() => local.style.animation = "tap .2s")
}

function insertText(element, text) {
    element.classList.remove('d-none')
    element.innerHTML = text
}

function nextWord() {
    contador++
    letras.forEach((campoLetra, index) => {
        campoLetra.setAttribute("disabled", "disabled")
        campoLetra.parentElement.classList.remove('campo'+(index + 1))
    })
    let containerCampoPalavra = document.getElementById('palavra' + contador)
    if(containerCampoPalavra){
        containerCampoPalavra.classList.remove('disabled')
        let palavraInput = document.querySelectorAll('.palavraInput' + contador)
        let conta = 1
        for (let item of palavraInput) {
            item.removeAttribute("disabled")
            item.parentElement.classList.add('campo'+conta)
            conta++
        }
        palavraInput[0].focus()
    }else{
        // PERDEU
        backgroundModal.classList.remove('d-none')
        resposta.innerText = palavraAleatoria
    }
}

function verifyWordUser(word) {
    arrWord = word.split('')
    arrWord.forEach((letraWord, index) => {
        if (arrPalavraAleatoria.includes(letraWord)) {
            document.querySelector('.campo' + (index + 1)).classList.add('existe')
        }
    })

    arrPalavraAleatoria.forEach((letraPalavraAleatoria, index) => {
        if (letraPalavraAleatoria == arrWord[index]) {
            document.querySelector('.campo' + (index + 1)).classList.add('certo')
        } else {
            document.querySelector('.campo' + (index + 1)).classList.add('errada')
        }
    })
}