
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