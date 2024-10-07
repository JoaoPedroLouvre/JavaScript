alert("Olá, seja bem vindo!");

    const Pnome = prompt("Informe o nome do recruta: ")
    const Snome = prompt ("Informe o sobrenome do recruta: ")
    const Cestu = prompt ("Qual o campo de estudo do recruta? ")
    const anoNa = prompt ("Qual o ano de nascimento do recruta? ")

alert(
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome completo: " + Pnome + " " + "" + Snome + 
    "\nCampo de estudo: " + Cestu + 
    "\nIdade: " + (2024 - anoNa)
);

