const sequencia = {
    _valor: 1, // convenção (para variável privada)
    get valor(){ return this._valor++ },
    set valor(valor){ 
        this._valor = valor > this._valor? valor:{} }
}

console.log(sequencia.valor)