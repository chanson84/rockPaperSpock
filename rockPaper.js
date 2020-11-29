$(document).ready(
    function () {

//Rules to win
function winner(player1, player2){
    if (player1 == 'rock'){
        if (player2 == 'scissors' || player2 =='lizard'){
            return true;}
    }
    else if (player1 =='paper'){
        if (player2 =='rock'  || player2 == 'spock'){
            return true;}
    }
    else if (player1 =='scissors'){
        if (player2 == 'paper'  || player2 =='lizard'){
            return true;
        }
    }
    else if(player1 =='lizard'){
        if(player2 =='spock' || player2 == 'paper'){
            return true;
        }
    }
   else if(player1 == 'spock') {
       if (player2 =='rock' || player2 =='scissors'){
           return true;
       }
    }
}

    }
    //A Set up function for choices, assigns images, onclick handler
    function setup(){
       for (const k in winner){
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
            for (const k in winner) {
                const node = document.getElementById(k);
                node.parentNode.className = "base unselected";
            }

            evt.currentTarget.className = "base selected";
            playerChoice = evt.currentTarget.id;

            compChoose(50);
        }
       function compChoose(delay) {
for (const k in winner) {
    const node = document.getElementById(k);
    node.parentNode.className = "base unselected";
}
const possibleSelections = Object.keys(winner);
const roll = Math.floor(Math.random() * possibleSelections.length);

const choice = possibleSelections[roll];
const node = document.getElementById(choice);
node.parentNode.classname = "base compSelected"
           compChoose = choice;
if (delay<200) {
    setTimeout(() => {
        compChoose(delay + 5);
    }, delay);
} else {
    winnerResolve();
}
       }
       function winnerResolve() {

       }
    }
