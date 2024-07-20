/*// Fetch a random dog image
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            displayDogImage(data.message);
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}

// Display the dog image
function displayDogImage(imageUrl) {
    const container = document.getElementById('dogImageContainer');
    container.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
}

// Fetch weather information for a city
function fetchWeather(city) {
    const apiKey = 'your_openweathermap_api_key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
            displayWeather(data);
        }else{
            throw new Error(data.message);
        }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayWeatherError(error.message);
        });
}

// Display weather information
function displayWeather(data) {
    const container = document.getElementById('weatherContainer');
    container.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
}

// Display weather error message
function displayWeatherError(message) {
    const container = document.getElementById('weatherContainer');
    container.innerHTML = `<p class="text-danger"><strong>Error:</strong> ${message}</p>`;
}

// Fetch cryptocurrency prices
function fetchCryptoPrices() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            displayCryptoPrices(data);
        })
        .catch(error => {
            console.error('Error fetching crypto prices:', error);
        });
}

// Display cryptocurrency prices
function displayCryptoPrices(data) {
    const container = document.getElementById('cryptoContainer');
    container.innerHTML = `
        <p><strong>Bitcoin:</strong> $${data.bitcoin.usd}</p>
        <p><strong>Ethereum:</strong> $${data.ethereum.usd}</p>
    `;
}

// Event listeners for buttons
document.getElementById('fetchDogImageBtn').addEventListener('click', fetchDogImage);
document.getElementById('fetchWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    fetchWeather(city);
});
document.getElementById('fetchCryptoBtn').addEventListener('click', fetchCryptoPrices);
*/


// Fetch a random dog image
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            displayDogImage(data.message);
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}

// Display the dog image
function displayDogImage(imageUrl) {
    const container = document.getElementById('dogImageContainer');
    container.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
}

// Fetch weather information for a city
function fetchWeather(city) {
    const apiKey = '72d2e32af0f226d883f87523929c0a6e'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) { // Check if the response is successful
                displayWeather(data);
            } else {
                throw new Error(data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayWeatherError(error.message);
        });
}

// Display weather information
function displayWeather(data) {
    const container = document.getElementById('weatherContainer');
    container.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
}

// Display weather error message
function displayWeatherError(message) {
    const container = document.getElementById('weatherContainer');
    container.innerHTML = `<p class="text-danger"><strong>Error:</strong> ${message}</p>`;
}

// Fetch cryptocurrency prices
function fetchCryptoPrices() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            displayCryptoPrices(data);
        })
        .catch(error => {
            console.error('Error fetching crypto prices:', error);
        });
}

// Display cryptocurrency prices
function displayCryptoPrices(data) {
    const container = document.getElementById('cryptoContainer');
    container.innerHTML = `
        <p><strong>Bitcoin:</strong> $${data.bitcoin.usd}</p>
        <p><strong>Ethereum:</strong> $${data.ethereum.usd}</p>
    `;
}

// Event listeners for buttons
document.getElementById('fetchDogImageBtn').addEventListener('click', fetchDogImage);
document.getElementById('fetchWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        displayWeatherError('Please enter a city name.');
    }
});
document.getElementById('fetchCryptoBtn').addEventListener('click', fetchCryptoPrices);
