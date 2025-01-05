


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


