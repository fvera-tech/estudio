/* 
Par o impar. Dado un número, indica si es par o impar.
Ejemplo: 7 → "impar" · 12 → "par"
El mayor de tres números. Dados tres números, determina cuál es el mayor de los tres.
Ejemplo: 4, 9, 2 → "el mayor es 9"
Clasificador de edad. Dada una edad, clasifícala en: niño (0-12), adolescente (13-17), adulto (18-64) o adulto mayor (65+).
Ejemplo: 15 → "adolescente"
Calculadora de envío. Dado el peso de un paquete en kg, calcula el costo de envío: hasta 1kg = $3.000, de 1kg a 5kg = $5.000, más de 5kg = $8.000.
Ejemplo: 3.5 → "$5.000"
¿Triángulo válido? Dados tres lados, determina si pueden formar un triángulo. Regla: la suma de cualquier par de lados debe ser mayor que el tercero.
Ejemplo: 3, 4, 5 → "sí es triángulo" · 1, 2, 10 → "no es triángulo"
*/

// 1 **PAR O IMPAR**
let ejercicio1 = function parOImpar(num) {
    if(num % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}
console.log(ejercicio1(7)); // "impar"
console.log(ejercicio1(12)); // "par"

// 2 **EL MAYOR DE TRES NÚMEROS**
let ejercicio2 = function mayorDeTres(x, y, z) {
    if(x > y && x > z) {
        return x;
    } else if(y > z) {
        return y;
    } else {
        return z;
    }
}
console.log(ejercicio2(4, 9, 2)); // "el mayor es 9"
