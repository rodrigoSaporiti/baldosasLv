
  
const cardImg = document.getElementById("cardImg");

const url = window.location.pathname;
const urlSplit = url.split(/[./]/);
console.log(urlSplit)

const seccion = urlSplit[1];

console.log(seccion)

const inputs = document.querySelectorAll('input[name="talla"]');


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