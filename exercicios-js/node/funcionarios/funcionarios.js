const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // client http

const chinesa = f => f.pais === 'China'
const mulher = f => f.genero === 'F'
const menorSalario = (prev, current) => prev.salario >= current.salario ? current : prev

const funci = axios.get(url).then(response => {
    const funcionarios = response.data
    let poorChinese = funcionarios
        .filter(chinesa)
        .filter(mulher)
        .reduce(menorSalario)
    console.log(poorChinese)
})

