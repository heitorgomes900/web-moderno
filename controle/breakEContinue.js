numeros = [1,2,3,4,5,6,7,8,9]

for(i in numeros){
    if(i == 5){
        break
    }
    console.log(`${i}=${numeros[i]}`)
}

for(i in numeros){
    if(i == 5){
        continue
    }
    console.log(`${i}=${numeros[i]}`)
}