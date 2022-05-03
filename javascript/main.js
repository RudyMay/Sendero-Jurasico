const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelectorAll(".nav-menu");
const flechas = document.querySelectorAll('.flecha');

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    for(let nav of navMenu){
        nav.classList.toggle("active");
    }
    
    

    if(hamburger.classList.contains("active")){
        flechas.forEach(element => {
            element.classList.remove("bounce2")
        });
       
    }else{
       flechas.forEach(element => {
           element.classList.add("bounce2")
       });
        
    }
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    for (let nav of navMenu){
        nav.classList.remove("active");
    }
   
    
}))

if(window.innerHeight<=680){
    console.log('menor');
    const imagenes=document.querySelectorAll('.imgCap');
    document.querySelector('#Intro div p').style="font-size:14px";
    document.querySelector('#Intro div h2').style="font-size:20px";
   const seccionesh2= document.querySelectorAll('section div h2')
    const seccionesspan= document.querySelectorAll('section div h2 span')
    const seccionesh3 =document.querySelectorAll('section div h3')
    const seccionesp = document.querySelectorAll('section div p')
   const botones= document.querySelectorAll('.playbtn')
    
   for(let sect4 of seccionesspan){
        sect4.style.fontSize= "30px";
    }

    for(let sect of seccionesh2 ){
        sect.style.fontSize="20px";
    }
    
    for(let sect2 of seccionesh3){
        sect2.style.fontSize= "16px";
    }
    
    for(sect3 of seccionesp){
        sect3.style.fontSize="12px";
    }

   for(let boton of botones){
       boton.style.width="30px";
   }
   for(img of imagenes){
       img.style.width="40%"
   }
}