const persona = {
    nombre : "Mario",
    edad: 30,
    altura: 1.80,
    pelo:"Negro",
    direccion: {
            calle: "Lorca",
            numero: 20,
            cp: 25815
    },
    peso:85,
    imc: function(){
            return this.peso/(Math.pow(this.altura,2));
    }
}



console.log(persona.direccion.calle);

console.log(persona.imc());

