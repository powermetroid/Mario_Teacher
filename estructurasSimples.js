var b=18;
var tienesCarnet = false;

//Estructura selectiva simple
if(b>=18 && tienesCarnet==true){
    console.log("Puedes Conducir");
}else{
    console.log("Todavía eres menor de edad o no tienes carnet");
}

var notaMedia = true;
if(notaMedia<5){
    console.log("Suspenso");
}else if(notaMedia>=5 && notaMedia<=8){
    console.log("Notable");
}else if(notaMedia>8){
    console.log("Sobresaliente");
}

//Estructura selectiva multiple
switch (notaMedia){
    case 1:
        console.log("suspenso");
        break;
    case 2:
        console.log("suspenso");
        break;
    case 5: 
        console.log("Aprboado");
        break;
    case 10:
        console.log("tienes matricula de honor");
        break;
    default:
        console.log("Valor invalido");
}

