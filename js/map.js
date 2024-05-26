"use strict";

//for geocoding
var map;
let searchManager;

function GetMap()
    {
        map  =  new  Microsoft.Maps.Map(document.getElementById('map'),  {  
            center:  new  Microsoft.Maps.Location(4.2105, 101.9758),  
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

// function geocodeQuery(query){
//     if(!searchManager)
//     {
//         Microsoft.Maps.loadModule("Microsoft.Maps.Search", function(){
//             searchManager = new Microsoft.Maps.Search.SearchManager(map);
//             geocodeQuery(query);
//         });
//     }
//     else
//     {
//         let searchRequest = {
//             where: query,
//             callback: function(r){
//                 if(r && r.results && r.results.length > 0)
//                     {
//                         var pin = new Microsoft.Maps.PushPin(r.results[0].location);
//                         map.entities.push(pin);

//                         map.setView({bounds: r.results[0].bestView});
//                     };
//             },
//             errorCallback: function(e)
//             {
//                 alert("No results found");
//             }
//         };
//         searchManager.geocode(searchRequest);
//     }
// }
