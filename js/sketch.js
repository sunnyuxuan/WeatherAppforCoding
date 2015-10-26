var canvas;
var base_url1 = "http://api.wunderground.com/api/9c2ef63469392956/conditions/q/FL/Miami.json"

var city1;
var weather1;
var temp1;
var uv1;
var humidity1;
var prep1;
var city1_button;

var city2; 
var weather2;
var temp2;
var uv2;
var humidity2;
var prep2;
var city2_button;

var weathericon1;
var weathericon2;

var pop1;
var pop2;
var pop3;
var pop4;
var pop5;
var pop5;
var pop6;

var day1;
var day2;
var day3;
var day4;
var day5;
var day6;

var pop1a;
var pop2a;
var pop3a;
var pop4a;
var pop5a;
var pop5a;
var pop6a;

var day1a;
var day2a;
var day3a;
var day4a;
var day5a;
var day6a;

                   
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    city1 = select('#City1');
    city2 = select('#City2');
    weather1 = select('#weather1');
    weather2 = select('#weather2');
    temp1 = select('#temp1');
    temp2 = select('#temp2');
    uv1 = select('#UV1');
    uv2 = select('#UV2');
    humidity1 = select('#Humidity1');
    humidity2 = select('#Humidity2');
    prep1 = select('#prep1');
    prep2 = select('#prep2');
    
    weathericon1 = select('#weathericon1');
    weathericon2 = select('#weathericon2');
    
    pop1 = select('#pop1');
    pop2 = select('#pop2');
    pop3 = select('#pop3');
    pop4 = select('#pop4');
    pop5 = select('#pop5');
    pop6 = select('#pop6');
    
    day1 = select('#day1');
    day2 = select('#day2');
    day3 = select('#day3');
    day4 = select('#day4');
    day5 = select('#day5');
    day6 = select('#day6');
    
    pop1a = select('#pop1a');
    pop2a = select('#pop2a');
    pop3a = select('#pop3a');
    pop4a = select('#pop4a');
    pop5a = select('#pop5a');
    pop6a = select('#pop6a');
    
    day1a = select('#day1a');
    day2a = select('#day2a');
    day3a = select('#day3a');
    day4a = select('#day4a');
    day5a = select('#day5a');
    day6a = select('#day6a');
    
    day1.class('date');
    day2.class('date');
    day3.class('date');
    day4.class('date');
    day5.class('date');
    day6.class('date');
    
    day1a.class('date');
    day2a.class('date');
    day3a.class('date');
    day4a.class('date');
    day5a.class('date');
    day6a.class('date');
    
    city1_button = createButton('Search');
    city1_button.class('button1');
    city1_button.parent('buttonparent1');
    city1_button.mousePressed(getCity1Weather);
    
    city2_button = createButton('Search');
    city2_button.class('button2');
    city2_button.parent('buttonparent2');
    city2_button.mousePressed(getCity2Weather);
    
}

    function getCity1Weather() {
    var fullString = city1.value();
    var cityState = fullString.split(" "); 
    var url = "http://api.wunderground.com/api/9c2ef63469392956/conditions/q/" + cityState[1] + "/" + cityState[0] + ".json";
        
    var url2 = "http://api.wunderground.com/api/9c2ef63469392956/forecast10day/q/"+cityState[1]+"/"+cityState[0]+".json"
    
    loadJSON(url, gotWeather1);
    loadJSON(url2, gotForecast1);
   
}

function getCity2Weather() {
    var fullString = city2.value();
    var cityState = fullString.split(" "); 
    var url = "http://api.wunderground.com/api/9c2ef63469392956/conditions/q/" + cityState[1] + "/" + cityState[0] + ".json";
    
    var url2 = "http://api.wunderground.com/api/9c2ef63469392956/forecast10day/q/"+cityState[1]+"/"+cityState[0]+".json"
    
    
    loadJSON(url, gotWeather2);
    loadJSON(url2, gotForecast2);
}

