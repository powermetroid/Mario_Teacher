let miArray = [ 
    [0,7,3,5],
    [1,8,1,2], 
    [4,1,6,1]

 ]  //3 Filas, 4 columas

//console.log(miArray[0][0]); 
var numA = 1
var numB = 0
var temp = 0

for(i = 0 ; i<3;i++){
    for(j=0;j<4;j++){

        numA+=miArray[i][j]
        console.log(miArray[i][j]);
        
        

    }
    
    numA

    console.log(" La suma del array es = " +numA)
    
}



