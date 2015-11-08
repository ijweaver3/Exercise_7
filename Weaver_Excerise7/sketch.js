/* with this project I want to create shapes based off geographcial locations of 5 citys, using the 
latitude and longitude properties still trying to figure out how to account for negetives
each shapes color will be a reflection of their maximum tempture and 
the size of the shape will be based off of their cloud numbers
when you roll over the shape the description will appear*/




var city;

function setup() {
  createCanvas(600, 400);
  noStroke();
  var city1 = 'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=2de143494c0b295cca9337e1e96b00e0'
  var city2 = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=2de143494c0b295cca9337e1e96b00e0'
  var city3 = 'http://api.openweathermap.org/data/2.5/weather?q=HongKong&appid=2de143494c0b295cca9337e1e96b00e0'
  var city4 = 'http://api.openweathermap.org/data/2.5/weather?q=BuenosAires&appid=2de143494c0b295cca9337e1e96b00e0'
  var city5 = 'http://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=2de143494c0b295cca9337e1e96b00e0'
  loadJSON(city1, lookData); 
  loadJSON(city2,lookData);
  loadJSON(city3,lookData);
  loadJSON(city4,lookData);
  loadJSON(city5,lookData);
}


function draw(){
  background(0);

  //console.log(city);



}

function lookData(data) {
  console.log(data);
  //city = data;

  
}