var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

function showPhoneNumber() {
    output.innerHTML = slider.value;
}
function callPhoneNumber() {
    var valueContainer = document.querySelector(".valuecontainer");
    var bottomHalf = document.querySelector(".bottom-half");

    var phoneNumber = valueContainer.textContent;

    var existingNumberElement = document.querySelector(".last-entered-number");

    if (existingNumberElement) {
        existingNumberElement.textContent = "Ring Ring, Calling: " + phoneNumber;
    } else {
        var displayElement = document.createElement("div");
        displayElement.textContent = "Ring Ring, Calling: " + phoneNumber;
        displayElement.classList.add("last-entered-number");

        bottomHalf.appendChild(displayElement);
    }

    bottomHalf.style.backgroundColor = "grey";
}
function resetApplication() {
    var bottomHalf = document.querySelector(".bottom-half");
    var valueContainer = document.querySelector(".valuecontainer");
    var slider = document.getElementById("myRange");

    var lastEnteredNumberElement = document.querySelector(".last-entered-number");
    if (lastEnteredNumberElement) {
        bottomHalf.removeChild(lastEnteredNumberElement);
    }

    bottomHalf.style.backgroundColor = "";

    valueContainer.textContent = "0";
}