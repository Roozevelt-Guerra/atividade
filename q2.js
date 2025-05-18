function dobrarPares(){
    const numeros = [1, 2, 3, 4, 5, 6];
    const pares = numeros.filter(num => num % 2 === 0);
    return pares.map(num => num * 2);
}

console.log(dobrarPares());