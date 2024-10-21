// Utilizando loaders, neste caso, loaders para compactar CSS

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            // Aqui vamos dizer qual arquivo ele deve pegar, e qual loader usar para este arquivo
            test: /\.css$/, // Esse $ serve para procurar o texto no final do arquivo e \ serve para 
                           // identificar . como ., similar ao \n 
            use: ['style-loader', 'css-loader'] // Loaders que nós instalamos 
        }]
    }
}