
let key = "004d5c793063a80f879856ee864d76a8";
let iframe = document.getElementById("gmap_canvas");
let container = document.getElementById("weather");
let cont = document.getElementById("forecast")


async function getWeather(){

   try {
    let city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city!")
    }

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    let data = await res.json();

    
    lat = data.coord.lat;
    lon = data.coord.lon;

    async function getForecast(){
        try {
            let res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
            let foreData = await res.json();

            console.log(foreData);
            showForecast(foreData);
           
        }catch(err){
            console.log(err);
        }
    }
    getForecast()

    function showForecast(d){
        
        d.daily.forEach(function(w){
           
            let div = document.createElement('div');

            let icon = document.createElement('img');
            icon.setAttribute('src',` http://openweathermap.org/img/wn/${w.weather[0].icon}.png`);

            let temp = document.createElement('h1');
            temp.innerHTML = `${w.temp.day}°c.`;

            let humidity = document.createElement('p');
            humidity.innerHTML = `Humidity: ${  w.humidity} RH.`;

            let dayname = document.createElement('p');
            dayname.innerHTML = new Date(w.dt * 1000);

            let pressure = document.createElement('p');
            pressure.innerHTML =  `Pressure: ${ w.pressure} mm Hg. `;

            let speed = document.createElement('p');
            speed.innerHTML = `Wind Speed: ${w.wind_speed} 	m/s.`;

            let description = document.createElement('h4');
            description.innerHTML = w.weather[0].description;

            div.append(dayname,icon,temp,description,humidity,pressure,speed);
            cont.append(div)
            
        })
    }

    
    showWeatherData(data)
   }

   catch (err) {
       console.log(err);
   }
}


function showWeatherData(d) {
    console.log(d);

    container.innerHTML = null;
    let div = document.createElement('div');

    let name = document.createElement('h1');
    name.innerHTML = `Weather of the city:  ${d.name}`;

    let weekday = document.createElement('h2');
    weekday = new Date(d.dt * 1000)

    let temp = document.createElement('p')
    temp.innerHTML = `Temperature: ${d.main.temp}°c.`;

    let humidity = document.createElement('p')
    humidity.innerHTML = `Humidity: ${ d.main.humidity} RH.`;

    let pressure = document.createElement('p');
    pressure.innerHTML = `Pressure: ${ d.main.pressure} mm Hg. `;

    let weather = document.createElement('p');
    weather.innerHTML = `Weather : ${ d.weather[0].main}.`;

    let speed = document.createElement('p');
    speed.innerHTML = `Wind Speed: ${d.wind.speed} 	m/s.`;

    iframe.setAttribute('src',`https://maps.google.com/maps?q=${d.name}$&t=&z=13&ie=UTF8&iwloc=&output=embed`);

   div.append(name,temp,pressure,humidity,weather,speed,iframe);
   container.append(div);
}

