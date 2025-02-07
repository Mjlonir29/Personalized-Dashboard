// Digital Clock
function updateClock() {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
    document.getElementById("date").innerText = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

// Weather Fetch (Replace 'YOUR_API_KEY' with a valid API key)
async function fetchWeather() {
    const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeather API key
    const city = "New Delhi";  // Change to your city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weather").innerText = `${data.weather[0].main}, ${data.main.temp}°C`;
    } catch (error) {
        document.getElementById("weather").innerText = "Unable to fetch weather.";
    }
}
fetchWeather();

// To-Do List with Local Storage
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", () => li.remove());
        taskList.appendChild(li);
        saveTasks();
        taskInput.value = "";
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#task-list li").forEach(li => tasks.push(li.textContent));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        li.addEventListener("click", () => li.remove());
        taskList.appendChild(li);
    });
}
loadTasks();

// Fetch Motivational Quote
async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        document.getElementById("quote").innerText = `"${data.content}" - ${data.author}`;
    } catch (error) {
        document.getElementById("quote").innerText = "Stay positive and keep going!";
    }
}
fetchQuote();

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
