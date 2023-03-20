//Añadir validacion campo vacio o longitud maxima 20 caracteres

//Crear array de tareas



//Añadir validacion campo vacio o longitud maxima 20 caracteres
const input = document.getElementById('input_tarea');

const listadoTareas = document.getElementById('listado_tareas')
const btn_anadir = document.getElementById('btn_anadir')
btn_anadir.addEventListener('click',enviarTarea);

//Crear array de tareas

var listaCompra = []; //Creamos array de lista de la compra

function enviarTarea (event){
    listadoTareas.innerHTML="";
    listaCompra.push(input.value)
    input.value="";
    console.log(listaCompra);
    for(i = 0; i<listaCompra.length;i++){
        let elemento = document.createElement('li')
        elemento.innerHTML =  `<span>${i} - ${listaCompra[i]}</span>&nbsp <button data-tarea="${listaCompra[i]}" class="btn_eliminar">Eliminar</button>`
        listadoTareas.insertAdjacentElement('beforeend',elemento);
        elemento.addEventListener('click',eliminarTarea)
    }

}

function eliminarTarea(e){
    listadoTareas.innerHTML="";
    let tareaEliminar = e.target.dataset.tarea
    // tarea2 => Eliminar
    // [tarea1,tarea2,tarea3]
    // [tarea1,tarea3]
    listaCompra = listaCompra.filter((valor)=>{
        return valor!==tareaEliminar
    })
    for(i = 0; i<listaCompra.length;i++){
        let elemento = document.createElement('li')
        elemento.innerHTML =  `<span>${i} - ${listaCompra[i]}</span>&nbsp <button data-tarea="${listaCompra[i]}" class="btn_eliminar">Eliminar</button>`
        elemento.addEventListener('click',eliminarTarea)
        listadoTareas.insertAdjacentElement('beforeend',elemento);
        
    }
}