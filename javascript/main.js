const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const flechas = document.querySelectorAll('.flecha')

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    

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
    navMenu.classList.remove("active");
    
}))

