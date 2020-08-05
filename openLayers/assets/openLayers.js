window.onload = init;


function init(){
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: [-11019097.248012709, 4546148.095837107],
      zoom: 4
    }),

    
  });
  map.on("click", function(e){
    console.log(e.coordinate);
  })
}