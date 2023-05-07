// Obtenemos los elementos HTML necesarios
const carrito = document.getElementById('carrito');
const menu = document.getElementById('menu');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Si hay elementos en localStorage, los cargamos en el carrito
if (localStorage.getItem('carrito')) {
  carrito.innerHTML = localStorage.getItem('carrito');
}

// Agregamos el evento click a los elementos del menú
menu.addEventListener('click', agregarAlCarrito);

// Agregamos el evento click al botón de vaciar carrito
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

// Función para agregar un elemento al carrito
function agregarAlCarrito(e) {
  if (e.target.tagName === 'LI') {
    const nombre = e.target.dataset.nombre;
    const precio = e.target.dataset.precio;

    // Creamos el elemento HTML del carro de compra
    const itemCarrito = document.createElement('div');
    itemCarrito.innerHTML = `${nombre} - $${precio}`;
    carrito.appendChild(itemCarrito);

    // Guardamos el carrito en el localStorage
    localStorage.setItem('carrito', carrito.innerHTML);
  }
}

// Función para vaciar el carrito
function vaciarCarrito() {
  while (carrito.firstChild) {
    carrito.removeChild(carrito.firstChild);
  }

  localStorage.removeItem('carrito');
}
