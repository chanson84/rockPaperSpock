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

       }
    }
)