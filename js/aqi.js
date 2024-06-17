"use strict";

const searchInput = document.querySelector(".searchInput");
const aqiContainer = document.getElementById("city-aqi-container");

searchInput.addEventListener("input", debounce(fetchAQI,500));

async function fetchAQI() {
    const city = document.getElementById('searchInput').value;
    const token = '2545fed08b2dbc8e1d73068f9c6f034e0b9b9f36';
    const url = `https://api.waqi.info/feed/${city}/?token=${token}`;

    if(city != '')
    {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            geocode();
            displayResult(data);
            
        } catch (error) {
            console.log(error);
            document.getElementById('city-aqi-container').innerText = 'Error fetching AQI. Please try again.';
        }
    }
    else
    {
        aqiContainer.innerHTML = '';
    }
}


function displayResult(data){

    if(data.status === 'ok')
    {

        const city = data.data.city.name;
        const aqi = data.data.aqi;
        const info = data.data.city.url;
        
        aqiContainer.innerHTML = `<p>The AQI for ${city} is <strong>${aqi}</strong>. For more information: <a href=${info} target=_blank>${info}</a></p><br>`;

    }
    else
    {
        aqiContainer.innerHTML = `Sorry, but we do not have AQI information for ${searchInput.value}`;
    }
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function geocode(){
    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        var searchManager = new Microsoft.Maps.Search.SearchManager(map);
        const city = searchInput.value;
        var requestOptions = {
            bounds: map.getBounds(),
            where: city,
            callback: function (answer, userData) {
                map.setView({ bounds: answer.results[0].bestView });
                map.entities.push(new Microsoft.Maps.Pushpin(answer.results[0].location));
               
            }
        };
        
        searchManager.geocode(requestOptions);
        
    });
}

