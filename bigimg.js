const imgLinks = document.querySelectorAll(".gallery-link")
const destination = document.querySelector("#gallery-link-big")
const billedetekst = document.querySelector("#billede-tekst")

imgLinks.forEach(function(element){
    element.addEventListener("click", function(e){
        e.preventDefault()
        destination.setAttribute("src",element.href)
        let billedehtml = element.querySelector(".hemmelig")
        billedetekst.innerHTML = billedehtml.innerHTML
    })


})





