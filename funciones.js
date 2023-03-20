

/*
function suma(a,b){
    return a+b;
}

//Nueva especificacion de JS > 2015
const suma = (a,b)=>{
   return a+b
}
*/

//Funciones encadenadas.
function cubo (a){
    return (a*2);
}

function cuadrado(a){
    return cubo(2*2);
}


console.log(cuadrado(2));
