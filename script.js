const foto = document.getElementById("immagine")

const foto2 = document.getElementById("immagine2")

const button = document.getElementById("pulsante")

button.addEventListener("click" ,
    function () {

    // COMPITO DI BASE
        // foto.classList.add("close");
        // foto2.classList.remove("close")
        // button.innerHTML = "Accendi"

    // BONUS
        if(button.innerHTML === "Accendi"){
            button.innerHTML = "Spegni" 
            foto.classList.add("close");
            foto2.classList.remove("close")
        }else{
            button.innerHTML = "Accendi"
            foto.classList.remove("close");
            foto2.classList.add("close")
        }

    }
);