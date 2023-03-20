const input_numero = document.getElementById('input_numero')
const btn_enviar = document.getElementById('btn_enviar')
const btn_color = document.getElementById('btn_color')
const formulario = document.getElementById('form')




formulario.addEventListener('submit',(e)=>{

    let cuadrados = document.getElementsByClassName('cuadrado');
    //Buscamos los cuadrados creados, y los eliminamos
    /*
    if(cuadrados.length>0){
        cuadrados.forEach(element => {
            element.remove()
        });
    }
    */

        //Validamos la entrada del usuario
      if(input_numero.value =="" || input_numero.value ==undefined || input_numero.value<1 || input_numero.value>50){
        alert("El numero no es válido")
        return;
      }
        e.preventDefault()
        for (i=0;i<input_numero.value;i++){
            let pix = Math.floor(Math.random()*51)+10
            const cuadrado = document.createElement("div");
            cuadrado.style.height=pix+"px";
            cuadrado.style.width=pix+"px";
            cuadrado.style.position="relative";
            cuadrado.classList.add("cuadrado");
            let top = Math.floor(Math.random()*501)
            let left = Math.floor(Math.random()*601)
            cuadrado.style.position="relative";
            cuadrado.style.top=top+"px";
            cuadrado.style.left=left+"px";
            cuadrado.innerText=i;
            cuadrado.style.textAlign="center";
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            cuadrado.style.backgroundColor= `rgb(${r} ${g} ${b})`
            document.body.appendChild(cuadrado);
        }
        
    })




document.body.addEventListener('click',(e)=>{
        console.log(e);
})

btn_color.addEventListener('click',()=>{
    
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    document.body.style.backgroundColor= `rgb(${r} ${g} ${b})`
})
