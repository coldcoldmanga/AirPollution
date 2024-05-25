(function (w, d, t, f) {  
    w[f] = w[f] || function (c, k, n) {  
        var s = w[f], k = s['k'] = (s['k'] || (k ? ('&k=' + k) : ''));  
        s['c'] = c = (c instanceof Array) ? c : [c];  
        s['n'] = n = n || 0;  
        var L = d.createElement(t), e = d.getElementsByTagName(t)[0];  
        L.async = 1;  
        L.src = '//feed.aqicn.org/feed/' + (c[n].city) + '/' + (c[n].lang || '') + '/feed.v1.js?n=' + n + k;  
        e.parentNode.insertBefore(L, e);  
    };  
})(window, document, 'script', '_aqiFeed'); 

function updateAQI() {
    var city = document.getElementById("searchInput").value;
    if (city) {
        document.getElementById("city-aqi-container").innerHTML = ""; // Clear previous AQI result
        _aqiFeed({  
            display: "%cityname Air Quality is <span style='%style'>%impact</span> (%aqiv on %date)",
            lang:"en",
            container: "city-aqi-container",  
            city: city  
        });
    } else {
        alert("Please enter a city name.");
    }
}