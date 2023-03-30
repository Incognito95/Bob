const modalLinks = document.querySelectorAll(".modal-link")
const modalOuter = document.querySelector(".modal-outer")
const modalInner = document.querySelector(".modal-inner")

modalLinks.forEach( function(element){
    
    element.addEventListener("click", function(e){
        e.preventDefault()
        let id = element.getAttribute("href");
        let target = document.querySelector(id)
        modalInner.innerHTML = target.innerHTML
        modalOuter.style.display = "flex"

    } )

})

modalOuter.addEventListener("click", function(e){
    e.stopPropagation()
    modalInner.innerHTML = ""
    this.style.display = "none"
}) 