function cadastrarDev() {

    // Buscando os ULs no HTML
    const nomeCompletoUL = document.getElementById('nomeCompleto')
    const btnCadastrarUL = document.getElementById('btnCadastrar')
    const btnRemoverUL = document.getElementById('btnRemoverUL')
    
    // Input Nome Completo
    const nomeCompletoLI = document.createElement('li')
        nomeCompletoLI.innerText = 'Informe o nome completo do desenvolvedor: '
        nomeCompletoLI.tagName = 'nomeCompletoLI'
    const nomeCompletoInput = document.createElement('input')
        nomeCompletoInput.type = 'text'
        nomeCompletoInput.tagName = 'nomeCompletoInput'

    // Botão Cadastrar nova Tecnologia
    const btnCadastrar = document.createElement('p')
    btnCadastrar.innerHTML = '<button onclick="AdicionarNovaTec()">Cadastrar Desenvolvedor</button>'
    btnCadastrar.tagName = 'botaoCadastrarDev'

    // Botão Remover
    const btnRemover = document.createElement('p')
        btnRemover.innerHTML = '<button onclick="Remover()">Remover</button>'
        btnRemover.tagName = 'botaoRemover'

    // Adicionando um item no outro
    nomeCompletoLI.appendChild(nomeCompletoInput)
    nomeCompletoUL.appendChild(nomeCompletoLI)
    btnCadastrarUL.appendChild(btnCadastrar)
    btnRemoverUL.appendChild(btnRemover)
}

function AdicionarNovaTec() {

    // Buscando os ULs no HTML
    const nomeTecnologiaUL = document.getElementById('nomeTecnologia')
    const botaoRadioUL = document.getElementById('botaoRadio')

    // Input Nome Tecnologia
    const nomeTecnologiaLI = document.createElement('li')
        nomeTecnologiaLI.innerText = 'Informe o nome da tecnologia: '
        nomeTecnologiaLI.tagName = 'nomeTecnologiaLI'
    const nomeTecnologiaInput = document.createElement('input')
        nomeTecnologiaInput.type = 'text'
        nomeTecnologiaInput.tagName = 'nomeTecnologiaInput'

    // Botões Tempo de Experiência
    const tempodeExperienciaLI = document.createElement('li')
        tempodeExperienciaLI.innerText = 'Selecione o tempo de experiência: \n'
        tempodeExperienciaLI.tagName = 'botaoExperienciaLI'
    const tempodeExperienciaBTN = document.createElement('p')
        tempodeExperienciaBTN.innerHTML = '<p> 0-2 Anos: <input type="radio" name="selecaoXp" /><br /> 3-4 Anos: <input type="radio" name="selecaoXp" /><br /> 5+ Anos: <input type="radio" name="selecaoXp" /> </p>' // OBS: O 'name' deve ser o mesmo para que só seja possível selecionar um botão por vez

    // Adicionando um item no outro
    nomeTecnologiaLI.appendChild(nomeTecnologiaInput)
    tempodeExperienciaLI.appendChild(tempodeExperienciaBTN)
    nomeTecnologiaUL.appendChild(nomeTecnologiaLI)
    botaoRadioUL.appendChild(tempodeExperienciaLI)
}

function Remover() {

    const ulNome = document.getElementById('nomeTecnologia');
    const ulBotao = document.getElementById('botaoRadio');

    // Removendo o último elemento adicionado em cada UL
    ulNome.removeChild(ulNome.lastElementChild);
    ulBotao.removeChild(ulBotao.lastElementChild);

    console.log('Removido')
}