//Tarea Lista de la compra. Añadir elementos en un array e ir imprimiendolos. Evitar que se reinicie la pagina con PreventDefault.


//Añadir validacion campo vacio o longitud maxima 20 caracteres
//* const input = document.getElementById('input_tarea');

const listadoTareas = document.getElementById('listado_tareas')
const btn_anadir = document.getElementById('btn_anadir')
btn_anadir.addEventListener('submit',enviarTarea);

//Crear array de tareas

var listaCompra = []; //Creamos array de lista de la compra


    

    function enviarTarea (event){
        console.log("entra e la funcion");
        for(i=listaCompra.value;i<listaCompra.length;i++)
        event.preventDefault();
        listaCompra.push('listadoTareas')
        let elemento = document.createElement('li') //Creamos un elemento del dom <li>
        elemento.innerHTML = `${i} - ${listaCompra.value}` //Le añadimos html a este elemento
    }






