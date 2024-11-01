alert("Bem vindo!")

// Declaração de variáveis
let menu = ""
let bas = 0
let alt = 0
let lado = 0
let bma = 0
let bme = 0
let raio = 0

// Menu de seleção
do{
    menu = prompt(
        "Selecione uma das opções a seguir: " +
        "\n1) Área do Triângulo" +
        "\n2) Área do Retângulo" + 
        "\n3) Área do Quadrado" + 
        "\n4) Área do Trapézio" + 
        "\n5) Área do Circulo" + 
        "\n6) Sair"
        )

        switch (menu){

            case "1":
                function triangulo( bas , alt ){
                    const area = (bas*alt) / 2
                    return area
                }
                const resultadoTRI = triangulo(parseFloat(prompt("Digite o valor da base: ")), parseFloat(prompt("Digite o valor da altura: ")))
                alert(resultadoTRI)
            break;
        
            case "2":
                function retangulo( bas , alt ){
                    const area = (bas*alt)
                    if ( bas === alt ){
                        alert("A base e altura não podem ser iguais!")
                    }else if(bas != alt){
                    return area
                    }
                }
                const resultadoRET = retangulo(parseFloat(prompt("Digite o valor da base: ")), parseFloat(prompt("Digite o valor da altura: ")))
                alert(resultadoRET)
            break;

            case "3":
                function quadrado(lado){
                    const area = (lado**2)
                    return area
                }
                const resultadoQUA = quadrado(parseFloat(prompt("Digite o valor do lado: ")))
                alert(resultadoQUA)
            break;

            case "4":
                function trapezio( bma , bme, alt ){
                    const area = ((bma+bme)*alt) / 2
                    return area
                }
                const resultadoTRA = trapezio(parseFloat(prompt("Digite o valor da base menor: ")), parseFloat(prompt("Digite o valor da base maior: ")), parseFloat(prompt("Digite o valor da altura: ")))
                alert(resultadoTRA)
            break;

            case "5":
                function circulo( raio ){
                    const area = (3.14*(raio**2))
                    return area
                }
                const resultadoCIR = circulo(parseFloat(prompt("Digite o valor do raio: ")))
                alert(resultadoCIR)
            break;

            default:
                if(menu === "6"){
                    alert("Até breve!")
                }else{
                alert("Opção Inválida!!!!")
                }
            break

        }
}while(menu!= "6")