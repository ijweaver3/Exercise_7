/* with this project I want to create shapes based off geographcial locations of 5 citys, using the 
latitude and longitude properties still trying to figure out how to account for negetives
each shapes color will be a reflection of their maximum tempture and 
the size of the shape will be based off of their cloud numbers
when you roll over the shape the description will appear
was unable to get the description to appear couldn't figure out why*/

var pcity;
var ncity;
var hcity;
var bcity;
var ccity;
var temp1;
var temp2;
var temp3;
var temp4;
var temp5;

//var des1;

function setup() {
  createCanvas(1000, 600);
  noStroke();
  var city1 = 'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial'
  var city2 = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial'
  var city3 = 'http://api.openweathermap.org/data/2.5/weather?q=HongKong&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial'
  var city4 = 'http://api.openweathermap.org/data/2.5/weather?q=BuenosAires&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial'
  var city5 = 'http://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial'
  loadJSON(city1, lookData1); 
  loadJSON(city2,lookData2);
  loadJSON(city3,lookData3);
  loadJSON(city4,lookData4);
  loadJSON(city5,lookData5);
}


function draw(){
  background(240);
  

if (pcity){
  // Paris
  rectMode(CENTER);
  fill(255,209,51,temp1 * .5); //yellow
  rect( 35+(pcity.coord.lon*5),(90-pcity.coord.lat)*3,pcity.main.humidity,pcity.main.humidity);
  fill(255,209,51);
  textAlign(CENTER);
  text(pcity.name,35+(pcity.coord.lon*5),(90-pcity.coord.lat)*3);
}
if(ncity){
  //New York
  rectMode(CENTER);
  fill(255,0,242, temp2 *.5); //pink
  rect(abs(ncity.coord.lon)*5,(90-ncity.coord.lat)*3,ncity.main.humidity, ncity.main.humidity);
  fill(255,0,242);
  textAlign(CENTER);
  text(ncity.name,abs(ncity.coord.lon)*5,(90-ncity.coord.lat)*3);

} 
  
if(hcity){
//Hong Kong
rectMode(CENTER);
  fill(125,73,242,temp3 *.5 ); //purple
  rect( hcity.coord.lon*5,(90-hcity.coord.lat)*3,hcity.main.humidity, hcity.main.humidity);
  fill(125,73,242);
  textAlign(CENTER);
  text(hcity.name,hcity.coord.lon*5,(90-hcity.coord.lat)*3);
} 


if(bcity){
// Buenos Aires
  rectMode(CENTER);
  fill(33,242,40,temp4 *.5); //green
  rect( abs(bcity.coord.lon)*5,(90+abs(bcity.coord.lat))*3,bcity.main.humidity, bcity.main.humidity);
  fill(33,242,40);
  textAlign(CENTER);
  text(bcity.name,abs(bcity.coord.lon)*5,(90+abs(bcity.coord.lat))*3);

} 

if (ccity){
//Cairo
  rectMode(CENTER);
  fill(255,20,15,temp5 *.5); //red
  rect(ccity.coord.lon *5, (90-ccity.coord.lat)*3,ccity.main.humidity, ccity.main.humidity);
  fill(255,20,15);
  textAlign(CENTER);
  text(ccity.name,ccity.coord.lon *5,(90-ccity.coord.lat)*3);

} 
}


function lookData1(data) {
  console.log(data);
  pcity = data;
  temp1 = pcity.main.temp_max;
  //des1= pcity.weather.description;
  
}

function lookData2(data){
  console.log(data);
  ncity = data;
  temp2 = ncity.main.temp_max;
}

function lookData3 (data){
  console.log(data);
  hcity = data;
  temp3 = hcity.main.temp_max;
}

function lookData4(data){
  console.log(data);
  bcity = data;
  temp4 = bcity.main.temp_max;
}

function lookData5(data){
  console.log(data);
  ccity = data;
  temp5 = ccity.main.temp_max;
}