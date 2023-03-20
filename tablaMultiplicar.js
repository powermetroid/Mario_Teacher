const formulario = document.getElementById('formularioTabla');
const inputNumber = document.getElementsByName('numero_input')[0];
const message = document.getElementById('message')
const listadoTabla = document.getElementById('listadoTabla');
formularioTabla.addEventListener('submit',generarTabla);

function generarTabla(event){
    event.preventDefault(); //Evita comportamiento por defecto del evento submit
    listadoTabla.innerHTML="" //Limpia la tabla 

    //Valida, q el valor sea positivo y menor que 10
    if(inputNumber.value=="" || inputNumber.value<0 || inputNumber.value>10){
        message.innerHTML = "<b style='color:red'>El numero no es valido!</b>";
        return;
    }
    message.innerHTML = "";

    for(i = 0;i<=10;i++){
        let elemento = document.createElement('li') // Creamos un elemento del dom <li>
        elemento.innerHTML=`${inputNumber.value} X ${i} = ${inputNumber.value*i}` //Le añadimos html a este elemento
        listadoTabla.insertAdjacentElement('beforeend',elemento) // Insertamos el elemento dentro del contenedor, uno debajo de otro
    }


}

console.log(formulario,inputNumber);