
const botonArrancar = document.getElementById('btn_arrancar');
const mensaje = document.getElementById('mensaje');


function arrancarParar(){
    
    if (botonArrancar.classList.contains("arrancado")){
        botonArrancar.classList.remove("arrancado")
       
        botonArrancar.textContent = "Parar maquina";
        mensaje.style.color = "red";
        mensaje.textContent = "La Máquina se ha parado"

    }else{ 
        botonArrancar.classList.add("arrancado")
        botonArrancar.textContent = "Arrancar maquina"
        mensaje.style.color = "green";
        mensaje.textContent = "La Maquina se ha arrancado";
        

    }
}
botonArrancar.addEventListener('click',arrancarParar);
