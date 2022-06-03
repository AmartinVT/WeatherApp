let searchBtnEl = $('#searchBtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let textSearchEl = document.getElementById('userText'); //Saves the text input into the HTML form as a variable to be used in JavaScript

var APIKey = "4078811ac12257abe5c1a8aa51a3bfd6"; //API Key to access OpenWeatherAPI

let i = 0; //Variable initialization for search save indexing

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
        console.log(data)
    })
    i++; //Index of i for storing unique searches
});

//let city = textSearchEl.value;

//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

//let apiResponse = jQuery.get(queryURL);
