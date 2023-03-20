var canvas = document.getElementById("miCanvas");
console.log(canvas);
var contexto = canvas.getContext("2d");

// Dibujar un rectángulo rojo
contexto.fillStyle = "red";
contexto.fillRect(50, 50, 250, 100);

// Dibujar un círculo verde
contexto.beginPath();
contexto.arc(250, 250, 50, 0, 2 * Math.PI);
contexto.fillStyle = "green";
contexto.fill();

