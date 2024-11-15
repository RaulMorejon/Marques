//////Agrandar Imagenes
function mostrarImagenGrande(imgPeque) {
    const imgGrande = document.querySelector('.grande');
        imgGrande.innerHTML = '';
    const nueva = imgPeque.cloneNode();
        nueva.style.width = '600px';    
        nueva.style.height = 'auto';    
        imgGrande.appendChild(nueva);
}
function ocultarImagenGrande() {
    const imgGrande = document.querySelector('.grande');
        imgGrande.innerHTML = '';
}



//////Resaltar y ocultar Parrafos 
function resaltarParafo() {
    const parrafo = document.querySelector('.texto-resaltado');
        parrafo.style.backgroundColor = '#ffffff'; 
    const p = document.querySelector('.texto-resaltado p');
        p.style.color = 'black'; 
        p.style.fontWeight = 'bold';
    const parrafoOculto = document.querySelector('.oculto');
        parrafoOculto.removeAttribute('hidden');
}
function restaurarParafo() { 
    const parrafo = document.querySelector('.texto-resaltado');
        parrafo.style.backgroundColor = '';
    const p = document.querySelector('.texto-resaltado p');
        p.style.color = ''; 
        p.style.fontWeight = '';
    const parrafoOculto = document.querySelector('.oculto');
        parrafoOculto.setAttribute('hidden', true);
}


////////Reloj 
const relog = document.getElementById('relog');
let tempsInici = Date.now();

function formatoTiempo(unidad) { //Si el numero es menos de 10 ponemos un 0 delante, sino no
    return unidad < 10 ? '0' + unidad : unidad;
}
function actualitzarReloj() {
    const tempsActual = Date.now();
    const tempsTranscorregut = tempsActual - tempsInici;
    const horas = Math.floor(tempsTranscorregut / (1000 * 60 * 60));
    const minutos = Math.floor((tempsTranscorregut % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempsTranscorregut % (1000 * 60)) / 1000);
    relog.textContent = `${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`;
}
setInterval(actualitzarReloj, 1000);


////////Contraseña
function validarContra() {
    
    const pass1 = document.getElementById('pass1').value;
    const pass2 = document.getElementById('pass2').value;

    if (pass1.length < 8 || pass2.length < 8) {
        alert('Les contrasenyes deben tener al menos 8 caracters');
    } 
    else if (pass1 === pass2) {//extrictamente iguales
        alert('Contraseña cambiada correctamente');
    } else {
        alert('Las contraseñas no coinciden');
    }
    //borrar
    document.getElementById('pass1').value = '';
    document.getElementById('pass2').value = '';
}
