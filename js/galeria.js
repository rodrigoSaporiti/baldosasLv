
const cardImg = document.getElementById("cardImg");

const url = window.location.pathname;
const urlSplit = url.split(/[./]/);
console.log(urlSplit)

const seccion = urlSplit[urlSplit.length-2];

console.log(seccion)

const pagHome = document.getElementById("pagHome");

pagHome.textContent= seccion

let banos = []

// Cargar los datos desde el archivo JSON
fetch(`json/${seccion}.json`)
  .then(response => response.json())
  .then(data => {
    console.log('Datos cargados:', data);
     banos = data
   mostrarImagenes(data);

   flechaDer(data);
   flechaIzq(data);
  

  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });



  function mostrarImagenes(data){

    data.forEach(element => {

        cardImg.innerHTML+= `
        
        
      <div class="cardImg">
    <a href="${seccion}/${element.nombre}" data-fancybox="galeria">
        <img src="${seccion}/${element.nombre}" alt="">
    </a>
</div>


        
        `

    


        
    });
  }





  
const inputs = document.querySelectorAll('input[name="galerias"]');


inputs.forEach(element => {
  
  if(element.id ===seccion){

    element.checked = true;
  }

 

  element.addEventListener("click",()=>{
    let inputSeccion = element.value
    window.location.href = `${inputSeccion}.html`
  })

  element.addEventListener("contextmenu",(e)=>{

    alert("clickDErecho")

  })


});



 // Iniciar Fancybox para las imágenes con el atributo data-fancybox="galeria"
 Fancybox.bind('[data-fancybox="galeria"]', {
  // Aquí puedes agregar configuraciones personalizadas, si lo deseas
  infinite: true,  // Hacer que la galería sea cíclica (pasar de la última a la primera imagen)
  loop: true,      // Hacer que el lightbox se repita de nuevo al llegar al final
  // Otros parámetros según lo que necesites
});