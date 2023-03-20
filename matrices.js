let miArray = [ 
    [0,7,3],
    [1,8,1], 
    [4,1,6],
    [7,8,9], 
    [0,5,0],  
    [7,6,9] 
 ]  //6 Filas, 3 columas

//console.log(miArray[0][0]); 

for(i = 0 ; i<6;i++){
    for(j=0;j<3;j++){
        console.log(miArray[i][j]);
    }
    console.log("-----");
   
}

miArray[5][0]= 'a';
console.log(miArray);


