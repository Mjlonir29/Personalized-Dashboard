// 🕒 Digital Clock
function updateClock() {
    
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
    document.getElementById("date").innerText = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

// 🌤️ Weather Fetch (Replace 'YOUR_API_KEY' with a valid OpenWeather API key)
async function fetchWeather() {
    const apiKey = "YOUR_API_KEY"; // Add your OpenWeather API key
    const city = "New Delhi"; // Change to your city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weather").innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
            ${data.weather[0].main}, ${data.main.temp}°C
        `;
    } catch (error) {
        document.getElementById("weather").innerText = "Unable to fetch weather.";
    }
}
fetchWeather();

// ✅ To-Do List with Local Storage
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTasks();
        });
        taskList.appendChild(li);
        saveTasks();
        taskInput.value = "";
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#task-list li").forEach(li => tasks.push({
        text: li.textContent,
        completed: li.classList.contains("completed")
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.completed) li.classList.add("completed");
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTasks();
        });
        taskList.appendChild(li);
    });
}
loadTasks();

// 📖 Notes Feature (Auto-Save)
const notesArea = document.getElementById("notes");
notesArea.value = localStorage.getItem("notes") || "";

notesArea.addEventListener("input", () => {
    localStorage.setItem("notes", notesArea.value);
});

// ⏰ Pomodoro Timer
let timer;
let isRunning = false;
let timeLeft = 25 * 60;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").innerText = 
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startPomodoro() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Pomodoro session completed!");
            }
        }, 1000);
    }
}

function resetPomodoro() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateTimerDisplay();
}
updateTimerDisplay();

// 📌 Reminders Feature
const reminderInput = document.getElementById("reminder-input");
const reminderList = document.getElementById("reminder-list");

function addReminder() {
    const reminderText = reminderInput.value.trim();
    if (reminderText) {
        const li = document.createElement("li");
        li.textContent = reminderText;
        li.addEventListener("click", () => li.remove());
        reminderList.appendChild(li);
        saveReminders();
        reminderInput.value = "";
    }
}

function saveReminders() {
    const reminders = [];
    document.querySelectorAll("#reminder-list li").forEach(li => reminders.push(li.textContent));
    localStorage.setItem("reminders", JSON.stringify(reminders));
}

function loadReminders() {
    const savedReminders = JSON.parse(localStorage.getItem("reminders")) || [];
    savedReminders.forEach(reminder => {
        const li = document.createElement("li");
        li.textContent = reminder;
        li.addEventListener("click", () => li.remove());
        reminderList.appendChild(li);
    });
}
loadReminders();

// 🌟 Fetch Motivational Quote
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

// 🌙 Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// 🎉 Smooth Page Load Animation
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";
});
