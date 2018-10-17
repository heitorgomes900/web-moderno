// Promise é promessa
// p/ processamento assíncrono
// Promessa cumprida ou rejeitada

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // o resolve/reject recebe apenas 1 parametro
        setTimeout(() => { resolve(frase) }, segundos * 1000)
    })
}

falarDepoisDe(3, 'legal demais')
    .then(frase => frase.concat('!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))