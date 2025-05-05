// script.js
const productos = [
    { id: 1, nombre: "Laptop", categoria: "tecnologia" },
    { id: 2, nombre: "Camiseta", categoria: "ropa" },
    { id: 3, nombre: "Libro JS", categoria: "libros" },
    { id: 4, nombre: "Smartphone", categoria: "tecnologia" },
    { id: 5, nombre: "Pantalones", categoria: "ropa" }
  ];
  
  let carrito = 0;
  
  function init() {
    mostrarProductos(productos);
  }
  
  function mostrarProductos(lista) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
  
    lista.forEach(p => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "col-md-4";
      tarjeta.innerHTML = `
        <div class="card producto">
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text">Categoría: ${p.categoria}</p>
            <button class="btn btn-primary" onclick="agregarAlCarrito()">Agregar al carrito</button>
          </div>
        </div>
      `;
      contenedor.appendChild(tarjeta);
    });
  }
  
  function filtrarCategoria() {
    const categoria = document.getElementById("categoria").value;
    if (categoria === "todos") {
      mostrarProductos(productos);
    } else {
      const filtrados = productos.filter(p => p.categoria === categoria);
      mostrarProductos(filtrados);
    }
  }
  
  function agregarAlCarrito() {
    carrito++;
    document.getElementById("contadorCarrito").innerText = carrito;
    alert("Producto agregado al carrito.");
  }
  