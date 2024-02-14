// Initialize variables to track time and interval reference
let seconds = 0;
let minutes = 0;
let hours = 0;
let happy = null;

// Function to increase time by one second
function increaseTime() {
    seconds++;

    // If seconds reach 60, reset seconds and increase minutes
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    // If minutes reach 60, reset minutes and increase hours
    if (minutes >= 60) {
        hours++;
        minutes = 0;
    }
}

// Function to update the displayed time
function helper() {
    increaseTime();
    
    // Select the element with class "Time"
    let time = document.querySelector(".Time");
    
    // Format seconds, minutes, and hours with leading zeros if necessary
    let second = seconds < 10 ? '0' + seconds : seconds;
    let minute = minutes < 10 ? '0' + minutes : minutes;
    let hour = hours < 10 ? '0' + hours : hours;
    
    // Update the displayed time
    time.innerText = `${hour}:${minute}:${second}`;
}

// Event listener for the stop button
document.querySelector(".stop").addEventListener('click', function() {
    // Stop the timer by clearing the interval
    clearInterval(happy);
    happy = null; // Reset the interval reference
});

// Event listener for the play button
document.querySelector(".play").addEventListener('click', function() {
    // Start the timer only if it's not already running
    if (!happy) {
        happy = setInterval(helper, 1000); // Start the timer and store the interval reference
    } 
});

// Event listener for the reset button
document.querySelector(".reset").addEventListener('click', function() {
    // Reset all time variables to zero
    seconds = 0;
    minutes = 0;
    hours = 0;
    // Stop the timer by clearing the interval
    clearInterval(happy);
    happy = null; // Reset the interval reference
    
    // Reset the displayed time to "00:00:00"
    let time = document.querySelector(".Time");
    time.innerText = `00:00:00`;
});

