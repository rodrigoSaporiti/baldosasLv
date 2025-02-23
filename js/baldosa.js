
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
   <img src="lisasBaldosas/${element.img}" alt="Baldosa mosaico lisas">
     </a>
    `;
  });
}






// Recuperar el id del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const contenedorImagenPrincipal = document.getElementById("contenedorImagenPrincipal")
const enlaceImagen = document.getElementById("enlaceImagen")
const contenedorSegundaImagen = document.getElementById("contenedorSegundaImagen");
const enlaceImagen2 = document.getElementById("enlaceImagen2")
const textSKU = document.querySelectorAll("#textSKU")
const tamano = document.getElementById("tamano");
const unidadesMetro = document.getElementById("unidadesMetro");
const peso = document.getElementById("peso")

console.log(productId)

const masBaldosas = document.getElementById("masBaldosas");



// Cargar los datos desde el archivo JSON
fetch('./json/mosaicosjson.json')
  .then(response => response.json())
  .then(data => {
    mosaicosData = data; // Guardar los datos en la variable global
    console.log('Datos cargados:', mosaicosData);

    traerDataMosaico(mosaicosData)
   
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });


// Función para renderizar las tarjetas en el contenedor
function traerDataMosaico(data) {

 const mosaico =  data.find(e=> e.sku == productId);


 textSKU.forEach(element => { element.textContent = `${mosaico.sku}`;});

  contenedorImagenPrincipal.src = `mosaicos/${mosaico.img}`
  contenedorImagenPrincipal.alt = "Baldosa mosaico calcárea"
  enlaceImagen.href = `mosaicos/${mosaico.img}`
  contenedorSegundaImagen.src = `mosaicos2/${mosaico.sku}.jpg`
  contenedorSegundaImagen.alt = "Baldosa mosaico calcárea"
  enlaceImagen2.href = `mosaicos2/${mosaico.sku}.jpg`
  tamano.textContent = `${mosaico.tamaño}`
  unidadesMetro.textContent = `${mosaico.metro}`
  peso.textContent = `${mosaico.peso}`



  const mosaico1 = data.find(e => e.sku == parseInt(productId) + 1) || data.find(e => e.sku == "067")
  const mosaico2 = data.find(e => e.sku == parseInt(productId) + 2) || data.find(e => e.sku == "006")
  const mosaico3 = data.find(e => e.sku == parseInt(productId) + 3) || data.find(e => e.sku == "005")

  console.log(mosaico3)


 masBaldosas.innerHTML = `

<p>También te puede interesar:</p>
   
 <div class="masBaldosas"">
      <div dat class="cardInteresantes">
      <a class="m-0 p-0 text-black text-decoration-none" href="baldosa.html?id=${mosaico1.sku}">
        <img lazy="loading" src="mosaicos/${mosaico1.img}" alt="Baldosa mosaico calcárea">
        <div class="detalleCardProductos">
          <p>SKU ${mosaico1.sku}</p>
          <p>${mosaico1.tamaño}</p>
        </div>
        <p class="w-100 bg-dark text-white text-center">Ver más..</p>
     </a>
      </div>
     
   <div dat class="cardInteresantes">
      <a class="m-0 p-0 text-black text-decoration-none" href="baldosa.html?id=${mosaico2.sku}">
        <img lazy="loading" src="mosaicos/${mosaico2.img}" alt="Baldosa mosaico calcárea">
        <div class="detalleCardProductos">
          <p>SKU ${mosaico2.sku}</p>
          <p>${mosaico2.tamaño}</p>
        </div>
        <p class="w-100 bg-dark text-white text-center">Ver más..</p>
     </a>
      </div>


         <div dat class="cardInteresantes">
      <a class="m-0 p-0 text-black text-decoration-none" href="baldosa.html?id=${mosaico3.sku}">
        <img lazy="loading" src="mosaicos/${mosaico3.img}" alt="Baldosa mosaico calcárea">
        <div class="detalleCardProductos">
          <p>SKU ${mosaico3.sku}</p>
          <p>${mosaico3.tamaño}</p>
        </div>
        <p class="w-100 bg-dark text-white text-center">Ver más..</p>
     </a>
      </div>
 
 </div>
 `


}


let imagenesMosaico =[];

// Cargar los datos desde el archivo JSON
fetch('./json/imagenesMosaico.json')
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
        <a href="imagenesMosaico/${element.img}" id="enlaceImagen2" data-fancybox="gallery">
        <img src="imagenesMosaico/${element.img}" alt="Baldosa mosaico calcárea">
        </a>
        `;
    });




  }



  

const agregarWsp = document.getElementById("agregarWsp");
const currentUrl = window.location.href;

agregarWsp.innerHTML += `

<a class="m-0 p-0" href="https://wa.me/59892212234?text=Quiero%20más%20información%20sobre%20el%20producto%20${encodeURIComponent(currentUrl)}"
          target="_blank">
          <button class="btn btn-success text-uppercase"> <svg class="me-1" xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path
                d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>Quiero saber más</button>
        </a>

   <button id="botonCompartir" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
            <path
              d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
          </svg></button>

`