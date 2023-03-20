const botonArrancar = document.getElementById('btn_arrancar');
const mensaje = document.getElementById('mensaje');


function arrancarParar(){

    if (botonArrancar.textContent == " Arrancar Maquina"){

        botonArrancar.textContent = "Parar Maquina";
        botonArrancar.textColor = "red";
        texto.textContent = "La Máquina se ha parado"

    }else if(botonArrancar.textContent == " Parar Maquina"){

        botonParar.textContent = "Arrancar Máquina"
        botonParar.textColor = "green";
        mensaje.textContent = "La Maquina se ha arrancado";
        

    }
}

botonArrancar.addEventListener('click',arrancarParar); //Hay que poner comillas en el evento y la funcion no lleva parentesis.






