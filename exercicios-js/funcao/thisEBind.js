const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas funcional e OO

// O método bind() "amarra" um determinado objeto, referenciando o this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()