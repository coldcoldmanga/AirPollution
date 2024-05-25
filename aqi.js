"use strict";

const searchInput = document.querySelector(".searchInput");

searchInput.addEventListener("input", debounce(fetchAQI,500));

async function fetchAQI() {
    const city = document.getElementById('searchInput').value;
    const token = '2545fed08b2dbc8e1d73068f9c6f034e0b9b9f36';
    const url = `http://api.waqi.info/feed/${city}/?token=${token}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error('Error fetching AQI:', error);
        document.getElementById('city-aqi-container').innerText = 'Error fetching AQI. Please try again.';
    }
}


function displayResult(data){
    const aqiContainer = document.getElementById("city-aqi-container");
    if(data.status === 'ok')
    {
        const city = data.data.city.name;
        const aqi = data.data.aqi;
        const info = data.data.city.url;
        aqiContainer.innerHTML = `The AQI for ${city} is ${aqi}. For more information: ${info}`;

    }
    else
    {
        aqiContainer.innerHTML = 'Could not fetch AQI for the specific city';
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