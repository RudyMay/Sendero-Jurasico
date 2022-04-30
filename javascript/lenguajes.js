
const Lenges= document.querySelector('#language-toggle')

Lenges.addEventListener("click", ()=>{
   
    if(Lenges.checked==false){
        
        console.log("mx")
        const esp= document.querySelectorAll('.esp')
        console.log(esp)
        for(let espanish of esp){
            espanish.style.display="block"
        }
        
        
        const eng = document.querySelectorAll('.eng')
        console.log(eng)
        for(let english of eng){
            english.style.display="none"
        }

    }

    if(Lenges.checked==true){
        console.log("usa")
        const esp= document.querySelectorAll('.esp')
        console.log(esp)
        for(let espanish of esp){
            espanish.style.display="none"
        }
        
        
        const eng = document.querySelectorAll('.eng')
        console.log(eng)
        for(let english of eng){
            english.style.display="block"
        }


    }



})

    
    
