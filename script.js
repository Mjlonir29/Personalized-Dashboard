// Update Clock
setInterval(() => {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
    document.getElementById("date").innerText = now.toDateString();
}, 1000);

// Dark Mode
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Weather API
async function fetchWeather() {
    const apiKey = "YOUR_API_KEY";
    const city = "New Delhi";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weather").innerText = `${data.main.temp}°C`;
        document.getElementById("weather-icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.getElementById("weather-details").innerText = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        document.getElementById("weather").innerText = "Unable to fetch weather.";
    }
}
fetchWeather();

// Notes
function saveNotes() {
    localStorage.setItem("notes", document.getElementById("notes-area").value);
}
document.getElementById("notes-area").value = localStorage.getItem("notes") || "";

// Pomodoro Timer
let pomodoroTime = 1500;
let pomodoroInterval;

function startPomodoro() {
    pomodoroInterval = setInterval(() => {
        if (pomodoroTime > 0) {
            pomodoroTime--;
            document.getElementById("timer").innerText = new Date(pomodoroTime * 1000).toISOString().substr(14, 5);
        } else {
            clearInterval(pomodoroInterval);
        }
    }, 1000);
}

function resetPomodoro() {
    clearInterval(pomodoroInterval);
    pomodoroTime = 1500;
    document.getElementById("timer").innerText = "25:00";
}

// Quick Links
function addLink() {
    const name = document.getElementById("link-name").value;
    const url = document.getElementById("link-url").value;
    if (name && url) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
        document.getElementById("links-list").appendChild(li);
    }
}
