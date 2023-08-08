let div = document.querySelector(".el_div")
let buttonAlert = document.getElementById("boton");

div.addEventListener("click", e => {
    if(e.target.classList.contains("el_div")) {
        alert('Hola! Soy el div')
    } else {
        alert('Hola')
    }
});
