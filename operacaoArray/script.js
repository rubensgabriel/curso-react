const lista = [1,2,3,4,5,6];

const novaLista = lista.map(function(item, index){
    return item + index;
})

console.log(novaLista);

const soma = lista.reduce(function(total, proximo){
    return total + proximo;
})

console.log(soma);

const find = lista.find(function(item){
    return item === 6;
})

console.log(find);