// Proyecto 1: Crear un gestor de inventario.
// El programa debe poder leer, eliminar, crear y modificar el carrito dependiendo de ciertas acciones como una compra.
// Además se debe crear una función que calcule el total de una compra.


const inventario = [
    {
        id: 1,
        nombre: "teclado",
        precio: 7000,
        stock: 3,
    },
    /*{
        id: 2,
        nombre: "audífonos",
        precio: 15000,
        stock: 7,
    },*/
    {
        id: 3,
        nombre: "notebook",
        precio: 350000,
        stock: 2
    },

];



// FUNCIONES.

function agregarInventario(producto, precio, cantidad) {

    // VALIDADORES
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

    // Extraer el ID del último producto, para crear el Id del nuevo producto sumándole sólo uno a ese Id.
    
    const siguienteId = Math.max(...inventario.map(i => i.id)) + 1;

    const nuevoProducto = {
        id: inventario.length === 0 ? 1 : siguienteId,
        nombre:  `${productoMinuscula}`,
        precio: precio,
        stock: cantidad
    }

    inventario.push(nuevoProducto);
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
    if (typeof id !== "number") return "Ingrese un valor válido.";

    const idEncontrado = inventario.findIndex(p => p.id === id);

    if (idEncontrado === -1) {
        return "Ese producto no existe";
    }

    const [productoEliminado] = inventario.splice(idEncontrado, 1);
    return `Se eliminó "${productoEliminado.nombre}" del inventario`;
}

function compra(carrito) {

    // VALIDACIONES

    const isArray = Array.isArray(carrito);
    if(!isArray) return "Error con el carrito";

    // VARIABLES

    let boleta = 0;

    // IDENTIFICAR PRODUCTO

    for (const element of carrito) {
    const productoAComprar = element.id;
    const cantidadAComprar = element.cantidad;

        for (const el of inventario) {

            if(productoAComprar == el.id) {

                if(el.stock < cantidadAComprar) {
                    boleta += el.precio * el.stock;
                    el.stock = 0;
                    continue;
                }
                boleta += cantidadAComprar * el.precio;
                el.stock -= cantidadAComprar;
            } 
        }
    }
    
    return boleta;

}



