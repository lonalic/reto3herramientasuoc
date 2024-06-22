document.addEventListener('DOMContentLoaded', function () {
  // Definimos todos los campos del formulario
  const formulario = document.querySelector('.formulario');
  if (formulario === null) return;
  const nombre = formulario.querySelector('#nombre');
  const apellidos = formulario.querySelector('#apellidos');
  const titulo = formulario.querySelector('#titulo');
  const mensaje = formulario.querySelector('#mensaje');
  const mensajeEnviado = document.querySelector('.mensaje-enviado');
  const mensajeError = document.querySelector('.mensaje-error');

  // Función que llamamos desde el "form"
  window.validarFormulario = function (event) {
    event.preventDefault();

    if (!nombre.value) {
      nombre.classList.add('campo-invalido');
    } else {
      nombre.classList.remove('campo-invalido');
    }

    if (!apellidos.value) {
      apellidos.classList.add('campo-invalido');
    } else {
      apellidos.classList.remove('campo-invalido');
    }

    if (!titulo.value) {
      titulo.classList.add('campo-invalido');
    } else {
      titulo.classList.remove('campo-invalido');
    }

    if (!mensaje.value) {
      mensaje.classList.add('campo-invalido');
    } else {
      mensaje.classList.remove('campo-invalido');
    }

    // Comprobamos si se han completado los campos
    if (nombre.value && apellidos.value && titulo.value && mensaje.value) {
      // Mostramos el mensaje de exito
      mensajeEnviado.style.display = 'block';
      formulario.reset();
      // Limpiamos el mensaje después de 3 segundos
      setTimeout(function () {
        mensajeEnviado.style.display = 'none';
      }, 3000);
    } else {
      // Como hay al menos un campo sin completar, mostramos error
      mensajeError.style.display = 'block';
      // Limpiamos el mensaje después de 3 segundos
      setTimeout(function () {
        mensajeError.style.display = 'none';
      }, 3000);
    }
  };
});

import FaviconMarquee from 'favicon-marquee';

function generaFavicon() {
  const faviconMarquee = new FaviconMarquee({
    text: 'Web no oficial de la Oreja de Van Gogh',
    background: '#000',
    foreground: '#FFF',
    step: 4.5,
  });

  faviconMarquee.start();
}

import Lazyframe from 'lazyframe';

function iniciaLazyframe() {
  Lazyframe('main.presentacion .video');
}

window.onload = function () {
  iniciaLazyframe();
  generaFavicon();
};
