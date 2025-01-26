
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
fetch('./json/vereda.json')
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

  contenedorImagenPrincipal.src = `vereda/${mosaico.img}`



  
  const contenedorPrincipal = document.getElementById("contenedorPrincipal");
  const todasLasImagenes = contenedorPrincipal.querySelectorAll("img");
  console.log(todasLasImagenes)
  
  
  
  todasLasImagenes.forEach(element => {
      
     element.addEventListener("click",(e)=>{
  
     let srcCompleto = e.target.src;
   
  
     console.log(srcCompleto)
     imagenGrande.src = `${srcCompleto}`
     imagenEnGrande.classList.toggle("d-none")
     
     })
  
     
  
  
  });
  
  
  const imagenGrande = document.getElementById("imagenGrande");
  const imagenEnGrande = document.getElementById("imagenEnGrande");
  
  
  // cierre del close 
  
  const closeImagenGrande = document.getElementById("closeImagenGrande");
  
  closeImagenGrande.addEventListener("click",()=>{
  
      imagenEnGrande.classList.toggle("d-none")
  
  
  })
  

}




