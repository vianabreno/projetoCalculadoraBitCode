const input = document.querySelector('#input')
const result = document.querySelector('#result')
const main = document.querySelector('main')
const root = document.querySelector(':root')

const teclasPermitidas = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(keyBtn =>{
    keyBtn.addEventListener('click', clicBtn =>{
        const valorBtn = keyBtn.dataset.value
        input.value = input.value + valorBtn
    })
})

document.querySelector('#clear').addEventListener('click', limparInput =>{
    input.value = ''
    input.focus()
    result.value = ''
    result.classList.remove('error')
})

input.addEventListener('keydown', ev =>{
    ev.preventDefault()

    if(teclasPermitidas.includes(ev.key)){
        input.value = input.value + ev.key
        return
    }
    
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    if(ev.key === 'Enter'){
        calcular()
    }
})

document.querySelector('#copyToClipboard').addEventListener('click', copy =>{
    const botCopy = copy.currentTarget

    if(!result.value){
        return
    }

    if(botCopy.innerText === 'Copy'){
        botCopy.innerText = 'Copiado!'
        botCopy.classList.add('success')
        window.navigator.clipboard.writeText(result.value)
    } else{
        botCopy.innerText = 'Copy'
        botCopy.classList.remove('success')
    }
})

document.querySelector('#equal').addEventListener('click', calcular);

function calcular(){
    result.value = "ERROR"
    result.classList.add("error")

    const resultado = eval(input.value)
    result.value = resultado
    result.classList.remove("error")
}

document.getElementById("themeSwitcher").addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a")
      main.dataset.theme = "light"
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      main.dataset.theme = "dark"
    }
  })
