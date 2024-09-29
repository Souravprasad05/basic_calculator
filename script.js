// Select the display element where numbers and results will appear
let display = document.querySelector('.display');

// Function to append numbers or operators to the display
function append(numb) {
    // If the display shows an error, clear it first before appending the new value
    display.value == "Error!" ? display.value = "" : display.value += numb;
}

// Function to evaluate the expression shown in the display
function calculate() {
    try {
        // Evaluate the mathematical expression in the display using eval()
        display.value = eval(display.value)
    } catch (error) {
        // If an error occurs (invalid expression), show "Error!" on the display
        display.value = "Error!"
    }
}
