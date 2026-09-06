
// NÚMERO A PALABRAS

function numeroAPalabras(num) {
    if (typeof num !== "number") { return "Ingrese un número válido" };

    const centenas = Math.floor(num / 100);
    const decenas = Math.floor((num % 100) / 10);
    const unidades = num % 10;

    console.log(centenas, decenas, unidades);

}

console.log(numeroAPalabras(567));