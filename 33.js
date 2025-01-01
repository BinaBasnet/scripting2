// Reference to the display element
let display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate and display the result
function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluate the input
    } catch (error) {
        alert('Invalid Input'); // Handle invalid input
        clearDisplay();
    }
}
