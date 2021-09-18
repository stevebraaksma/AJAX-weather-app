// IIFE
$(function(){


// Constants and Variables
const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = 'a31a381bc378471f9b788b810bf5ab10';
let weatherData;


const $city = $('#city'); 
const $temp = $('#temp'); 
const $feelsLike = $('#feels-like'); 
const $weather = $('#weather'); 

const $form = $('form');

const $input = $('input[type="text"]');

$form.on('submit', handleGetData);


function handleGetData(event) {
    event.preventDefault();   
    console.log(event);  

    const cityName = $input.val();
    $input.val('');  

    $.ajax(`${BASE_URL}/data/2.5/weather?q=${cityName}&units=imperial&APPID=${API_KEY}`).then(function(data) {
        console.log(data);
        weatherData = data;
        console.log(weatherData);
        render();

    }, function(error) {
    console.log(error);
    })
}


function render() {
    $city.text(`${weatherData.name}`);
    $temp.text(`${weatherData.main.temp}`);
    $feelsLike.text(`${weatherData.main.feels_like}`);
    $weather.text(`${weatherData.weather[0].description}`);
}

});



