
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset");

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function handleClick(event) {
    const index = event.target.getAttribute("data-index");

    if (board[index] !== "") return; // prevent overwriting

    board[index] = currentPlayer;
    const img = document.createElement("img");
img.src = currentPlayer === "X" ? "../images/x.png" : "../images/o.png";
img.classList.add("piece");
event.target.appendChild(img);


    if (checkWin()) {
        alert(currentPlayer + " wins!");
        return;
    }

    if (board.every(cell => cell !== "")) {
        alert("It's a tie!");
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
    const combos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    return combos.some(combo => {
        return combo.every(index => board[index] === currentPlayer);
    });
}

resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
});
