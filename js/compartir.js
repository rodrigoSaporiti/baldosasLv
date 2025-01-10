// Verificar si la Web Share API está soportada
if (navigator.share) {
    // Crear una función para compartir
    const shareContent = () => {
      navigator.share({
        title: 'Título del contenido',
        text: 'Este es un ejemplo de contenido que puedes compartir.',
        url: window.location.href,  // URL de la página actual
      })
      .then(() => {
        console.log('Contenido compartido exitosamente');
      })
      .catch((error) => {
        console.error('Error al compartir:', error);
      });
    };
  
    // Crear un botón para activar el compartir
    const botonCompartir = document.getElementById("botonCompartir")
    botonCompartir.addEventListener('click', shareContent);
  
    // Añadir el botón a la página
    document.body.appendChild(shareButton);
  } else {
    console.log('Web Share API no es soportada en este navegador.');
  }
  