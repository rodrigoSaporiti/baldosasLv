
// Cargar los datos desde el archivo JSON
fetch('./json/lisas.json')
  .then(response => response.json())
  .then(data => {
   

   
    traerDataLisas(data)
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });







// Recuperar el id del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const textSKU = document.querySelectorAll("#textSKU")
const tamanoLisas = document.getElementById("tamanoLisas")



// Función para renderizar las tarjetas en el contenedor
function traerDataLisas(data) {

  // Buscar el mosaico basado en un ID (debe ser definido en algún lugar)
  const mosaico = data.find(e => e.id == productId); // Asegúrate de que 'productId' esté definido

  console.log(mosaico.id);
  console.log(mosaico.img);

  // Asegúrate de que el array textSKU esté definido
  textSKU.forEach(element => { 
      element.textContent = `${mosaico.titulo}`;
  });

  // Actualizar la imagen principal (de vista previa)
  const contenedorImagenPrincipal = document.getElementById('contenedorImagenPrincipal');
  contenedorImagenPrincipal.src = `lisasBaldosas/${mosaico.img}`;

  // Actualizar la imagen para el enlace Fancybox (imagen grande)
  const enlaceImagen = document.getElementById('enlaceImagen');
  enlaceImagen.href = `lisasBaldosas/${mosaico.img}`; // Ruta a la imagen grande

  // Si tienes un enlace para el tamaño, también lo puedes hacer con el siguiente código
  const tamanoLisas = document.getElementById('tamanoLisas'); 
  tamanoLisas.src = `tamanosLisas/${mosaico.id}.png`;

  // Asegurarse de que Fancybox funcione correctamente
  Fancybox.bind("[data-fancybox]", {
      // Aquí puedes incluir opciones personalizadas si las necesitas
  });
}





Fancybox.bind('[data-fancybox="galeria"]', {
  infinite: true,  
  loop: true,      
  zoom: {
      maxScale: 5  // Aumenta el nivel máximo de zoom (por defecto es 3)
  },
  wheel: "zoom",  // Permite hacer zoom con la rueda del mouse
  click: "zoom",  // Permite hacer zoom con un clic
  Toolbar: {
      display: ["zoom", "close"] // Asegura que el botón de zoom esté visible
  }
});
