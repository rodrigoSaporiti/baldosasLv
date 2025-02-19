
let lisasData = []; // Variable global para almacenar los datos

// Cargar los datos desde el archivo JSON
fetch('./json/lisas.json')
  .then(response => response.json())
  .then(data => {
    lisasData = data; // Guardar los datos en la variable global
    console.log('Datos cargados:', lisasData);

    // Llamar a la función para renderizar las tarjetas
    renderizarMosaicos(lisasData);
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });

const contenedorColores = document.getElementById("contenedorColores");

// Función para renderizar las tarjetas en el contenedor
function renderizarMosaicos(data) {
  data.forEach((element, index) => {
    contenedorColores.innerHTML += `
    
    <a href="lisa.html?id=${element.id}"> 
   <img src="lisasBaldosas/${element.img}" alt="">
     </a>
    `;
  });
}





// Cargar los datos desde el archivo JSON
fetch('./json/escalones.json')
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
const textTamano = document.querySelector("#tamano")



// Función para renderizar las tarjetas en el contenedor
function traerDataLisas(data) {

 const mosaico =  data.find(e=> e.id == productId);

 console.log(mosaico.id);
 console.log(mosaico.tamaño)

 textTamano.textContent = `${mosaico.tamaño}`;

 textSKU.forEach(element => { element.textContent = `${mosaico.titulo}`;
 });



  let classCImagenP = document.querySelector(".contenedorImagenPrincipal")


  classCImagenP.innerHTML=`
  
   <a href="escalones/${mosaico.img}" id="enlaceImagen" data-fancybox="gallery" class="m-0 p-0">
    <img id="contenedorImagenPrincipal" src="escalones/${mosaico.img}" alt="">
  </a>
  
  `
 

}