function gotWeather1(weather){

    weather1.html(weather.current_observation.weather);
    
     
    var name;
    
     if(weather.current_observation.icon == "clear" ||
      weather.current_observation.icon == "mostlycloudy" ||
      weather.current_observation.icon == "mostlysunny" ||
      weather.current_observation.icon == "partlycloudy" ||
      weather.current_observation.icon == "partlysunny" ||
      weather.current_observation.icon == "sunny" ||
      weather.current_observation.icon == "partlycloudy"
      ){
       name = 'egg';
       }
       
    else
       name = 'mushroom';
    
   weathericon1.html('<img src="img/'+name+'.svg" alt="'+name+'">');
    
    temp1.html(weather.current_observation.temp_c + "&#8451;");
    uv1.html(weather.current_observation.UV);
    humidity1.html(weather.current_observation.relative_humidity); 
    prep1.html(weather.current_observation.precip_today_metric + "mm");
    
   
}

function gotForecast1(forecast) {
    day1.html(forecast.forecast.txt_forecast.forecastday[0].title);
    day2.html(forecast.forecast.txt_forecast.forecastday[2].title);
    day3.html(forecast.forecast.txt_forecast.forecastday[4].title);
    day4.html(forecast.forecast.txt_forecast.forecastday[6].title);
    day5.html(forecast.forecast.txt_forecast.forecastday[8].title);
    day6.html(forecast.forecast.txt_forecast.forecastday[10].title);
    
    pop1.html(forecast.forecast.txt_forecast.forecastday[0].pop+"%");
    pop2.html(forecast.forecast.txt_forecast.forecastday[2].pop+"%");
    pop3.html(forecast.forecast.txt_forecast.forecastday[4].pop+"%");
    pop4.html(forecast.forecast.txt_forecast.forecastday[6].pop+"%");
    pop5.html(forecast.forecast.txt_forecast.forecastday[8].pop+"%");
    pop6.html(forecast.forecast.txt_forecast.forecastday[10].pop+"%");
    
}

function gotWeather2(weather){ 
weather2.html(weather.current_observation.weather);
    var name;
    if(weather.current_observation.icon == "clear" ||
      weather.current_observation.icon == "mostlycloudy" ||
      weather.current_observation.icon == "mostlysunny" ||
      weather.current_observation.icon == "partlycloudy" ||
      weather.current_observation.icon == "partlysunny" ||
      weather.current_observation.icon == "sunny" ||
      weather.current_observation.icon == "partlycloudy"
      ){
       name = 'egg';
       }
       
       
    else
       name = 'mushroom';
    
    weathericon2.html('<img src="img/'+name+'.svg" alt="'+name+'">');
    
    temp2.html(weather.current_observation.temp_c + "&#8451;");
    uv2.html(weather.current_observation.UV);
    humidity2.html(weather.current_observation.relative_humidity); 
    prep2.html(weather.current_observation.precip_today_metric + "mm");
   
}

function gotForecast2(forecast) {
    day1a.html(forecast.forecast.txt_forecast.forecastday[0].title);
    day2a.html(forecast.forecast.txt_forecast.forecastday[2].title);
    day3a.html(forecast.forecast.txt_forecast.forecastday[4].title);
    day4a.html(forecast.forecast.txt_forecast.forecastday[6].title);
    day5a.html(forecast.forecast.txt_forecast.forecastday[8].title);
    day6a.html(forecast.forecast.txt_forecast.forecastday[10].title);
    
    pop1a.html(forecast.forecast.txt_forecast.forecastday[0].pop+"%");
    pop2a.html(forecast.forecast.txt_forecast.forecastday[2].pop+"%");
    pop3a.html(forecast.forecast.txt_forecast.forecastday[4].pop+"%");
    pop4a.html(forecast.forecast.txt_forecast.forecastday[6].pop+"%");
    pop5a.html(forecast.forecast.txt_forecast.forecastday[8].pop+"%");
    pop6a.html(forecast.forecast.txt_forecast.forecastday[10].pop+"%");
    
}