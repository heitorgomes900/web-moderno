function pessoa(nome) {
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

let p1 = new pessoa('Heitor')
p1.falar()
