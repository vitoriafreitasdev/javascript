let num = [5, 8, 2, 9, 3]
num[5] = 4
num.push(1)
console.log(`(${num}) => O vetor tem ${num.length} posições`)
console.log(`${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else {
    console.log(`o valor 8 esta na posição ${pos}`)
}

