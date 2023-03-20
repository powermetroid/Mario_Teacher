function Fibonacci(datos,filas,columnas){

    var numTope= 25;
    var numA=0;
    var numB=1;
    var temp;

    datos[0]=numB; //Almacenamos el primer elemento de la serie
    //Fibonacci en el array.
    for(i=1; i<=(filas*columnas); i++){
        temp = numA+numB;
        datos[i] = temp;
        //console.log(temp);

        numA = numB;
        numB = temp;

    }

}

let filas = 3; //parseInt (prompt("Introduce numero de filas"));
let columnas = 3; //parseInt (prompt ("Introduce numero de columnas"));
let datosFibonacci = new Array(filas*columnas);
Fibonacci(datosFibonacci,filas,columnas);
console.log(datosFibonacci);

let numerosSacados=0;
for(i = 0; i<filas; i++){
    let fila = "";
    for(j=0; j<columnas;j++){ 
    if(i==0 || i==filas-1 || j==0 || j==columnas-1){
        fila+=".."+datosFibonacci[numerosSacados];
        numerosSacados++;
    }else{
        fila+="     "

}


}
    console.log(fila);
}
