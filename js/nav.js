


  // menu responsive


  const btnFiltro = document.getElementById("btnFiltro");
const linksNavjs = document.getElementById("linksNav");
const pantallaNegra = document.getElementById("pantallaNegra");
const closeMenuMobile = document.getElementById("closeMenuMobile")

  btnFiltro.addEventListener("click", ()=>{

    linksNavjs.classList.remove("quitar")

    linksNavjs.classList.toggle("d-none")
    
    pantallaNegra.classList.toggle("d-none")

  })


  pantallaNegra.addEventListener("click", (e)=>{
   
    linksNavjs.classList.add("quitar")
   
    pantallaNegra.classList.toggle("d-none")

      // Este código muestra un mensaje después de 3 segundos
      setTimeout(() => {
        linksNavjs.classList.toggle("d-none")
      }, 200);  // 3000ms = 3 segundos
      
      
  })

  
  closeMenuMobile.addEventListener("click", (e)=>{
   
    linksNavjs.classList.add("quitar")
   
    pantallaNegra.classList.toggle("d-none")

      // Este código muestra un mensaje después de 3 segundos
      setTimeout(() => {
        linksNavjs.classList.toggle("d-none")
      }, 200);  // 3000ms = 3 segundos
      
      
  })


 
//filter responsive


const btnFiltroResponsive = document.getElementById("btnFiltroResponsive");
const contenedorFiltros = document.querySelector(".contenedorFiltros");
const pantallaNegraProductos = document.getElementById("pantallaNegraProductos");

const closeMenuMobileFilter = document.getElementById("closeMenuMobileFilter")

btnFiltroResponsive.addEventListener("click", ()=>{

  contenedorFiltros.classList.remove("quitar")
  contenedorFiltros.classList.toggle("d-none")
  pantallaNegraProductos.classList.toggle("d-none")
})

pantallaNegraProductos.addEventListener("click",()=>{

  
  contenedorFiltros.classList.add("quitar")


    // Este código muestra un mensaje después de 3 segundos
    setTimeout(() => {
      contenedorFiltros.classList.toggle("d-none")
      pantallaNegraProductos.classList.toggle("d-none")
    }, 200);  // 3000ms = 3 segundos
    

 

})



closeMenuMobileFilter.addEventListener("click",()=>{

  
  contenedorFiltros.classList.add("quitar")


    // Este código muestra un mensaje después de 3 segundos
    setTimeout(() => {
      contenedorFiltros.classList.toggle("d-none")
      pantallaNegraProductos.classList.toggle("d-none")
    }, 200);  // 3000ms = 3 segundos
    

 

})


    
