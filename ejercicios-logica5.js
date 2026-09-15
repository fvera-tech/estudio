function capitalizarTitulo(titulo) {

    if (typeof titulo !== "string") return "Ingresa un título válido.";
    if (titulo === "") return "Ingresa un título válido.";

    const tituloMinuscula = titulo.toLowerCase() // Se convierte a minúscula el input para trabajar de manera generalizada el texto.

    const palabrasSeparadas = tituloMinuscula.split(" ");
    const palabrasCapitalizadas = palabrasSeparadas.map((palabra) => {
        const inicialAMayuscula = palabra.charAt(0).toUpperCase();
        const resto = palabra.slice(1, palabra.length);
        return inicialAMayuscula + resto
    })

    return palabrasCapitalizadas.join(" ");

}


function segundosAMinutos(num) {
    if (typeof num !== "number") return "Ingrese un número válido";
    if (num < 0) return "Ingrese un tiempo válido";

    const minutos = Math.floor(num / 60);
    const segundos = num % 60;

    const minutosString = String(minutos)
    const segundosString = String(segundos)


    return `${minutosString.padStart(2, "0")}:${segundosString.padStart(2, "0")}`

}

