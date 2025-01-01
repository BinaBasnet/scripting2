function updateTime() {
    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if the value is less than 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update the time in the HTML
    document.querySelector('.hour').textContent = hours;
    document.querySelector('.minute').textContent = minutes;
    document.querySelector('.second').textContent = seconds;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize the clock immediately
updateTime();
