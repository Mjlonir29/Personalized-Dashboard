<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personalized Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

    <div class="container">
        <!-- Header -->
        <header>
            <h1>Welcome, Sumit!</h1>
            <button id="theme-toggle">🌙</button>
        </header>

        <!-- Clock & Date -->
        <section class="clock">
            <h2 id="time"></h2>
            <p id="date"></p>
        </section>

        <!-- Weather -->
        <section class="weather">
            <h2>Weather</h2>
            <p id="weather">Loading...</p>
            <img id="weather-icon" src="" alt="">
            <p id="weather-details"></p>
        </section>

        <!-- To-Do List -->
        <section class="todo">
            <h2>To-Do List</h2>
            <div class="input-group">
                <input type="text" id="task-input" placeholder="Add a new task">
                <button onclick="addTask()">Add</button>
            </div>
            <ul id="task-list"></ul>
        </section>

        <!-- Notes -->
        <section class="notes">
            <h2>Quick Notes</h2>
            <textarea id="notes-area" placeholder="Write your notes here..."></textarea>
            <button onclick="saveNotes()">Save Notes</button>
        </section>

        <!-- Reminders -->
        <section class="reminders">
            <h2>Reminders</h2>
            <input type="text" id="reminder-input" placeholder="Add a reminder">
            <input type="time" id="reminder-time">
            <button onclick="setReminder()">Set Reminder</button>
            <ul id="reminder-list"></ul>
        </section>

        <!-- Pomodoro Timer -->
        <section class="pomodoro">
            <h2>Pomodoro Timer</h2>
            <p id="timer">25:00</p>
            <button onclick="startPomodoro()">Start</button>
            <button onclick="resetPomodoro()">Reset</button>
        </section>

        <!-- Calendar -->
        <section class="calendar">
            <h2>Calendar</h2>
            <div id="calendar"></div>
        </section>

        <!-- Quick Links -->
        <section class="quick-links">
            <h2>Quick Links</h2>
            <div id="link-container">
                <input type="text" id="link-name" placeholder="Enter name">
                <input type="url" id="link-url" placeholder="Enter URL">
                <button onclick="addLink()">Add</button>
            </div>
            <ul id="links-list">
                <li><a href="https://github.com/" target="_blank">GitHub</a></li>
                <li><a href="https://www.google.com/" target="_blank">Google</a></li>
                <li><a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a></li>
            </ul>
        </section>

    </div>

</body>
</html>
