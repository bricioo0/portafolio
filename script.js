document.getElementById(contact).addEventListener("submit", function(event){
    event.preventDefault();
    let valid = true
    if (valid){
        alert("El formulario se ah enviado correctamente")}
    else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    }
)

document.querySelectorAll(".nav-link").forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAtribute("href")).scrollIntoView({
            behavior: "smooht"
        })
    })
})