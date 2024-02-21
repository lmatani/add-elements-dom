 // Aquí tu código

 const btnAgregar = document.getElementById('agregar');
 let elementoLista = document.createElement('li');
 let lista = document.getElementById('lista');

 btnAgregar.addEventListener('click', function(){
    let elementoLista= document.createElement('li');
    elementoLista.textContent = prompt('Introduce un elemento a la lista:');
    lista.appendChild(elementoLista);
 });

 const btnBorrar = document.getElementById('borrar_lista');
 btnBorrar.addEventListener('click', function(){
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
 });

 const btnBorrarElem = document.getElementById('borrar_elemento');
 btnBorrarElem.addEventListener('click', function(){
    lista.removeChild(lista.lastChild);
 });



