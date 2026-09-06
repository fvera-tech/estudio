
// NÚMERO A PALABRAS

const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

const especiales = {
    10: "diez", 11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince",
    16: "dieciséis", 17: "diecisiete", 18: "dieciocho", 19: "diecinueve",
    20: "veinte", 21: "veintiuno", 22: "veintidós", 23: "veintitrés", 24: "veinticuatro",
    25: "veinticinco", 26: "veintiséis", 27: "veintisiete", 28: "veintiocho", 29: "veintinueve"
};

const decenas = { 30: "treinta", 40: "cuarenta", 50: "cincuenta", 60: "sesenta", 70: "setenta", 80: "ochenta", 90: "noventa" };

const centenasPalabras = { 1: "ciento", 2: "doscientos", 3: "trescientos", 4: "cuatrocientos", 5: "quinientos", 6: "seiscientos", 7: "setecientos", 8: "ochocientos", 9: "novecientos" };

function numeroAPalabras(num) {
    if (typeof num !== "number" || !Number.isInteger(num)) return "Ingrese un número entero válido";
    if (num < 0 || num > 999) return "Ingrese un número entre 0 y 999";
    if (num === 0) return "cero";
    if (num === 100) return "cien"; // caso especial: 100 solo es "cien", pero 101 ya es "ciento uno"

    const c = Math.floor(num / 100);   // centenas
    const resto = num % 100;           // lo que queda después de la centena
    let partes = [];

    if (c > 0) partes.push(centenasPalabras[c]);

    if (resto > 0) {
        if (resto < 10) {
            partes.push(unidades[resto]);
        } else if (resto < 30) {
            partes.push(especiales[resto]); // 10-29 son irregulares, van en su propio diccionario
        } else {
            const d = Math.floor(resto / 10) * 10;
            const u = resto % 10;
            partes.push(u === 0 ? decenas[d] : `${decenas[d]} y ${unidades[u]}`);
        }
    }

    return partes.join(" ");
}