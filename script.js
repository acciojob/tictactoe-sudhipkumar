//your JS code here. If required.
 document.getElementById("submit").addEventListener("click", function() {
            const player1 = document.getElementById("player-1").value;
            const player2 = document.getElementById("player-2").value;
            if (player1 && player2) {
                document.getElementById("board").style.display = "grid";
                document.querySelector(".message").innerText = `${player1}, you're up!`;
                startGame(player1, player2);
            }
        });

function startGame(player1, player2) {
            let currentPlayer = player1;
            let currentSymbol = "X";
            const cells = document.querySelectorAll(".cell");
            const board = ["", "", "", "", "", "", "", "", ""];
            
            cells.forEach((cell, index) => {
                cell.innerText = "";
                cell.addEventListener("click", function() {
                    if (!cell.innerText) {
                        cell.innerText = currentSymbol;
                        board[index] = currentSymbol;
                        if (checkWinner(board, currentSymbol)) {
                            document.querySelector(".message").innerText = `${currentPlayer}, congratulations you won!`;
                            cells.forEach(c => c.style.pointerEvents = "none");
                        } else {
                            currentPlayer = currentPlayer === player1 ? player2 : player1;
                            currentSymbol = currentSymbol === "X" ? "O" : "X";
                            document.querySelector(".message").innerText = `${currentPlayer}, you're up!`;
                        }
                    }
                }, { once: true });
            });
        }

function checkWinner(board, symbol) {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            return winPatterns.some(pattern => pattern.every(index => board[index] === symbol));
        }