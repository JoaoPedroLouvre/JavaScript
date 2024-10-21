const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js', // Setamos o ponto de entrada, ele vai utilizar esse nome para criar o arquivo
        // Mas como colocamos mais de um arquivo?
        hello: './src/hello.js'
    
    },
    mode: 'development', // Modo que não é em produção, ou seja, não é minificado, facilindo para o progamador
                         // visualizar e entender o que o código está fazendo
    output: { // Conseguimos alterar o caminho para o arquivo final que ele produz, podemos jogar até na 
              // fucking área de trabalho se quisermos
        path: path.resolve(__dirname, 'public'), // basicamente: ~home/joao/Documentos/Estudos/etc../public
        // filename: 'bundle.min.js'
        // Quando usamos mais de um arquivo:
        filename: '[name].bundle.min.js'
    }
}