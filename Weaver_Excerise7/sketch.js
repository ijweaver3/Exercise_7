/* with this project I want to create shapes based off geographcial locations of 5 citys, using the 
latitude and longitude properties still trying to figure out how to account for negetives
each shapes color will be a reflection of their maximum tempture and 
the size of the shape will be based off of their cloud numbers
when you roll over the shape the description will appear*/




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


function setup() {
  createCanvas(1000, 600);
  noStroke();
  var city1 = 'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=2de143494c0b295cca9337e1e96b00e0'
  var city2 = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=2de143494c0b295cca9337e1e96b00e0'
  var city3 = 'http://api.openweathermap.org/data/2.5/weather?q=HongKong&appid=2de143494c0b295cca9337e1e96b00e0'
  var city4 = 'http://api.openweathermap.org/data/2.5/weather?q=BuenosAires&appid=2de143494c0b295cca9337e1e96b00e0'
  var city5 = 'http://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=2de143494c0b295cca9337e1e96b00e0'
  loadJSON(city1, lookData1); 
  loadJSON(city2,lookData2);
  loadJSON(city3,lookData3);
  loadJSON(city4,lookData4);
  loadJSON(city5,lookData5);
}


function draw(){
  background(255);

  //console.log(city);
if (pcity){
  // Paris
  rectMode(CENTER);
  fill(255,209,51,temp1 * .1); //yellow
  rect( abs(pcity.coord.lon),pcity.coord.lat*10,5, 5)

}
if(ncity){
  //New York
  rectMode(CENTER);
  fill(255,0,242, temp2 *.1); //pink
  rect( abs(ncity.coord.lon),abs(ncity.coord.lat)*10,7, 7)


} 
  
if(hcity){
//Hong Kong
rectMode(CENTER);
  fill(125,73,242,temp3 *.1); //purple
  rect( abs(hcity.coord.lon),abs(hcity.coord.lat)*10,hcity.clouds.all, hcity.clouds.all)


} 


if(bcity){
// Buenos Aires
  rectMode(CENTER);
  fill(33,242,40,temp4 * .1); //green
  rect( abs(bcity.coord.lon),abs(bcity.coord.lat)*10,bcity.clouds.all, bcity.clouds.all)


} 

if (ccity){
//Cairo
  rectMode(CENTER);
  fill(255,20,15,temp5 *.1); //red
  rect(abs(ccity.coord.lat)*10 , abs(ccity.coord.lon),ccity.clouds.all, ccity.clouds.all)


}  
}


function lookData1(data) {
  console.log(data);
  pcity = data;
  temp1 = pcity.main.temp_max;
  
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