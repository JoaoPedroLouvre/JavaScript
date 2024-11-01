// Session Storage
document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function() {
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
})

// Local Storage

document.getElementById('localBtn').addEventListener('click', function() {
    const inputLocal = document.getElementById('local')
    localStorage.setItem('info', inputLocal.value)
    inputLocal.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function() {
    const infoLocal = localStorage.getItem('info')
    alert('A informação salva é: ' + infoLocal)
})