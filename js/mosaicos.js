let mosaicosData = []; // Variable global para almacenar los datos

// Cargar los datos desde el archivo JSON
fetch('json/mosaicosjson.json')
  .then(response => response.json())
  .then(data => {
    mosaicosData = data; // Guardar los datos en la variable global
    console.log('Datos cargados:', mosaicosData);

    // Llamar a la función para renderizar las tarjetas
    renderizarMosaicos(mosaicosData);
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });

const contenedorCards = document.getElementById("contenedorCards");

// Función para renderizar las tarjetas en el contenedor
function renderizarMosaicos(data) {
  data.forEach((element, index) => {
    contenedorCards.innerHTML += `
    
      <div dat class="cardProductos">
      <a class="m-0 p-0 text-black text-decoration-none" href="baldosa.html?id=${element.sku}">
        <img lazy="loading" src="mosaicos/${element.img}" alt="">
        <div class="detalleCardProductos">
          <p>SKU ${element.sku}</p>
          <p>${element.tamaño}</p>
        </div>
     </a>
      </div>
     
    `;
  });
}




