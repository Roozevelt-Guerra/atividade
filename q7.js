function somarElementos(numeros) {
    return numeros.reduce((accum, elemento) => accum + elemento, 0);
}


const numeros = [2, 3, 4, 5, 6, 7];
const resultado = somarElementos(numeros);
console.log(resultado)