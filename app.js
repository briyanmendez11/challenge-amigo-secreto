// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final

    if (nombre === "") {
        alert("Ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = ""; // Limpiar el campo de texto
}

// Función para actualizar la lista visible en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Añada al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Vaciar la lista y el array de amigos
    amigos = [];
    actualizarListaAmigos(); // Esto también limpia la lista visual en el DOM

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <p>Amigo secreto seleccionado: <strong>${amigoSecreto}</strong></p>
    `;
}

//By: Briyan Ademar Mendez Rossillon
