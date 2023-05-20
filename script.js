const apiKey = "c661314910f656184b12f2edfca7477c";
const submit =document.querySelector(".submit")
const main = document.querySelector(".container")


submit.addEventListener("click", (e)=>{
    e.preventDefault()
    createValue(texto.value);
    removeElement(main)
})
//este fech hace que nos de una direccion o ubicacion geografica, la cual pasaremios a la seguanda llamada de api


function createValue(id){
    const city =`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apiKey}`
    fetch(city)
    .then(response =>response.json())
    .then(dato  =>{ 
        console.log(dato)
        createApp(dato)
        
    })
}

function createApp(data){
    let lon = data.coord.lon;
    let lat =data.coord.lat;
    let temp_min = data.main.temp;
    
    let html = document.createElement("h1")
    let htmlLon = document.createElement("h1")
    let tempMin = document.createElement("h1")
    
    let tempMinC = temp_min -273.15
    
    
    
    tempMin.textContent = `la temperatura es de: ${Math.round(tempMinC)} grados `
    html.textContent = `la latitud es de: ${lat} grados `
    htmlLon.textContent = `la longitud es de: ${lon} grados `
    main.append(tempMin)    
    main.append(html)
    main.append(htmlLon)
  

}
function convertirGrados(grados) {
    var gradosCelsius = grados - 273.15 
    return gradosCelsius;
}
  
 
function removeElement(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
//console.log(convertirGrados())