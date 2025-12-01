import { obtenerCarrito } from "./storage.js";
import { actualizarContadro } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContadro(carrito);
});
