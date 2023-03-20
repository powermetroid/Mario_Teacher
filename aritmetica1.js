/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(10/2)
console.log(10 % 2) //=>10/2 = 5 , resto => 0;
console.log((3**2)**2) // 81

console.log( typeof(10/0) )

console.log("Expresiones aritmeticas: ");
var a = 1;
var b = 2;
//Post incremento
console.log(a++);// 1 
console.log(a); //2
//Pre incremento
console.log(++a);//3
console.log(a); //3
//a=3 b=1
console.log(b--);//2
console.log(b); // 1


console.log( a==b ? a++ : b--); // 1
console.log( a==b ? a++ : b--);  // 0
console.log( a==b ? a++ : b--);  // -1

var c = 1
var d = "1";

console.log(c===d);



//Operador && (AND o Y lógico)
var a = 5,b=10;

console.log( a!=b && b>8 );

// Operador ||(OR o O lógico)

console.log(a==b || b<8);

console.log(!(a==b));
//Coercion de tipos
let h = 1;
let j = 1;
if (!undefined)
    h++;
 

//Casos especiales
console.log(typeof null);
console.log(typeof NaN);

console.log(!``);
console.log(!'');

//Conversion explicita
var aa = (123).toString()
var bb = "123"

console.log(aa===bb);

//Suma y asignacion;
a = 1;
console.log(a+=4); //=> console.log(a=a+4)

console.log(typeof (Number.MAX_SAFE_INTEGER.toString(2)))

console.log(Math.pow(3,2)); // 3**2


//Clase Math (Operaciones matematicas)
console.log( Math.floor(Math.random()*101) );
*/
const edad = 20;  // No se pueden redeclarar
Math.PI = 3.123  // Variable solo de lectura
console.log(Math.PI);

console.log("Mi edad es: "+(edad+5));

