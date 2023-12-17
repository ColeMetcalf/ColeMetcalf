var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// Function to show the phone number when the button is clicked
function showPhoneNumber() {
    output.innerHTML = slider.value;
}