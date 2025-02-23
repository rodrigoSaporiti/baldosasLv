
// Cargar los datos desde el archivo JSON
fetch('./json/piscina.json')
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



// Función para renderizar las tarjetas en el contenedor
function traerDataLisas(data) {

 const mosaico =  data.find(e=> e.id == productId);

 console.log(mosaico.id)


 textSKU.forEach(element => { element.textContent = `${mosaico.titulo}`;
 });

  
  let classCImagenP = document.querySelector(".contenedorImagenPrincipal")


  classCImagenP.innerHTML=`
  
   <a href="piscina/${mosaico.img}" id="enlaceImagen" data-fancybox="gallery" class="m-0 p-0">
    <img id="contenedorImagenPrincipal" src="piscina/${mosaico.img}" alt="Baldosa de piscina">
  </a>
  
  `
 
  

}




