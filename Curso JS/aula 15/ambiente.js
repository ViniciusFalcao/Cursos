var valores=[8,5,7,1,3,0]

for(var c=0;c<valores.length;c++){
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
console.log(valores.sort())
console.log(`O vetor valores tem ${valores.length} posições`)

for(let c in valores){
    console.log(valores[c])
}
