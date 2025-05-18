function ordenarFrutas(frutas){
    return frutas.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
}

const frutas = ['maçã', 'laranja', 'banana'];
console.log(ordenarFrutas(frutas));