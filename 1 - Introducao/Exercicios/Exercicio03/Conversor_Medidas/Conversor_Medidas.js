alert("Bem vindo ao conversor de medidas!")

const valor = prompt("Digite a medida em metros: ")
const selecaousu = prompt("Selecione a medida na qual você quer o valor:\n1) milímetro (mm)\n2) centímetro (cm)\n3) decímetro (dm)\n4) decâmetro (dam)\n5) hectômetro (hm) \n6) quilômetro (km)")

let mm = valor * 1000
let cm = valor * 100
let dm = valor * 10
let dam = valor / 10
let hm = valor / 100
let km = valor / 1000

switch (selecaousu) {
    case "1":
        alert("O resultado é " + mm)
    break;
    
    case "2":
        alert("O resultado é " + cm)
    break;

    case "3":
        alert("O resultado é " + dm)
    break;

    case "4":
        alert("O resultado é " + dam)
    break;

    case "5":
        alert("O resultado é " + hm)
    break;

    case "6":
        alert("O resultado é " + km)
    break;

    default:
        alert("Opção Inválida!")

}
