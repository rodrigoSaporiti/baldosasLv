const contenedorPrincipal = document.getElementById("contenedorPrincipal");




let lisasData = []; // Variable global para almacenar los datos

// Cargar los datos desde el archivo JSON
fetch('./json/lisas.json')
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