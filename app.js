(function () {
    let amigos = [];
    const inpAmigo = document.querySelector('#amigo');
    const ulListado = document.querySelector('#listaAmigos');
    const ulResultado = document.querySelector('#resultado');
    
    document.querySelector('.button-add').addEventListener('click', function (e) {
        const validacion = validarEntradas();
    
        if (!validacion) return;
    
        limpiarListados(ulResultado);
    
        amigos.push(validacion.nombreAmigo);
    
        anadirNombreEnListado(ulListado, validacion.nombreAmigo);
            
        limpiarValorInput();
    });
    
    document.querySelector('.button-draw').addEventListener('click', function (e) {
        const validacion = validarAmigos();
    
        if (!validacion) return;
    
        const aleatorio = Math.floor(Math.random() * amigos.length);
        const elegido = amigos[aleatorio];
        
        limpiarValorInput();
        limpiarListados(ulListado);
        limpiarAmigos();
        
        anadirNombreEnListado(ulResultado, elegido);
    });
    
    function limpiarAmigos() {
        amigos = [];
    }
    
    function limpiarValorInput() {
        inpAmigo.value = null;
    }
    
    function limpiarListados(contenedor) {
        contenedor.innerHTML = '';
    }
    
    function anadirNombreEnListado(contenedor, nombre) {
        const p = document.createElement('p');
    
        p.textContent = nombre;
    
        contenedor.appendChild(p);
    }
    
    function validarEntradas() {
        const valores = {
            nombreAmigo : inpAmigo.value.trim()
        };
    
        if (!valores.nombreAmigo) return alert('Ingrese un nombre'); 
    
        if (amigos.includes(valores.nombreAmigo)) return alert('Ingrese un nombre diferente'); 
    
        return valores;
    }
    
    function validarAmigos() {
    
        if (!amigos.length) return alert('No ha ingresado ningún nombre'); 
    
        return true;
    }
})();