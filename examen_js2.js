/*PREGUNTA 2, problema de Web APIs: (3,00 puntos) 
Desarrolla una aplicación en JavaScript disponga de los controles e especificaciones siguientes:
•R1) Un elemento que permita solicitar e introducir al usuario un número entero comprendido entre 1 y 50.

•R2) Un botón (B1) "Enviar" que, cada vez que se hace clic en él, permita indicar al usuario que quiere enviar la 
entrada anterior.

•R3) Si la entrada no es válida se sacará un mensaje: "Entrada no válida: debe estar comprendida entre 1 y 50"

•R4) Un botón (B2) "Color fondo" que al realizar clic en el cambie el color de fondo de la página.

•R5) Al hacer clic en el botón B1 se validará la entrada( número N ) y, si cumple con los requisitos indicados, se 
dibujarán en la página N cuadrados de color, posición y tamaño aleatorio.

•R6) Cada vez que se hace clic en el botón B2 cambiará el color de fondo de la página, dejando todo lo demás 
como está (incluyendo los cuadrados dibujados).*/


const botonEntrada = document.getElementById('entrada');
const alerta = document.getElementById('alerta');
const botonFondo = document.getElementById('fondo');
const botonEnviar = document.getElementById('enviar')


//Se debe calcular un numero n aleatorio.

function aleatorio (){

Math.floor(Math.random())

}


function introducirNumero(){
        if(i<1 | i>50 ){
            window.alert = "Entrada no válida: debe estar comprendida entre 1 y 50"
        return;

        }else(i>=1 | i<=50){
            window.alert = "Se va a enviar el numero introducido";



        }



}


botonEntrada.addEventListener('click',introducirNumero);
