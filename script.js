// Selezione dei elementi
const foto = document.getElementById("immagine")

const foto2 = document.getElementById("immagine2")

const button = document.getElementById("pulsante")

// gestione dell'evento
button.addEventListener("click" ,
    function () {

    // COMPITO DI BASE
        // foto.classList.add("close");
        // foto2.classList.remove("close")
        // button.innerHTML = "Accendi"

    // BONUS
        // cambio foto, scritta e colore quando avviene il "click"
        if(button.innerHTML === "Accendi"){
            button.innerHTML = "Spegni" 
            // foto.classList.add("close");
            // foto2.classList.remove("close")
            // button.style.backgroundColor = "red"
        }else{
            button.innerHTML = "Accendi"
            // foto.classList.remove("close");
            // foto2.classList.add("close")
            // button.style.backgroundColor = "greenyellow"
        }
        foto.classList.toggle("close")
        foto2.classList.toggle("active")
        button.classList.toggle("color")
    }
);