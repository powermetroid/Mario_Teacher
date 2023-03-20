var cadena = "Mi nombre es Mario"
var cadena2 = "123"
console.log(cadena);
console.log(cadena.length);
console.log(cadena.substring(5,10)); //Saca una subcadena a partir de la inicial, desde el indice 5 al 10 excluido
console.log(cadena.toUpperCase());
console.log(cadena.trim()); //Elimina caracterse en blanco del inicio
console.log(cadena.charAt(3));
console.log(cadena.replace("o","a")); //Remplaza la primera ocurrencia de "o" por una "a"
console.log(cadena2.replaceAll("1","3"));

var cadena3 = "valor1,valor2,valor3,valor4";
console.log(cadena3.split(","));
//Las cadenas son tratadas como arrays
console.log(cadena3[0]+cadena3[1]+cadena3[2]+cadena3[3]+cadena3[4]+cadena3[5]);
console.log(cadena3.indexOf("a"));
console.log(cadena3.includes("vYlor2")); //Buscar una subcadena dentro de la cadena, true o false


