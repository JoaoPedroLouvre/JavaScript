function escalarJogador() {
    const playerList = document.getElementById('player-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Jogador'
    
    const ul = document.createElement('ul')

// Criando a Posição do Jogador
    const posicaoLi = document.createElement('li')
    posicaoLi.innerText = 'Posição: '

    const posicaoInput = document.createElement('input')
    posicaoInput.id = 'Posicao-Jogador'
    posicaoInput.type = 'text'
    posicaoInput.name = 'Posicao'
    posicaoLi.appendChild(posicaoInput)
    ul.appendChild(posicaoLi) 
    ul.appendChild(document.createElement('br'))

// Criando o nome do jogador
    const nomeLi = document.createElement('li')
    nomeLi.innerText = 'Nome: '

    const nomeInput = document.createElement('input')
    nomeInput.id = 'Nome-Jogador'
    nomeInput.type = 'text'
    nomeInput.name = 'Nome do Jogador'
    nomeLi.appendChild(nomeInput)
    ul.appendChild(nomeLi)
    ul.appendChild(document.createElement('br'))

// Criando Número da camisa do jogador
    const numeroLi = document.createElement('li')
    numeroLi.innerText = 'Número da Camisa: '
    
    const numeroInput = document.createElement('input')
    numeroInput.id = 'Numero-Camisa'
    numeroInput.type = 'number'
    numeroInput.name = 'Número da camisa do jogador'
    numeroLi.appendChild(numeroInput)
    ul.appendChild(numeroLi)
    ul.appendChild(document.createElement('br'))

// Criando botão de confirmação
    const botaoLi = document.createElement('li')
    botaoLi.innerHTML = '<button onclick="enviarEscalacao()">Escalar</button>'
    ul.appendChild(botaoLi)
    ul.appendChild(document.createElement('br'))

// Mostrando na tela
    playerList.append(h3, ul)
}

function enviarEscalacao() {
    document.createElement('hr')
    const h3 = document.createElement('h3')
    h3.innerText = 'Escalação'
    const apresentarJogadorLi = document.createElement('li')
    apresentarJogadorLi.innerText = 'Jogadores: '
    apresentarJogadorLi.innerHTML = '<p>Posição: <input type="text" id="Posicao-Jogador" name="Posicao" "></p>'
    
    limparCampos()
}

function limparCampos() {
    document.getElementById('Numero-Camisa').value='';
    document.getElementById('Nome-Jogador').value='';
    document.getElementById('Posicao-Jogador').value='';
}

function removerJogador() {
    const playerList = document.getElementById('player-list') 

    const titulos = document.getElementsByTagName('h3')
    const dados = document.getElementsByTagName('ul')

    playerList.removeChild(titulos[titulos.length - 1])
    playerList.removeChild(dados[dados.length - 1])
}