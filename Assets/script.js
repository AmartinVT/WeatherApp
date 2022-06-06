let searchBtnEl = $('#searchBtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let textSearchEl = document.getElementById('userText'); //Saves the text input into the HTML form as a variable to be used in JavaScript

var APIKey = "4078811ac12257abe5c1a8aa51a3bfd6"; //API Key to access OpenWeatherAPI

let i = 0; //Variable initialization for search save indexing

let a_date = moment().format("MMM Do"); //Today
let a_date_unix = moment().unix(); //Today (Unix)
let b_date = moment().add(1, 'days').format("MMM Do"); //Today + 1
let b_date_unix = moment().add(1, 'days').unix(); //Today + 1 (Unix)
let c_date = moment().add(2, 'days').format("MMM Do"); //Today + 2
let c_date_unix = moment().add(2, 'days').unix(); //Today + 2 (Unix)
let d_date = moment().add(3, 'days').format("MMM Do"); //Today + 3
let d_date_unix = moment().add(3, 'days').unix(); //Today + 3 (Unix)
let e_date = moment().add(4, 'days').format("MMM Do"); //Today + 4
let e_date_unix = moment().add(4, 'days').unix(); //Today + 4 (Unix)
let f_date = moment().add(5, 'days').format("MMM Do"); //Today + 5
let f_date_unix = moment().add(5, 'days').unix(); //Today + 5 (Unix)

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

    //OpenWeatherAPI call for today's date
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&dt=" + a_date_unix + "&appid=" + APIKey + "&units=imperial"; //Variable for URL for the API with user input city name and API key
    fetch(queryURL) //API call
    .then(function (response){ //Response of the API call
        return response.json()
    })
    .then(function(data){ //Printing of the API call to the console
        a_feelsLike = data.main.feels_like;
        a_weatherIcon = data.weather[0].icon;
        a_wind = data.wind.speed;
        a_humidity = data.main.humidity;
        console.log(data);
        console.log(a_date);
        console.log(a_date_unix);   
        console.log(a_feelsLike);
        console.log(a_weatherIcon);
        console.log(a_wind);
        console.log(a_humidity);

        //OpenWeatherAPI call for today's date + 1
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&dt=" + b_date_unix + "&appid=" + APIKey + "&units=imperial"; //Variable for URL for the API with user input city name and API key
        fetch(queryURL) //API call
        .then(function (response){ //Response of the API call
            return response.json()
        })
        .then(function(data){ //Printing of the API call to the console
            b_feelsLike = data.main.feels_like;
            b_weatherIcon = data.weather[0].icon;
            b_wind = data.wind.speed;
            b_humidity = data.main.humidity;
            console.log(data);
            console.log(b_date);
            console.log(b_date_unix); 
            console.log(b_feelsLike);
            console.log(b_weatherIcon);
            console.log(b_wind);
            console.log(b_humidity);
        
            //OpenWeatherAPI call for today's date + 2
            var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&dt=" + c_date_unix + "&appid=" + APIKey + "&units=imperial"; //Variable for URL for the API with user input city name and API key
            fetch(queryURL) //API call
            .then(function (response){ //Response of the API call
                return response.json()
            })
            .then(function(data){ //Printing of the API call to the console
                c_feelsLike = data.main.feels_like;
                c_weatherIcon = data.weather[0].icon;
                c_wind = data.wind.speed;
                c_humidity = data.main.humidity;
                console.log(data);
                console.log(c_date);
                console.log(c_date_unix); 
                console.log(c_feelsLike);
                console.log(c_weatherIcon);
                console.log(c_wind);
                console.log(c_humidity);
                
                //OpenWeatherAPI call for today's date + 3
                var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&dt=" + d_date_unix + "&appid=" + APIKey + "&units=imperial"; //Variable for URL for the API with user input city name and API key
                fetch(queryURL) //API call
                .then(function (response){ //Response of the API call
                    return response.json()
                })
                .then(function(data){ //Printing of the API call to the console
                    d_feelsLike = data.main.feels_like;
                    d_weatherIcon = data.weather[0].icon;
                    d_wind = data.wind.speed;
                    d_humidity = data.main.humidity;
                    console.log(data);
                    console.log(d_date);
                    console.log(d_date_unix); 
                    console.log(d_feelsLike);
                    console.log(d_weatherIcon);
                    console.log(d_wind);
                    console.log(d_humidity);
                
                    //OpenWeatherAPI call for today's date + 4
                    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&dt=" + e_date_unix + "&appid=" + APIKey + "&units=imperial"; //Variable for URL for the API with user input city name and API key
                    fetch(queryURL) //API call
                    .then(function (response){ //Response of the API call
                        return response.json()
                    })
                    .then(function(data){ //Printing of the API call to the console
                        e_feelsLike = data.main.feels_like;
                        e_weatherIcon = data.weather[0].icon;
                        e_wind = data.wind.speed;
                        e_humidity = data.main.humidity;
                        console.log(data);
                        console.log(e_date);
                        console.log(e_date_unix); 
                        console.log(e_feelsLike);
                        console.log(e_weatherIcon);
                        console.log(e_wind);
                        console.log(e_humidity);
                    
                        //OpenWeatherAPI call for today's date + 5
                        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&dt=" + f_date_unix + "&appid=" + APIKey + "&units=imperial"; //Variable for URL for the API with user input city name and API key
                        fetch(queryURL) //API call
                        .then(function (response){ //Response of the API call
                            return response.json()
                        })
                        .then(function(data){ //Printing of the API call to the console
                            f_feelsLike = data.main.feels_like;
                            f_weatherIcon = data.weather[0].icon;
                            f_wind = data.wind.speed;
                            f_humidity = data.main.humidity;
                            console.log(data);
                            console.log(f_date);
                            console.log(a_date_unix);                             
                            console.log(f_feelsLike);
                            console.log(f_weatherIcon);
                            console.log(f_wind);
                            console.log(f_humidity);
                        })    
                    })
                })
            })
        })
    })
    
    if (i < 4) {
        i++ //Index of i for storing unique searches for i from 0 to 4
     } 
    else {
        i=0 //Resets i to 0 if i >= 5 since 5 is the max # of stored searches
    };
});
