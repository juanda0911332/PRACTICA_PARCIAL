document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  const codigo = document.getElementById("codigo");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const correo = document.getElementById("correo");
  const nota = document.getElementById("nota");
  const guardarBtn = document.getElementById("guardarBtn");
  const tarjetas = document.getElementById("tarjetas");

  const campos = [codigo, nombre, apellido, correo, nota];

  // Habilitar botón si todos los campos están llenos
  campos.forEach((campo) => {
    campo.addEventListener("input", validarCampos);
  });

  // Validar que nota no sea negativa
  nota.addEventListener("input", () => {
    if (parseFloat(nota.value) < 0) {
      alert("La nota no puede ser negativa.");
      nota.value = "";
    }
    validarCampos();
  });

  function validarCampos() {
    const todosLlenos = campos.every((campo) => campo.value.trim() !== "");
    guardarBtn.disabled = !todosLlenos;
  }

  // Crear tarjeta al enviar formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.className = "card p-3 my-2";
    nuevaTarjeta.innerHTML = `
      <p><strong>Código:</strong> ${codigo.value}</p>
      <p><strong>Nombre:</strong> ${nombre.value}</p>
      <p><strong>Apellido:</strong> ${apellido.value}</p>
      <p><strong>Correo:</strong> ${correo.value}</p>
      <p><strong>Nota:</strong> ${nota.value}</p>
    `;

    tarjetas.appendChild(nuevaTarjeta);

    form.reset();
    guardarBtn.disabled = true;
  });
});
