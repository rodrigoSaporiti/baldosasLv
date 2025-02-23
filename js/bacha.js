


let lisasData = []; // Variable global para almacenar los datos

// Cargar los datos desde el archivo JSON
fetch('./json/coloresBachas.json')
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
    
   
   <img class="coloresBachas" src="coloresBachas/${element.img}" alt="Colores para Bacha">
    
    `;
  });
}





// Cargar los datos desde el archivo JSON
fetch('./json/bachas.json')
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
  
   <a href="bachas/${mosaico.img}" id="enlaceImagen" data-fancybox="gallery" class="m-0 p-0">
    <img id="contenedorImagenPrincipal" src="bachas/${mosaico.img}" alt="Bacha ${mosaico.titulo}">
  </a>
  
  `

  
 
}








let imagenesMosaico =[];

// Cargar los datos desde el archivo JSON
fetch('./json/imagenesBachas.json')
  .then(response => response.json())
  .then(data => {
    imagenesMosaico = data; // Guardar los datos en la variable global
    console.log('Datos cargados:', imagenesMosaico);

    traerImagenes(imagenesMosaico);

  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });


  const contenedorMasImagenes = document.getElementById("contenedorMasImagenes")


  function traerImagenes(data) {

    let filtroImagenes = data.filter(e => e.sku == productId);
    console.log(filtroImagenes);

    contenedorMasImagenes.innerHTML = ''; // Limpiar contenido anterior, si es necesario
    filtroImagenes.forEach(element => {
        contenedorMasImagenes.innerHTML += `
        <a href="imagenesBachas/${element.img}" id="enlaceImagen2" data-fancybox="gallery">
        <img src="imagenesBachas/${element.img}">
        </a>
        `;
    });




  }