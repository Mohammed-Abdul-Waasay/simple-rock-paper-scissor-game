const human = document.getElementById('playerdisplay');
const comp = document.getElementById('computerdisplay');
const choice = ['rock', 'paper', 'scissors'];
const result = document.getElementById('result');
const tc = document.getElementById('h4id3');
const pwc = document.getElementById('h4id2');
const cwc = document.getElementById('h4id1');
const gw = document.getElementById('h2id');
let pw = 0;
let cw = 0;
let t = 0;




function playgame(element){
    let cc = choice[Math.floor(Math.random() * 3)];
    human.textContent = 'Player  : ' + element;
    comp.textContent = 'Computer : ' + cc;
    if (element=== cc){
        result.textContent = 'Its a tie !';
        t+=1;
        tc.textContent ='Tie : ' + t;


    }
    else if((element === 'rock'&& cc === 'scissors')||
(element === "paper" && cc === "rock") ||
(element === "scissors" && cc === "paper")){
    result.textContent = 'You Win !';
    pw+=1;
    pwc.textContent = 'Player W : ' + pw;
    

    }
    else{
        result.textContent = 'You Lose !';
        cw+=1;
        cwc.textContent = 'Computer W : ' + cw;
        

    }
    
 
        

        
    

    

}