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

// 3 **CLASIFICADOR DE EDAD**
let ejercicio3 = function clasificacionEdad(edad) {
    if(edad < 0) { return "Edad inválida"; }
    else if(edad <= 12) { return "niño"; }
    else if(edad <= 17) { return "adolescente"; }
    else if(edad <= 64) { return "adulto"; }
    else { return "adulto mayor"; }
}
console.log(ejercicio3(15)); // "adolescente"
console.log(ejercicio3(25)); // "adulto"
console.log(ejercicio3(70)); // "adulto mayor"

// 4 **CALCULADORA DE ENVÍO**

let ejercicio4 = function calculadoraEnvio(kg) {
    if(kg < 0) { return "Peso inválido";}

    if(kg <= 1) { return "$3.000"; }
    else if(kg <= 5) { return "$5.000"; }
    else { return "$8.000"; }
}
    
console.log(ejercicio4(3.5)); // "$5.000"
console.log(ejercicio4(0.5)); // "$3.000"
console.log(ejercicio4(-1)); // "Peso inválido"

// 5 **TRIÁNGULO VÁLIDO**
let ejercicio5 = function trianguloValido(a, b, c) {

    // validación de lados positivos
    if(a <= 0 || b<= 0 || c <= 0) { return "Error. Los valores deben ser positivos" } 

    if(a + b > c && a + c > b && b + c > a) {
        return "sí es triángulo";
    } else {
        return "no es triángulo";
    }
}
console.log(ejercicio5(3, 4, 5)); // "sí es triángulo"
console.log(ejercicio5(1, 2, 10)); // "no es triángulo"
console.log(ejercicio5(-1, 2, 3)); // "Error. Los valores deben ser positivos"
console.log(ejercicio5(0, 1, 1)); // "Error. Los valores deben ser positivos"