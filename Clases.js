class Persona {
    nombre;
    apellidos;
    edad;
    ciudad;    
    constructor(nombre,apellidos,edad,ciudad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    get nombre(){
        return this.nombre;
    }
    get apellidos(){
        return this.apellidos;
    }
    get nombreCompleto(){
        return this.nombre+" "+this.apellidos;
    }
    get edad(){
        return this.edad;
    }
    get ciudad(){
        return this.ciudad;
    }

    set ciudad(ciudad){
        this.ciudad = ciudad;
    }
    mostrarEdadyCiudad() {
        return this.edad+" "+this.ciudad;
    }
    static mayoriaEdad(){
        return 18;
    }
}

const persona1 = new Persona("Pedro","Lopez Garcia",30, "Madrid");
const persona3 = new Persona("Paco","Lopez Garcia",30, "Madrid");
persona1.ciudad = "Cadiz";
persona1.otra = "Otra";
console.log(persona1.otra);
console.log(persona1);
console.log(persona3);
function PersonaF(nombre,edad,apllidos){
    this.nombre = nombre;
    this.edad = edad;
    this.apellidos = apllidos;
}
const pf = new PersonaF("Paco",18,"Perez")
console.log(pf);
