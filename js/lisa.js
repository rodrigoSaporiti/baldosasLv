
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

  const contenedorImagenPrincipal = document.querySelector(".contenedorImagenPrincipal");

  contenedorImagenPrincipal.innerHTML = `

   <a href="lisasBaldosas/${mosaico.img}" id="enlaceImagen" data-fancybox="gallery" class="m-0 p-0">
    <img id="contenedorImagenPrincipal" src="lisasBaldosas/${mosaico.img}" alt="Baldosa calcarea lisa color ${mosaico.titulo}">
  </a>

  
  `

  const enlaceTamanosLisas = document.getElementById("enlaceTamanosLisas");

  enlaceTamanosLisas.href = `tamanosLisas/${mosaico.id}.png`;

  const tamanoLisas = document.getElementById('tamanoLisas'); 
  tamanoLisas.src = `tamanosLisas/${mosaico.id}.png`;



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
