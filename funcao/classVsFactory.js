class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

let p1 = new Pessoa('Heitor')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
p2 = pessoa('Elter')
p2.falar()
