const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }

// console.log(user.friends[0].phone.ddd)
// Desta forma encontramos um erro, pois não existe phone dentro de friends. Uma maneira de resolvermos este problema[
// seria adicionando ifs para verificar se os métodos do encadeamento existem, o que deixaria o código horrivel

console.log(user?.friends[0]?.phone?.ddd)
// Com o ? o javascript verifica se o parâmetro é nulo ou undefined, e se não for ele prossegue para o próximo

// Este método funciona até mesmo com elementos de um array:
console.log(user.brothers?.[5].name)