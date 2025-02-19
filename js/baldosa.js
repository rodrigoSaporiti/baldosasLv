
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
  enlaceImagen.href = `mosaicos/${mosaico.img}`
  contenedorSegundaImagen.src = `mosaicos2/${mosaico.sku}.jpg`
  enlaceImagen2.href = `mosaicos2/${mosaico.sku}.jpg`
  tamano.textContent = `${mosaico.tamaño}`
  unidadesMetro.textContent = `${mosaico.metro}`
  peso.textContent = `${mosaico.peso}`


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
        <img src="imagenesMosaico/${element.img}">
        </a>
        `;
    });




  }