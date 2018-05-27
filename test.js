let myMap;
let canvas;
let json;
const mappa = new Mappa('Leaflet');

// Lets put all our map options in a single object
const options = {
  lat: 48,
  lng: 2,
  zoom: 5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload(){
	json = loadJSON("Your file name.json")
}

function setup(){
  	canvas = createCanvas(640,640); 
  	myMap = mappa.tileMap(options); 
  	myMap.overlay(canvas);
	myMap.onChange(drawPos);
	
	noStroke();
	fill(255,0,0,120);
}

function draw(){
	
}

function drawPos(){
	clear();
	
	for(var i=0;i<json.locations.length;i++){
		const coord = myMap.latLngToPixel(json.locations[i].latitudeE7 * Math.pow(10,-7) , json.locations[i].longitudeE7 * Math.pow(10,-7));
		ellipse(coord.x,coord.y,7,7);
	}
	
}