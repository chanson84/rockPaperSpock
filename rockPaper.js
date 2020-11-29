$(document).ready(
    function () {

        window.addEventListener('DOMContentLoaded', () => {
            setup();
        });

//Rules to win
        function Winner(player1, player2) {
            if (player1 == 'rock') {
                if (player2 == 'scissors' || player2 == 'lizard') {
                    return true;
                }
            } else if (player1 == 'paper') {
                if (player2 == 'rock' || player2 == 'spock') {
                    return true;
                }
            } else if (player1 == 'scissors') {
                if (player2 == 'paper' || player2 == 'lizard') {
                    return true;
                }
            } else if (player1 == 'lizard') {
                if (player2 == 'spock' || player2 == 'paper') {
                    return true;
                }
            } else if (player1 == 'spock') {
                if (player2 == 'rock' || player2 == 'scissors') {
                    return true;
                }
            }
        }


        let compChoice = null;
        let playerChoose = null;
        let Score = [0, 0];

        //A Set up function for choices, assigns images, onclick handler
        function setup() {
            for (const k in Winner) {
                const div1 = document.createElement('div');
                const div2 = document.createElement('div');
                const img = document.createElement('img');
                img.src = k + '.png';
                div1.id = k;
                div1.className = 'base unselected';
                div1.appendChild(img);
                div1.onclisck = (e) => {
                    select(e);
                }
                div2.id = 'ai' + k;
                div2.className = 'base unselected';
                div2.appendChild(div1);
                document.getElementById('selection').appendChild(div2);
            }

            function updatedScore() {
                document.getElementById('score').innerText = score[0] + ':' + score[1];
            }

            //Function for when the player makes a selection
            function selection(evt) {
                for (const k in Winner) {
                    const node = document.getElementById(k);
                    node.parentNode.className = "base unselected";
                }

                evt.currentTarget.className = "base selected";
                playerChoice = evt.currentTarget.id;

                compChoose(50);
            }

            function compChoose(delay) {
                for (const k in Winner) {
                    const node = document.getElementById(k);
                    node.parentNode.className = "base unselected";
                }
                const possibleSelections = Object.keys(Winner);
                const roll = Math.floor(Math.random() * possibleSelections.length);

                const choice = possibleSelections[roll];
                const node = document.getElementById(choice);
                node.parentNode.classname = "base compSelected"
                compChoose = choice;
                if (delay < 200) {
                    setTimeout(() => {
                        compChoose(delay + 5);
                    }, delay);
                } else {
                    winnerResolve();
                }
            }

            function winnerResolve() {
                let desc = '';
                if (compChoice == playerChoose) {
                    desc = 'Tie Game'
                } else if (compChoice in Winner[playerChoose]) {
                    desc = 'Player Wins: ';
                    desc += (playerChoose + '' + Winner[playerChoose][compChoice] + '' + compChoice + '.');
                    Score[0] += 1;
                } else {
                    desc = 'You Lose!';
                    desc += (playerChoose + ' ' + Winner[playerChoose][compChoice] + ' ' + playerChoose + '.')
                    Score[1] += 1;
                }
            }

            document.getElementById('description').innerText = desc;
            updatedScore();
        }

        function isWinner(player1, player2) {
            return player2 in Winner[player1];
        }
    })

//SimonDev for inspiration  with build for code