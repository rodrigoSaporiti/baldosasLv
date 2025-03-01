let mosaicosData = []; // Variable global para almacenar los datos

// Cargar los datos desde el archivo JSON
fetch('json/selladores_limpiadores.json')
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

const contenedorCards = document.querySelector(".contenedorCards");

// Función para renderizar las tarjetas en el contenedor
function renderizarMosaicos(data) {
  data.forEach((element, index) => {
    contenedorCards.innerHTML += `
    
      <div dat class="cardProductos">
      <a class="m-0 p-0 text-black text-decoration-none" href="sellador_limpiador.html?id=${element.id}">

      <img src="secciones/selladores/${element.img}" alt="${element.titulo}">
        <div class="detalleCardProductos">
          <p>${element.titulo}</p>
          <p>${element.tamaño}</p>
        </div>
          <p class="w-100 bg-dark text-white text-center">Ver más..</p>
     </a>
      </div>
     
    `;
  });
}




