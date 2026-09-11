// Seleccionando elementos

const inputTexto = document.querySelector(".text");
const btnAgregar = document.querySelector(".button")
const listaDeTareas = document.querySelector(".tareas-asignadas ul")

const btnEliminar = document.querySelectorAll(".delete");
const btnCompletado = document.querySelectorAll(".complete");
const btnEditar = document.querySelectorAll(".update")

console.log(btnEditar)

function agregarTarea(event) {

    event.preventDefault();

    const textoTarea = inputTexto.value
    console.log(textoTarea)

    if (textoTarea.trim() !== "") {

        // Lógica para agregarla al DOM
        const nuevaTarea = document.createElement("LI");

        nuevaTarea.innerHTML = `${textoTarea}
                    <div class="btns">
                        <button class="delete">❌ Eliminar</button>
                        <button class="complete">✅ Completada</button>
                    </div>`

        listaDeTareas.appendChild(nuevaTarea)
    } else {
        alert("Ingrese una tarea válida");
    }
}

btnAgregar.addEventListener("click", agregarTarea)