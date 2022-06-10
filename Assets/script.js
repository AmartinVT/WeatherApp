let searchBtnEl = $('#searchBtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let textSearchEl = document.getElementById('userText'); //Saves the text input into the HTML form as a variable to be used in JavaScript

// Javascript elements for search history buttons
let searchHist0El = $('#hist0Btn');
let searchHist1El = $('#hist1Btn');
let searchHist2El = $('#hist2Btn');
let searchHist3El = $('#hist3Btn');
let searchHist4El = $('#hist4Btn');

var APIKey = "4078811ac12257abe5c1a8aa51a3bfd6"; //API Key to access OpenWeatherAPI

let i = 0; //Variable initialization for search save indexing

let a_date = moment().format("MMM Do"); //Today
let b_date = moment().add(1, 'days').format("MMM Do"); //Today + 1
let c_date = moment().add(2, 'days').format("MMM Do"); //Today + 2
let d_date = moment().add(3, 'days').format("MMM Do"); //Today + 3
let e_date = moment().add(4, 'days').format("MMM Do"); //Today + 4
let f_date = moment().add(5, 'days').format("MMM Do"); //Today + 5

// Initializes "search history" button variables from local storage
let searchHist0 = localStorage.getItem('SearchRecord0');
let searchHist1 = localStorage.getItem('SearchRecord1');
let searchHist2 = localStorage.getItem('SearchRecord2');
let searchHist3 = localStorage.getItem('SearchRecord3');
let searchHist4 = localStorage.getItem('SearchRecord4');

// Passes "search history" varaibles to HTML sheet
document.getElementById("hist0Btn").innerHTML = searchHist0;
document.getElementById("hist1Btn").innerHTML = searchHist1;
document.getElementById("hist2Btn").innerHTML = searchHist2;
document.getElementById("hist3Btn").innerHTML = searchHist3;
document.getElementById("hist4Btn").innerHTML = searchHist4;

// Buttons to set seachbar text based on user clicking the "button" for the search history text
searchHist0El.click (function(){
    console.log("Search history 0 button pressed")
    textSearchEl.value = searchHist0;
    searchBtnEl.click();
});

searchHist1El.click (function(){
    console.log("Search history 1 button pressed")
    textSearchEl.value = searchHist1;
    searchBtnEl.click();
});

searchHist2El.click (function(){
    console.log("Search history 2 button pressed")
    textSearchEl.value = searchHist2;
    searchBtnEl.click();
});

searchHist3El.click (function(){
    console.log("Search history 3 button pressed")
    textSearchEl.value = searchHist3;
    searchBtnEl.click();
});

searchHist4El.click (function(){
    console.log("Search history 4 button pressed")
    textSearchEl.value = searchHist4;
    searchBtnEl.click();
});

// Search button controls
searchBtnEl.on('click', function() { //On press of save button, saves input to local storage 
    let city = textSearchEl.value; //Saves the value of the text entry as a variable
    console.log("Search button pressed"); //Logs the search button was pressed
    localStorage.setItem("SearchRecord"+i,city); //Creates an indexing local storage variable for cities searched
    console.log(`Saved Search :  ${city} `); //Confirms the searched city was saved

    // Updates search history variables in local storage
    let searchHist0 = localStorage.getItem('SearchRecord0');
    let searchHist1 = localStorage.getItem('SearchRecord1');
    let searchHist2 = localStorage.getItem('SearchRecord2');
    let searchHist3 = localStorage.getItem('SearchRecord3');
    let searchHist4 = localStorage.getItem('SearchRecord4');
    
    // Writes / re-writes button values based on updated local storage
    document.getElementById("hist0Btn").innerHTML = searchHist0;
    document.getElementById("hist1Btn").innerHTML = searchHist1;
    document.getElementById("hist2Btn").innerHTML = searchHist2;
    document.getElementById("hist3Btn").innerHTML = searchHist3;
    document.getElementById("hist4Btn").innerHTML = searchHist4;

    //OpenWeatherAPI call to get longitude and latitude
    var queryUrlLonLat = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey; //Variable for URL for the API with user input city name and API key
    fetch(queryUrlLonLat)
    .then(function (response){
        return response.json()
    })
    .then(function(data){
        let longitude = data.coord.lon;
        let latitude = data.coord.lat;
        localStorage.setItem("lon", longitude)
        localStorage.setItem("lat", latitude)
    })
    
    let lat = localStorage.getItem("lat");
    let lon = localStorage.getItem("lon");

    //OpenWeatherAPI call for today's date
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts" + "&units=imperial" + "&appid=" + APIKey; //Variable for URL for the API with user input city name and API key
    fetch(queryURL) //API call
    .then(function (response){ //Response of the API call
        return response.json()
    })
    .then(function(data){ //Printing of the API call to the console
        console.log(data)
        a_feelsLike = data.daily[0].feels_like.day;
        a_weatherIcon = data.daily[0].weather[0].icon;
        a_wind = data.daily[0].wind_speed;
        a_humidity = data.daily[0].humidity;
        a_uv = data.daily[0].uvi;
        document.getElementById("date0date").innerHTML = "TODAY: " + a_date;
        document.getElementById("date0icon").src = `http://openweathermap.org/img/wn/${a_weatherIcon}@2x.png`;
        document.getElementById("date0temp").innerHTML = "Feels Like: " + a_feelsLike + " F";
        document.getElementById("date0wind").innerHTML = "Wind Speed: " + a_wind + " MPH";
        document.getElementById("date0humid").innerHTML = "Humidity: " + a_humidity + " %";
    })

    if (i < 4) {
        i++ //Index of i for storing unique searches for i from 0 to 4
     } 
    else {
        i=0 //Resets i to 0 if i >= 5 since 5 is the max # of stored searches
    };

});
