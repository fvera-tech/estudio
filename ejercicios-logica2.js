// CONTADOR DE VOCALES
function contadorDeVocales(word) {
    /* Lógica; 
    1. definir lo que es una vocal.
    2. transformas la palabra a minúscula.
    3. recorrer la palabra y contar cuántas vocales hay.
    4. retornar el número de vocales encontradas.
     */
    let vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    let palabraMinuscula = word.toLowerCase();

    for(let letra of palabraMinuscula) {
        if(vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(contadorDeVocales("Hola Mundo")); // 4
console.log( contadorDeVocales("aEiOoUuU") ); // 8

// SUMA ACUMULADA

function sumaAcumulada(num) {
    /* Lógica
    1. Definir variable suma en cero.
    2. Recorrer desde el 1 hasta el número dado.
    3. Sumar cada valor recorrido a la variable declarada.
    4. Retornar la suma final.
    5. Definir e interceptar errores.
     */
    if(typeof num !== "number") { return "El valor debe ser numérico" }; // Capturando errores de tipo.

    let suma = 0;
    if(num >= 0)  {
        
        let i = 1;
        while(i <= num) {

        suma += i;
        
        i++;
        }
    } else { 
        let i = -1;
        while(i >= num) {
            suma += i;
            i--;
        }
    }
    return suma;
}


    


console.log(sumaAcumulada(10)); // 55 
console.log(sumaAcumulada(-3)); //5050
console.log(sumaAcumulada(5)); // 15
console.log(sumaAcumulada(10));
console.log(sumaAcumulada("awaduwadu"));
console.log(sumaAcumulada(-5));

// ES PRIMO

function esPrimo(num) {
    /*
    1. Verificar que el valor pasado sea numérico y positivos.
    2. Verificar que num sólo sea divisible por sí mismo y por 1.
    3. Definir el caso específico de 1 como No primo.
    */

    if(num <= 0) {return "Ingrese un valor positivo"};
    if(typeof num !== "number") { return "Ingrese valor numérico" };
    if (num === 1) { return "No es primo"}

    let restos = [];
    let cuenta = 0

    for(let i = 1; i <= num ; i++) {
        let resto = num % i 
        restos.push(resto);     
    }
    
    for(elemento of restos) {
        
        if(elemento === 0) { cuenta++ }
    }

    if( cuenta === 2) { return "Es primo" } else { return "No es primo" };
    

}
console.log(esPrimo(7));
console.log(esPrimo(6));
console.log(esPrimo(11));
console.log(esPrimo(13));
console.log(esPrimo(8));
console.log(esPrimo(-11));

// INVERTIR ARRAY

function reverseArray(array) {
    const isTrue = Array.isArray(array);
    if(!isTrue) { return "Ingrese un array válido" }

    /* LÓGICA;
    1. Declarar un nuevo Array vacío.
    2. Con un bucle recorrer desde el final al inicio el array entregado.
    3. Cada elemento del array agregarlo al array vacío.
    */
   let newArray = [];

   for(let  i = array.length - 1; i >= 0; i-- ) {
    newArray.push(array[i])
   }
   return newArray;
}

console.log(reverseArray([1, 2, 3, 4]))
console.log(reverseArray("hola"))

// FIZZBUZZ

function fizzBuzz(num) {
    if(typeof num !== "number") { return "Ingrese valor numérico" };
    let array = [];
    let fizzBuzzArray = [];
    let contador = 0;

    for(i = 1; i <= num ; i++) {
        array.push(i)
    }

    while(contador <= num -1) {
        if(array[contador] % 5 === 0 && array[contador] % 3 === 0) {
            fizzBuzzArray.push("FizzBuzz")
        } else if(array[contador] % 5 === 0) {
            fizzBuzzArray.push("Buzz")
        } else if(array[contador] % 3 === 0) {
            fizzBuzzArray.push("Fizz")
        } else {
            fizzBuzzArray.push(array[contador])
        }
        contador++
    }
    return fizzBuzzArray;
}

console.log(fizzBuzz(20));
console.log(fizzBuzz(30));