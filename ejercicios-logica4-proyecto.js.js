// Proyecto 1: Crear un gestor de inventario.
// El programa debe poder leer, eliminar, crear y modificar el carrito dependiendo de ciertas acciones como una compra.
// Además se debe crear una función que calcule el total de una compra.

// RECUERDA CORREGIR BUGS CON RESPECTO A ELIMINACIONES Y MEJORAR EL CARRITO.


const inventario = [
    {
        id: 1,
        nombre: "teclado",
        precio: 7000,
        stock: 3,
    },
    {
        id: 2,
        nombre: "audífonos",
        precio: 15000,
        stock: 7,
    },
    {
        id: 3,
        nombre: "notebook",
        precio: 350000,
        stock: 2
    },

];



// FUNCIONES.

function agregarInventario(producto, precio, cantidad) {

    // Validadores
    // if(typeof id !== "number") return "Ingrese un ID válido";
    if(typeof producto !== "string") return "ingrese un producto válido";
    if(typeof precio !== "number") return "Ingrese un precio válido";
    if(typeof cantidad!== "number") return "Ingrese un valor válido";

    const productoMinuscula = producto.toLowerCase().trim();

    // Verificar si el producto a agregar existe, según su nombre
    for (const element of inventario) {
        const productoEnInventario = element.nombre;
        if(productoMinuscula === productoEnInventario) {
            element.stock += cantidad;
            return `Se han agregado ${cantidad} al stock de ${productoEnInventario}`;
        } 
    }

    // Si el producto no existe, agregarlo al inventario.

    // Extraer el ID del último producto, para crear el Id del nuevo producto sumándole sólo uno a ese Id.
    const ultimoId = inventario.length;

    const nuevoProducto = {
        id: ultimoId + 1,
        nombre:  `${productoMinuscula}`,
        precio: precio,
        stock: cantidad
    }

    inventario.push(nuevoProducto);
    console.log(inventario)
    return;

}

function buscarPorId(id) {

    // VALIDACIÓN
    if(typeof id !== "number") return "ingrese un ID válido";

    let elemento = null;
    
    // Comprobar si el ID existe
    for (const element of inventario) {

        if(id === element.id) {
            elemento = element.nombre;
            break;
        }
    }
    return elemento;

}

function actualizarProducto(id, precio, stock) {
    // VALIDACIONES
    if(typeof precio !== "number") return "Ingrese un valor válido."
    if(typeof stock !== "number") return "Ingrese un valor válido."
    if(typeof id !== "number") return "Ingrese un valor válido."

    // VERIFICAR QUE EXISTE EL ID

    for (const element of inventario) {

        if(id === element.id) {
            element.precio = precio;
            element.stock = stock
            break;
        }

    }
    return;
}

function eliminarProducto(id) {
    // VALIDACIONES
    if(typeof id !== "number") return "Ingrese un valor válido."

    // ENCONTRAR EL ID Y ELIMINAR EL PRODUCTO.

    for (const element of inventario) {

        if(id === element.id) {
            inventario.splice( id-1, 1 );
            break;
        }
    }
    return;
}

function compra( producto, cantidad ) {

    // VALIDACIONES

    if(typeof producto !== "string") return "ingrese un producto válido";
    if(typeof cantidad!== "number") return "Ingrese un valor válido";

    let boleta = 0;

    // IDENTIFICAR PRODUCTO

    for (const element of inventario) {
        
        if(producto === element.nombre) {
            const precioTotal = cantidad * element.precio;
            boleta += precioTotal;
            element.stock -= cantidad;
            console.log(inventario)
            break
        }

    }

    return `Tu cuenta a pagar es de $${boleta}. Sin descuento porque somos cagao.`

}
// console.log(compra("teclado", 3));

