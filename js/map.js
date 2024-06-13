"use strict";

var map;

function GetMap()
    {
        map  =  new  Microsoft.Maps.Map(document.getElementById('map'),  {  
            center:  new  Microsoft.Maps.Location(4.2105, 101.9758), //malaysia latitude,longtitude 
            zoom:  6,  
      });  

      var  options  =  {  
            uriConstructor:  "https://tiles.aqicn.org/tiles/usepa-aqi/{zoom}/{x}/{y}.png?token=2545fed08b2dbc8e1d73068f9c6f034e0b9b9f36",  
            minZoom:  1,  
            maxZoom:  15  
      };
      
      
      var  waqiTileSource  =  new  Microsoft.Maps.TileSource(options);  
      var  waqiTilelayer  =  new  Microsoft.Maps.TileLayer({  mercator:  waqiTileSource  });  
      map.layers.insert(waqiTilelayer);

    }
