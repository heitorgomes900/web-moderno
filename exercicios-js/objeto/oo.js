/**
 * PRINCÍPIOS: 
 * 1 - Abstração;
 * 2 - Herança;
 * 3 - Polimorfismo: tipos de classes mais abstratas representem o comportamento das classes concretas que referenciam; múltiplas formas.
 * 4 - Encapsulamento
 * 
 * Objeto: coleção dinâmica de pares chave/valor
 */

 let produto = new Object
 produto.nome = 'Cadeira'
 produto['marca'] = 'Generica'
 produto.preco = 30

 console.log(produto)
 delete produto.marca
 console.log(produto)

 let carro = {
    modelo: 'Gol',
    valor: 40000,
    dados: {
        chassi: '8fknf8449303',
        renavam: '09898732',
        placa: 'jgb8790',
        uf: 'df'
    },
    emitirCrlv(){
        // procedimentos...
    }
 }

 console.log(carro.dados.placa)
 console.log(carro)