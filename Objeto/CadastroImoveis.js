alert("Bem vindo ao cadastro de imóveis!!!!")

let imoveis = []
let qtdimoveis = 0
let menu = ""

do{
    menu = prompt(
        "Quantidade de imóveis cadastrados: " + qtdimoveis +
        "\n" + "a) Adicionar imóvel" + 
        "\n" + "b) Ver imóveis cadastrados" + 
        "\n" + "c) Sair" 
    )

    if ( menu === "a" ){
        let imovel = {
            nome: "",
            qtdquartos: 0,  
            qtdbanheiros: 0,
            garagem: ""
        }

        imovel.nome = prompt("Insira o nome do proprietário: ")
        imovel.qtdquartos = prompt("Insira a quantidade de quartos: ")
        imovel.qtdbanheiros = prompt("Insira a quantidade de banheiros: ")
        imovel.garagem = prompt("O imóvel possui garagem?")

            if ( imovel.garagem === "Sim" || imovel.garagem === "sim" ){
                imovel.garagem = " Possui garagem!"
            }else{
                imovel.garagem = " Não possui garagem :("
            }

        imoveis.push(imovel);
        qtdimoveis++
        alert("Imovél cadastrado com sucesso!")

    }else if ( menu === "b" ){
        if( imoveis.length === 0 ){
            alert("Não há imoveis cadastrados!")
        }else{

        let listaImoveis = "Imóveis cadastrados:" 

        for ( let i=0; i < imoveis.length; i++ ){
           listaImoveis += "\n \nImóvel " + ( i + 1 ) + ":\n" + 
                "\n Proprietário: " + imoveis[i].nome +
                "\n Quartos: " + imoveis[i].qtdquartos + 
                "\n Banheiros: " + imoveis[i].qtdbanheiros + 
                "\n" + imoveis[i].garagem
        }

        alert(listaImoveis)
        }
    }
}while( menu != "c" )