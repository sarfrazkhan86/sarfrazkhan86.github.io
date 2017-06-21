var temp = '';

 //Title case text
  function titleCase(str) {
  var lowerCase = str.toLowerCase();
  var split = lowerCase.split(" ");
  var newArray = [];
  for (var i = 0; i < split.length; i++) {
    var firstChar = split[i].charAt(0);
    var upperCase = firstChar.toUpperCase();
    var remainingWord = upperCase + split[i].slice(1);
    newArray.push(remainingWord);
  }
    var final = newArray.join(" ");
    return(final);
};
//End Title case function


//Get coordinates and weather
var getLocalWeather = function(){
navigator.geolocation.getCurrentPosition(function(position) {
  lati = position.coords.latitude;
  long = position.coords.longitude;


  $.ajax({
  dataType: "json",
  type: "GET",
  url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lati + "&lon=" + long + "&units=imperial&APPID=3a959c60aaf134d7b95296ecf865c638",
  success: function(json) {
  temp = Math.round(json.main.temp);
  var tempC = Math.round((temp - 32) * (5/9));
  var unitsF = true;
$('#data').click(function(){
  if(unitsF) {
  $('#data').html(tempC + " &deg;C");
  unitsF = false;
  }
  else {
  $('#data').html(temp + " &deg;F");
    unitsF = true
  }
}
);
$('#data').html(temp + " &deg;F");

$('#city').html(json.name);
    $('#condition').html(titleCase(json.weather[0].description));
    $('#conditionImage').attr('src', 'https://openweathermap.org/img/w/' + json.weather[0].icon + '.png');

  },
})
});
};

$(document).ready(getLocalWeather());
