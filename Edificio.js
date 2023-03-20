class Edificio {
    calle =  ""
    numero =  ""
    codigoPostal = ""
    plantas = []
    constructor(calle,numero,codigoPostal){
        this.calle=calle
        this.numero=numero;
        this.codigoPostal=codigoPostal;
        console.log(`Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}.`);
     }
 
  agregarPlantasYPuertas(numPlantas, numPuertas) {
    for (let i = 0; i <= numPlantas; i++) {
      const planta = [];
      for (let j = 0; j <= numPuertas; j++) {
        planta.push("");
      }
      this.plantas.push(planta);
    }
  }

  modificarNumero(numero) {
    this.numero = numero;
  }

  modificarCalle(calle) {
    this.calle = calle;
  }

  modificarCodigoPostal(codigo) {
    this.codigoPostal = codigo;
  }

  imprimeCalle() {
    return this.calle;
  }

  imprimeNumero() {
    return this.numero;
    console.log(`El número del edificio es ${this.numero}`);
  }

  imprimeCodigoPostal() {
    console.log(`El código postal del edificio es ${this.codigoPostal}`);
  }

  agregarPropietario(nombre, planta, puerta) {
    this.plantas[planta-1][puerta-1] = nombre; //-1 para representar planta 1 => Indice 0
    console.log(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`);
  }

  imprimePlantas() {
    console.log(`listado de propietarios del edificio ${this.calle} numero ${this.numero}:`);
    this.plantas.forEach((planta, i) => {
      planta.forEach((propietario, j) => {
        console.log(`Propietario del piso ${j+1} de la planta ${i+1}: ${propietario}`);
      });
    });
  }

}


const edificioA = new Edificio("Garcia Prieto", "58", "15706")
const edificioB = new Edificio("Camino Caneiro", "29", "32004")
const edificioC = new Edificio("San Clemente", "s/n", "15705")

console.log(edificioA.imprimeNumero());


edificioA.imprimeCodigoPostal();
edificioC.imprimeCalle();
edificioA.agregarPlantasYPuertas(2, 3);
edificioA.agregarPropietario("Juan Antonio", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellon", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);


edificioA.imprimePlantas()

edificioA.agregarPropietario("Pedro Mejide", 3, 2);
edificioA.imprimePlantas()


/*
const inmobiliaria ={

   edificios:  [],

};
*/
class Inmobiliaria {
  nombre;
  edificios = []
  constructor(nombre){
    this.nombre=nombre
  }

  addEdificio(edificio){
    this.edificios.push(edificio)
  }

  listarEdificios(){
    edificios.forEach((elemento)=>{
      console.log(elemento);
    })
  }

}

const inmobiliaria = new Inmobiliaria("Nombre"); 

inmobiliaria.addEdificio(edificioA)
inmobiliaria.addEdificio(edificioB)
inmobiliaria.addEdificio(edificioC)

console.log(inmobiliaria.listarEdificios);

/*
JavaScript: (1,50 puntos)
Dada la siguiente aplicación en JavaScript (descargar código de la pregunta en formato .zip de la web de 
FPADISTANCIA), que se corresponde con una propuesta de solución a la tarea 4 (ver por favor enunciado en 
FPADISTANCIA), 
•a) Localiza y arregla el problema de funcionamiento de la aplicación JavaScript, para que se corresponda con las 
especificaciones de la tarea 04 (0,75 puntos)
•b) Añade las siguientes prestaciones a la aplicación:  (0,75 puntos)
◦Crea un objeto inmobiliaria (creando una clase para ello): esta clase podrá almacenar Edificios y tendrá los 
métodos que permitan realizar las tareas siguientes:
▪añadir edificios a la inmobiliaria
▪eliminar un edificio de la inmobiliaria
▪listar los edificios de la inmobiliaria
▪cualquier otro que estimes oportuno
*/