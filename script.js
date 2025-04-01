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