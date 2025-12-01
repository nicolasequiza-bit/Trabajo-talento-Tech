import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";
import { actualizarContadro, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();
  carrito.push(producto);

  guardarCarrito(carrito);
  actualizarContadro(carrito);
  mostrarMensaje("Producto agregado");
};

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  carrito.splice(indice, 1);

  guardarCarrito(carrito);
  actualizarContadro(carrito);
  mostrarMensaje("Producto eliminado");
};

export const vaciarCarrito = () => {
  vaciarCarritoStorage();
  actualizarContadro([]);
  mostrarMensaje("Carrito vaciado");
};
