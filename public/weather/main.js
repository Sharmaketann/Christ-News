window.addEventListener('load', ()=>{

    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.location-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude; 
            
            const api = `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${long}&appid=38f4b92df973a4d06fa3c27ddb47cd5c&units=metric`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const temp = data.main.temp;
                const desc = data.weather[0].description;
                //Set DOM Elements from the API

                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = desc;
                locationTimezone.textContent = data.name;
            });
        });
        
        
    }

});