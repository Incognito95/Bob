const range = document.querySelector("#range")
const turnImg = document.querySelector("#turn-img")

range.addEventListener("input", function(){

       //ændrer hvis den er over 9 hvis den er under 9 skal der være et ekstra 0
    console.log(this.value)
    let extraDigit = "0"
    if (this.value > 9){
        extraDigit = ""
    }
    else{
        extraDigit = "0"
    }
    turnImg.setAttribute("src", "images/Lego_turntable/Legomand00" + extraDigit + this.value + ".jpg")
    //feks lego-0001.jpg hvis valuen er 1 på slideren 
})