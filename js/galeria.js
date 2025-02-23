
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

    data.reverse().forEach(element => {

        cardImg.innerHTML+= `
        
        
      <div class="cardImg">
    <a href="${seccion}/${element.nombre}" data-fancybox="galeria">
        <img src="${seccion}/${element.nombre}" alt="Baldosas calcáreas en ${seccion}">
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



Fancybox.bind('[data-fancybox="galeria"]', {
    infinite: true,  
    loop: true,      
    zoom: {
        maxScale: 5  // Aumenta el nivel máximo de zoom (por defecto es 3)
    },
    wheel: "zoom",  // Permite hacer zoom con la rueda del mouse
    click: "zoom",  // Permite hacer zoom con un clic
    Toolbar: {
        display: ["zoom", "close"] // Asegura que el botón de zoom esté visible
    }
});
