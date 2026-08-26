/*
1. Contador de letras. Dado un string, devuelve un objeto donde cada clave es una letra y el valor es cuántas veces aparece.
Necesitas investigar: objetos literales {}, cómo leer/escribir una propiedad dinámica (objeto[clave]), y cómo verificar si una clave ya existe.
Ejemplo: "banana" → {b: 1, a: 3, n: 2}
2. Tabla de multiplicar completa. Genera una matriz (array de arrays) de tamaño n x n, donde la posición [i][j] tiene el producto (i+1)*(j+1).
Necesitas investigar: bucles anidados (un for dentro de otro for) y arrays de arrays.
Ejemplo: n=3 → [[1,2,3],[2,4,6],[3,6,9]]
3. Palíndromo. Dado un string, determina si se lee igual al derecho y al revés, ignorando mayúsculas y espacios.
Necesitas investigar: cómo quitar espacios de un string, y puedes reutilizar tu propia lógica de reverseArray de la semana pasada.
Ejemplo: "Anita lava la tina" → true
4. El valor que más se repite. Dado un array de números, encuentra cuál valor aparece más veces.
Necesitas investigar: el mismo patrón de "objeto contador" del ejercicio 1, pero aplicado a números, y cómo recorrer las claves de un objeto (for...in o Object.keys()).
Ejemplo: [1, 3, 3, 7, 3, 5] → 3
5. Factorial con recursión. Calcula el factorial de un número, pero la función debe llamarse a sí misma — nada de bucles esta vez.
Necesitas investigar: qué es la recursión y qué es un "caso base" (la condición que detiene las llamadas; sin ella la función nunca termina).
Ejemplo: 5 → 120
*/

// CONTADOR DE LETRAS

function contadorDeLetras(string) {
    /* Lógica
    1. Verificar que el input sea un string.
    2. Cortar espacios y converir el texto a minúsculas.
    3. Recorrer el texto e ir sumando cada letra.
    */
   if(typeof string !== "string") { return "Ingresa un texto válido" };
   if(string.replaceAll(" ", "") === "") { return "Ingrese un texto" };


   const texto = string.toLocaleLowerCase().replaceAll(" ", "");
   const conteo = {};
   
   for(let i = 0; i < texto.length; i++) {
    
    let letra = texto[i];
    

    if(Object.hasOwn(conteo, `${letra}`)) {
        conteo[letra] += 1;
    } else {
        conteo[letra] = 1;
    }
   }
   return conteo;

}

console.log(contadorDeLetras("mI AmOrxxxxitoh hermoszA"));
console.log(contadorDeLetras("Buenos días, su señoría. Mande un lirunlurinla"));

// TABLA DE MULTIPLICAR

function generadorTabla (n) {
    /*Lógica
    1.
    */

    let tablas = [];
    for(let i = 1; i <= n; i++) {
        let tablaInterna = []
        for(let j = 1; j <= n ; j++) {
            tablaInterna.push(i*j);
        }
        tablas.push(tablaInterna);
    }
    return tablas;
}
console.log(generadorTabla(3))

// PALÍNDROMO

function isPalindromo(string) {

    /*
    LÓGICA:

    1. Validar el texto como string.
    2. Quitar espacios en blanco y convertir el texto a minúsculas.
    3. Girar el texto.
    4. Comprobar que el nuevo texto girado sea igual al original.

    */

    if(typeof string !== "string") { return "Ingrese un texto válido" }
    const texto = string.toLowerCase().replaceAll(" ", "").split("");

    const textoGirado = texto.toReversed();
    
    const sonIguales = JSON.stringify(texto) === JSON.stringify(textoGirado)

    if(sonIguales) {
        return true;
    } else {
        return false;
    }
    
}

console.log(isPalindromo("hola"));
console.log(isPalindromo("Anita lava la tina"));

// EL VALOR QUE MÁS SE REPITE

function sumaRepeticion(array) {
    /* Lógica:
    1. Validar el array.
    2. Recorrer el array y almacenar cada elemento.
    3. Si un elemento se repite, agregarle 1 al conteo.
    4. Retornar el elemento que más se repite.
    */

    const isArray = Array.isArray(array);
    if(!isArray) { return "Ingrese un Array" };

    let almacen = {};

    for (const element of array) {

        if(Object.hasOwn(almacen, element)) {
            almacen[element] += 1;
        } else {
            almacen[element] = 1;
        }
    }
    console.log(almacen);
    let element = 0;
    let keyMayor = null;

    for (const key in almacen) {

        if (!Object.hasOwn(almacen, key)) continue;
              
        let esMayor = element >= almacen[key];

        if(esMayor) {
            continue;
        } 

        element = almacen[key];
        keyMayor = key;
    }

    return keyMayor;

}

console.log(sumaRepeticion([2, 2, 3, 5, 8, 5, 2, 3, 3, 3, 3]))


// FACTORIAL CON RECURSIÓN


function factorial(num) {

    if(typeof num !== "number") return "Ingrese un número válido" ;
    if(num < 0) return "Anota un número positivo";
    if(num === 0) return 1;

    if(num <= 1) {
        return num;
    }

    return factorial( num - 1 ) * num;

}

console.log(factorial(10));