// Aquí tu código
const agregarBoton = document.getElementById ("agregar");
const list = document.getElementById ("lista");

agregarBoton.addEventListener("click", function() {
    const element = prompt ("Agregar elemento:");
    
    
    if(element !== null && element !== "") {
 
        const nuevoElemento = document.createElement("li");
 
        nuevoElemento.textContent = element;
    
        list.appendChild( nuevoElemento);}
 
        else {
 
     
         alert ("No agregaste nada a la lista");
     } 
    });
 