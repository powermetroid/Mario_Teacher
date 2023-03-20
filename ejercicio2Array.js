let miArray = [];
//Valores entre 0 y 10;
var pares=0,impares=0;

for(var i = 0;i<10;i++){
    miArray[i] = Math.floor(Math.random()*11);
    if(miArray[i]%2==0){
        pares++;
    }else{
        impares++;
    }
}
console.log(miArray);
console.log("Pares: "+pares+" Impares: "+impares);
