let turn = 'X';
let playerTurn = document.querySelector('.turn-x-o');
borders = [];
let btn = document.getElementById('reset-btn');
let ruslt = document.getElementById('ruslt');
let sound = document.getElementById('aud');
let soundWin = document.getElementById('audio');




function finish(num1,num2,num3){
    playerTurn.innerHTML = `${borders[num1]} Winner`;

    document.getElementById('it' + num1).style.background = '#282828';
    document.getElementById('it' + num2).style.background = '#282828';
    document.getElementById('it' + num3).style.background = '#282828';

    setTimeout(function(){location.reload()},10000);
    
}


function game(id){
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == ''){
        element.innerHTML = 'X';
        playerTurn.innerHTML = 'O';
        turn = 'O';
        sound.play();
    }else if(turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        playerTurn.innerHTML = 'X';
        turn = 'X';
        sound.play();
    }
    Winner();
}



function Winner(){
    for(let i = 1; i<10; i++){
        borders[i] = document.getElementById('it' + i).innerHTML;
    }
    if(borders[1] == borders[2] && borders [2] == borders[3] && borders[2] != ''){
        finish(1,2,3);
        soundWin.play();
    }
    else if(borders[4] == borders[5] && borders[5] == borders[6] && borders[5] != ''){
        finish(4,5,6);
        soundWin.play();
    }else if(borders[7] == borders[8] && borders[8] == borders[9] && borders[8] != ''){
        finish(7,8,9);
        soundWin.play();
    }
    else if(borders[1] == borders[5] && borders[5] == borders[9] && borders[5] != ''){
        finish(1,5,9);
        soundWin.play();
    }
    else if(borders[3] == borders[5] && borders[5] == borders[7] && borders[5] != ''){
        finish(3,5,7);
        soundWin.play();
    }
    else if(borders[1] == borders[4] && borders[4] == borders[7] && borders[4] != ''){
        finish(1,4,7);
        soundWin.play();
    }
    else if(borders[2] == borders[5] && borders[5] == borders[8] && borders[5] != ''){
        finish(2,5,8);
        soundWin.play();
    }
    else if(borders[3] == borders[6] && borders[6] == borders[9] && borders[6] != ''){
        finish(3,6,9);
        soundWin.play();
    };
}
btn.onclick = function(){
    location.reload();
}
