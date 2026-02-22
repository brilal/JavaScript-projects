
// Run when the page is loaded
window.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.getElementById("orderButton");
    const sizeSelect = document.getElementById("size");
    const outputDiv = document.getElementById("output");

    orderButton.addEventListener("click", function () {
        const size = sizeSelect.value;

        const toppingCheckboxes = document.querySelectorAll("#pizza-form input[type='checkbox']");
        let toppings = [];

        toppingCheckboxes.forEach(function (box) {
            if (box.checked) {
                toppings.push(box.value);
            }
        });

        let message = "You ordered a " + size + " pizza";

        if (toppings.length > 0) {
            message += " with " + toppings.join(", ") + ".";
        } else {
            message += " with no extra toppings.";
        }

        outputDiv.textContent = message;
    });
});
