// Function to update the year color every 1 second
setInterval(function() {
    const yearElement = document.getElementById('year');
    const colors = ['#ff6347', '#00bfff', '#32cd32', '#ff69b4', '#8a2be2', '#ffa500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    yearElement.style.color = randomColor;
  }, 1000);
  
  // Function to update the background color of the date and time every 1 second
  setInterval(function() {
    const dateTimeElement = document.getElementById('dateTime');
    const colors = ['#f0e68c', '#add8e6', '#98fb98', '#ffb6c1', '#d3d3d3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dateTimeElement.style.backgroundColor = randomColor;
  
    // Update the current date and time
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.getElementById('currentDateTime').innerText = currentDateTime;
  }, 1000);
s  