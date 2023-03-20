
/*
console.log(miArray[0]);
console.log(miArray[1]);
console.log(miArray[2]);
console.log(miArray[3]);
console.log(miArray[4]);
console.log(miArray[5]);
console.log(miArray.length-1);


for(i = 0; i<miArray.length-1 ; i++ ){

        miArray[i] = Math.floor(Math.random()*11) ;
}

console.log(miArray);
*/                  //3
let miArray  = [1,3,5,7]//miArray.length = 4
let miArray2 = [9,7,5,3,1,6]  //miArray2.length = 6
let miArray3 = [];

console.log(miArray[5]);
console.log(miArray);
console.log(miArray.indexOf(7)); 
console.log("------");
var suma;
var diferencia;
for(i = 0;i< miArray.length;i++){
    if((i+1)==miArray.length){
        suma = miArray[i]+miArray2[i]
        miArray3.push(suma);
        diferencia = miArray2.length-miArray.length
        console.log("Me faltan por sumar: "+ diferencia +" elementos");
        for(j=i+1 ; j<miArray2.length;j++){
            miArray3.push(miArray2[j])
        }

    }else{
        suma = miArray[i]+miArray2[i]
        miArray3.push(suma);
    }
  
   
}
console.log(miArray3);
/*
for(i = 0;i< miArray.length;i++){
    suma = miArray[i]+miArray2[i]
    miArray3.push(suma);
}
console.log(miArray3);

miArray.forEach( function(elemento,indice){
    miArray3.push((elemento+miArray2[indice]))
} )

*/
//console.log(miArray3);
//console.log("Media de los elementos:" +(contador/miArray.length));

