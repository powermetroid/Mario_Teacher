



/*

let myArray=[];

//Valores entre 0 y 10

var miNumeroAleatorio
var multiplosDe3=0;
var multiplosDe5=0;

for(let i=0;i<10;i++){

    myArray[i]=Math.floor(Math.random()*11);
    
    if((myArray[i]%3)==(0)){

        multiplosDe3++
        console.log("El valor del array es multiplo de 3" +myArray[i])
    


    }
    
    if((myArray[i]%5)==(0)){
        multiplosDe5++
        console.log("El valor del Array multiplo de 5" +myArray[i])

    }
        
    

}



console.log( myArray);
console.log("el numero de multiplos de tres es:" +multiplosDe3);
console.log("el numero de cinco es:" +multiplosDe5);



*/


/**
 Utilizando un bucle for, imprime los números del 1 al 10 en la consola.

 var numero=0;
for (i=0;i<=10;i++){
    numero++
    console.log("Voy a imprimir el numero:"+numero)
}

for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción

*/

/*Utilizando un bucle while, imprime los números del 1 al 10 en la consola.
        while (condicion)
            sentencia



var numero=0;
var contador=0;
while(contador==10){

    contador++
    numero++
    console.log("Voy a imprimir el numero"+numero);

}

*/

/* 



    Utilizando un bucle do while, imprime los números del 1 al 10 en la consola.

            let result = '';
            let i = 0;

            do {
            i = i + 1;
            result = result + i;
            } while (i < 5);

            console.log(result);
            // Expected output: "12345"



            var numero=0;
            var i=0;

            do {
                i= i++;
                numero = numero++
                } while (i < 10);

                console.log("Voy a imprimir el número:" +numero);




    Utilizando un bucle for, imprime los números pares del 1 al 20 en la consola.

    var numeroPar = 0

    for (i=0;i<21;i++) {

        if (numeroPar%2==0){

            console.log("El numero par es:"+numeroPar++)


        }else{numeroPar++}
    }

    
    Utilizando un bucle for, imprime los números impares del 1 al 20 en la consola.

   

    var numeroImpar = 0;

    for (i=0;i<21;i++) {
        if (numeroImpar%2==1){

            console.log("El numero Impar es" +numeroImpar++)

        }else{numeroImpar++}

    }

   



    Utilizando un bucle for, imprime la suma de los números del 1 al 10 en la consola.

    var numero = 1;

    for (i=0;i<10;i++){

        if(i<=10){
            var j= i;
            numero++
            var suma= j++ + numero;
            console.log("La suma de los dos numeros es:"+suma)


        }

    }


    Utilizando un bucle for, imprime la tabla de multiplicar del 5 en la consola.

        var numero= 0;

    for (i=0;i<5;i++){

        var multiplicador=5
        numero++
        var resultado= numero * multiplicador;

        console.log("La tabla del 5 es "+multiplicador+ '  x  '  +numero+ " = " +resultado )

    }

    Crea una variable que contenga un número entero. Utilizando una sentencia if, 
    comprueba si el número es par o impar e imprime un mensaje en la consola.

  var entero = Math.floor(Math.random()*11);

    console.log(+entero); 

        if(entero === 0) {

            console.log("El numero entero " +entero+ " es = a 0")
            

        }else if(entero%2 ==1){

            console.log("El numero entero " +entero + " es impar")
        }else if(entero%2 == 0){
            
            console.log("El numero entero " + entero +" es par")}

        


    Crea una variable que contenga un número entero. Utilizando una sentencia if, 
    comprueba si el número es positivo, negativo o cero e imprime un mensaje en la consola.

            var numeroEntero = Math.floor(Math.random()*101)

        if (numeroEntero > 1 ){

            console.log ("El " +numeroEntero+ "es positivo")

        }else if(numeroEntero < 1){

            console.log ("El " +numeroEntero+ "es negativo")

        }else if(numeroEntero=0){

            console.log("El " +numeroEntero+ "es = a 0")
        }






    Utilizando un bucle for, imprime los números del 1 al 100 en la consola. Si el número es divisible por 3, 
    imprime "Fizz" en lugar del número. Si el número es divisible por 5, imprime "Buzz" en lugar del número. Si 
    el número es divisible por 3 y 5, imprime "FizzBuzz" en lugar del número.

    var numero = 0;

for (i=0;i<100;i++){
    numero++
    if (numero%3==0 && numero%5==0){

        console.log("FIZZ "+numero)
    }if (numero%3==0){

        console.log("BUZZ "+numero)

    }else if
        (numero%5==0)

        console.log("FIzzBUzz " +numero)
    } 


 */

//20, 18, 16 , 0
/*
   
    for (i=20;i>=0;i-=2){

            console.log(i)
        }


 
// Pregunta fibonacci => 0,     1,     1,  2, 3, 5, 8, 13, 21.
                        //na    nb    temp


/*
var numeroTope = 25;
var numeroA = 0;
var numeroB = 1;
var temp; //suma de 0 + 1

for (i=0;i<=7;i++){
    temp = numeroA+numeroB
    console.log(temp);
    numeroA=numeroB;
    numeroB=temp
}


    
Calcular la suma de todos los elementos de una matriz 3F y 4C

*/


let miArray = [
    [1,2,2,],
    [4,4,2,],
    [7,6,2,],
    [8,9,2,]
];

for(i=0;i<5;i++){
    for(j=0 ; j<4 ;j++){
console.log(miArray[i][j]);
    var suma = miArray[i][j]
        console.log(suma)
        suma + miArray[i][j]
    }
}


/Serie Fibonacci =>  2,   2,   2 , 3, 5, 8, 13, 21,
                    //na   nb  temp
var numTope= 25;
var numa = 0;
var numb = 1;
var temp;

console.log(numa);
console.log(numb);
for(i = 1 ; i<=12; i++){
    temp = numa+numb;
    console.log(temp);
    numa = numb
    numb = temp;
}
