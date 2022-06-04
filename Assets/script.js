let searchBtnEl = $('#searchBtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let textSearchEl = document.getElementById('userText'); //Saves the text input into the HTML form as a variable to be used in JavaScript

var APIKey = "4078811ac12257abe5c1a8aa51a3bfd6"; //API Key to access OpenWeatherAPI

let i = 0; //Variable initialization for search save indexing

let a_date = moment().format("MMM Do");
let b_data = moment().add(1, 'days').format("MMM Do");
let c_data = moment().add(2, 'days').format("MMM Do");
let d_data = moment().add(3, 'days').format("MMM Do");
let e_data = moment().add(4, 'days').format("MMM Do");

// Search button controls
searchBtnEl.on('click', function() { //On press of save button, saves input to local storage 
    let city = textSearchEl.value; //Saves the value of the text entry as a variable
    console.log("Search button pressed"); //Logs the search button was pressed
    localStorage.setItem("SearchRecord:"+i,city); //Creates an indexing local storage variable for cities searched
    console.log(`Saved Search :  ${city} `); //Confirms the searched city was saved
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey; //Variable for URL for the API with user input city name and API key
    fetch(queryURL) //API call
    .then(function (response){ //Response of the API call
        return response.json()
    })
    .then(function(data){ //Printing of the API call to the console
        let apiResponse = JSON.stringify(data);
        
        a_feelsLike = data.main.feels_like;
        a_weatherIcon = data.weather[0].icon;
        a_humidity = data.main.humidity;
        console.log(data);
        console.log(a_date);
        console.log(a_feelsLike);
        console.log(a_weatherIcon);
        console.log(a_humidity);
    })
    i++; //Index of i for storing unique searches
});
