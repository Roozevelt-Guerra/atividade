function numeroPrimo(numero) {
    if (numero <= 1) {
        return `${numero} não é primo.`;
    }
    if (numero === 2) {
        return `${numero} é primo.`;
    }
    if (numero % 2 === 0) {
        return `${numero} não é primo.`;
    }

    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return `${numero} não é primo.`;
        }
    }

    return `${numero} é primo.`;
}

console.log(numeroPrimo(3));