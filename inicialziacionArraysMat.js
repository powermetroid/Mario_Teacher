//Distintos tipo sde inicialziacion, [] y Array()

//let miArray = [ [ , , ]  ,  ,  ,  ,   ,  ]  //6 Filas, 3 columas

let filas = parseInt(prompt("Introduce num filas"));
let columnas = parseInt(prompt("Introduce num columnas"));
//console.log(object);
let matriz = new Array(filas);

for(let i = 0 ; i<filas;i++){
    matriz[i] = new Array(columnas)
}

for( i = 0 ; i<filas;i++){
    for( j = 0 ; j<columnas;j++){
        matriz[i][j]=(i+j);
    }
}

console.log(matriz);