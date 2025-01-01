function updateClock() {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the rotation for the hands
    const hourRotation = (hours % 12) * 30 + (minutes / 60) * 30;  // 360 degrees / 12 hours = 30 degrees per hour
    const minuteRotation = minutes * 6 + (seconds / 60) * 6;  // 360 degrees / 60 minutes = 6 degrees per minute
    const secondRotation = seconds * 6;  // 360 degrees / 60 seconds = 6 degrees per second

    // Apply rotations to the hands
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();
