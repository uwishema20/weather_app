async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'd8b1d852087123c93c3a3984671488de'; // Use your own API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('city-name').textContent = `Weather in ${data.name}`;
            document.getElementById('weather').textContent = `Condition: ${data.weather[0].description}`;
            document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
            updateGreeting();
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}

function updateGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = "Good morning!";
    } else if (hours >= 12 && hours < 17) {
        greeting = "Good afternoon!";
    } else if (hours >= 17 && hours < 21) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }

    document.getElementById('greeting').textContent = greeting;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('greeting').textContent = 'Hello!';
});
