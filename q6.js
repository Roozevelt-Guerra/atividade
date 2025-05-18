function quadradoNumeros (numero) {
    return numero.filter(num => num > 10).map(num => num ** 2);
}

const numeros = [2, 3, 4, 5, 12, 20, 11, 15];
const resultado = quadradoNumeros(numeros);
console.log(resultado);