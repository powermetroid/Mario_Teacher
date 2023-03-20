

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






 //Utilizando un bucle for, imprime los números del 1 al 10 en la consola.

 var numero=0;
for (i=0;i<=10;i++){
    numero++
    console.log("Voy a imprimir el numero:"+numero)
}




/*Utilizando un bucle while, imprime los números del 1 al 10 en la consola.
        while (condicion)
            sentencia



var numero=0;
var contador=0;
while(contador<=10){
    console.log("Voy a imprimir el numero: "+numero);
    contador++
    numero++

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
            do {
                console.log("Voy a imprimir el número:" +numero);
                numero++
            } while (numero <= 10);




    Utilizando un bucle for, imprime los números pares del 1 al 20 en la consola.

    for (i=0;i<21;i++) {

        if (i%2==0){

            console.log("El numero par es:"+i)

        }
    }
    
    Utilizando un bucle for, imprime los números impares del 1 al 20 en la consola.
    var numeroImpar = 0;

     var numeroImpar = 0;
    for (i=0;i<21;i++) {
        
        if (i%2==1){
            console.log("El numero Impar es: " +i)
        }
    }

   



    Utilizando un bucle for, imprime la suma de los números del 1 al 10 en la consola.

    var numero = 1;

    var suma = 1;

    for(i=0;i<=10;i++){
        suma+=i
        console.log("Suma: "+suma);

    }


    Utilizando un bucle for, imprime la tabla de multiplicar del 5 en la consola.

      var multiplicador=3
        var resultado;
        for (i=0;i<=10;i++){

            resultado = i * multiplicador;
            console.log(multiplicador+ '  x  '  +i+ " = " +resultado )

        }

    Crea una variable que contenga un número entero. Utilizando una sentencia if, 
    comprueba si el número es par o impar e imprime un mensaje en la consola.

  var entero = Math.floor(Math.random()*11);

console.log(entero); 
if(entero == 0) {

        console.log("El numero entero " +entero+ " es = a 0")

}else if(entero%2 ==1){

        console.log("El numero entero " +entero + " es impar")

}else if(entero%2 == 0){

        console.log("El numero entero " + entero +" es par")

}

        


    Crea una variable que contenga un número entero. Utilizando una sentencia if, 
    comprueba si el número es positivo, negativo o cero e imprime un mensaje en la consola.

        var numeroEntero = Math.floor(Math.random()*201)-100//-100 | 100

if (numeroEntero > 0 ){

    console.log ("El " +numeroEntero+ " es positivo")

}else if(numeroEntero < 0){

    console.log ("El " +numeroEntero+ " es negativo")

}else if(numeroEntero==0){

    console.log("El " +numeroEntero+  "es = a 0")
}





    Utilizando un bucle for, imprime los números del 1 al 100 en la consola. Si el número es divisible por 3, 
    imprime "Fizz" en lugar del número. Si el número es divisible por 5, imprime "Buzz" en lugar del número. Si 
    el número es divisible por 3 y 5, imprime "FizzBuzz" en lugar del número.

  for (i=0;i<=100;i++){
    if (i%3==0 && i%5==0){
        console.log("FIzzBUzz " +i)
       
    }else if(i%3==0){
        console.log("FIZZ "+i)
    
    }else if(i%5==0){
        console.log("BUZZ "+i)
    } 
}

 


