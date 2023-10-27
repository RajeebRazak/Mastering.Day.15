var result = fetch("https://restcountries.com/v2/all");
result.then((data)=>data.json()).then((data1)=>{

var divcont = document.createElement("div");
divcont.setAttribute("class","container");

var divrow = document.createElement("div");
divrow.setAttribute("class","row");

for (let i=0; i< data1.length; i++) {      
    var div2 = document.createElement("div");
    div2.setAttribute("class","col-lg-4 col-sm-12")
    div2.innerHTML = `<div class="card" style="width: 18rem;">
        <h5 class="card-header text-center">${data1[i].name}</h5>
        <img src="${data1[i].flag}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="text-center">Capital: ${data1[i].capital}</h5>
          <h5 class="text-center">Region: ${data1[i].region}</h5>
          <h5 class="text-center">Country Code: ${data1[i].alpha3Code}</h5>
          <div class="text-center">
          
          <div id="weather"> <button type="button" onclick="showWeather(${data1[i].capital})"  >Click for weather</button></div>
          </div>
        </div>
       
    </div>`;
    divrow.append(div2);
}
divcont.append(divrow);
document.body.append(divcont);  });
 

const button = document.querySelector('weather');
if (button) {
  button.onclick = function() {
    async function showWeather(city,button) {
      const api= "d92faa58574fea41daa68ae5721d51bb";
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
 try {
     const response = await fetch(url);
     const data = await response.json();
     const weather = data.weather[0].main;
     const temperature = data.main.temp;
     document.getElementById(button).innerHTML = `The weather in ${city} is ${weather} and the temperature is ${temperature} degrees Celsius.`
   } catch (error) {
     console.error("Error fetching weather data: ", error);
     return null;
   }
}
  };
} else {
  console.error('Button element not found in DOM');
}


button.onclick=function(){showWeather(`${data1[i].capital}`,this.id)}