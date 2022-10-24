function ready(fn){
    if(document.readyState ==="complete" || document.readyState === "interactive"){
        setTimeout(fn,1)

    }
    else{
        document.addEventListener('DOMContentLoaded', fn)
    }
}

ready(function(){
    let deskBooth = document.querySelector('#desk-booth')
    let luzonBooth = document.querySelector('#Luzon-booth')
    let visayasBooth = document.querySelector('#Visayas-booth')
    let mindanaoBooth = document.querySelector('#Mindanao-booth')

    deskBooth.addEventListener('click', function(){
        window.location.href = "../Pages/InformationDesk.html"
    })

    luzonBooth.addEventListener('click', function(){
        window.location.href = "../Pages/LuzonBooth.html"
    })

    visayasBooth.addEventListener('click', function(){
        window.location.href = "../Pages/VisayasBooth.html"
    })

    mindanaoBooth.addEventListener('click', function(){
        window.location.href = "../Pages/MindanaoBooth.html"
    })
})