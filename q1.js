function verificar(idade) {
    if (idade < 18 && idade > 0) {
        console.log("Menor de idade");
    } else {
        console.log("Maior de idade");
    }
}

console.log(verificar(18));