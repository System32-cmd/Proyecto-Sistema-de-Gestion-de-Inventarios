//===============================================//
// SISTEMA DE GESTION DE INVENTARIO PARA ROPA//
//==============================================//
//PRESENTADO POR GRUPO 2
//CARLOS DANIEL BEDOYA ARISTIZABAL
//DANIEL ESTEBAN SIERRA ANGULO
//ALVARO JOSE AVENDAÑO VARGAS
//JHON JAIRO MORA IBARRA

//===============================================//

let inventario = []; // Diccionario para almacenar los productos en el inventario

// Funcion para agregar productos
function aggProducto(producto, cantidad) {
  // Verificar si el producto ya existe en el inventario
let productoexistente = inventario.find(p => p.producto === producto);//método find() para saber si un elemento existe en el arreglo, ojo, no cuenta la cantidad de elementos
if (productoexistente) {
    // Si el producto ya existe, actualizar la cantidad
    productoexistente.cantidad += cantidad;
} else {
    // Si el producto no existe, agregarlo al inventario
    inventario.push({ producto, cantidad });//método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
}
}

// Funcion para mostrar todos los productos
function mostrarProductos() {
if (inventario.length === 0) {
    console.log("La lista de productos esta vacia.");
} else {
    console.log("Productos en el inventario:");
    inventario.forEach(producto => console.log(`- ${producto.producto}: ${producto.cantidad}`));//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
}
}

// Funcion para actualizar la cantidad de un producto
function actualizarProductoCantidad(producto, nuevaCantidad) {
let productoexistente = inventario.find(p => p.producto === producto);
if (productoexistente) {
    productoexistente.cantidad = nuevaCantidad;
} else {
    console.log(`El producto ${producto} no existe en el inventario.`);
}
}

// Funcion para eliminar productos sin stock
function elimProducInvent() {
inventario = inventario.filter(producto => producto.cantidad > 0);
}//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

//=============================//
// Ejemplos de uso inventario //
//===========================//
//Agregar productos
aggProducto("Camisa", 10);
aggProducto("Pantalon", 20);
aggProducto("Gorra", 5);
aggProducto("Zapatos", 5);
mostrarProductos();
// Agregar mas unidades a un producto
aggProducto("Camisa", 8); 
aggProducto("Zapatos", 4);
mostrarProductos();
//Actualizar la cantidad de un producto
actualizarProductoCantidad("Pantalon", 15);
actualizarProductoCantidad("Gorra", 0)
mostrarProductos();
// Eliminar productos sin stock
elimProducInvent();
mostrarProductos();
//================================//