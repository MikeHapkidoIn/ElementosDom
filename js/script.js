// Aquí tu código
const addButton = document.getElementById("agregar");
const lista = document.getElementById("lista");

addButton.addEventListener("click", function() {
    const element = prompt ("Agregar elemento:");
    
    
    if (element !== null && element !== "") {
 
        const nuevoElemento = document.createElement("li");
 
        nuevoElemento.textContent = element;
    
        lista.appendChild( nuevoElemento);}
 
        else {
 
     
         alert ("No agregaste nada a la lista");
     } 
    });
 