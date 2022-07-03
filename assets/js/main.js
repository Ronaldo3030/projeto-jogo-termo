let campoAlert = document.querySelector('.alert')
let numAleatorio = Math.floor(Math.random() * palavras.length)
// let palavraAleatoria = palavras[numAleatorio]
let palavraAleatoria = 'sabia'
let arrPalavraAleatoria = palavraAleatoria.split('')
let contador = 1
let letras = document.querySelectorAll('.palavraInput')
console.log(arrPalavraAleatoria)

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
        alert("Ganhou!")
    } else if (!palavras.includes(userWord)) {
        insertText(campoAlert, "essa palavra não existe!")
    } else {
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

function nextWord(){
    contador++
    letras.forEach(campoLetra => {
        campoLetra.setAttribute("disabled", "disabled")
    })
    let containerCampoPalavra = document.getElementById('palavra'+contador)
    containerCampoPalavra.classList.remove('disabled')

    let palavraInput = document.querySelectorAll('.palavraInput'+contador)
    for(let item of palavraInput){
        item.removeAttribute("disabled")
    }
}

function verifyWordUser(word){
    arrWord = word.split('')
    arrWord.forEach((letraWord, index) => {
        if(arrPalavraAleatoria.includes(letraWord)){
            document.getElementById('campo'+(index+1)).classList.add('existe')
        }
    })

    arrPalavraAleatoria.forEach((letraPalavraAleatoria, index) => {
        if(letraPalavraAleatoria == arrWord[index]){
            document.getElementById('campo'+(index+1)).classList.add('certo')
        }else{
            document.getElementById('campo'+(index+1)).classList.add('errada')
        }
    })
}