var scores, roundScore, activePlayer;

scores=[0,0];
roundScore=0;
activePlayer=0;

document.querySelector('.dice').style.display = 'none';
 
document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';
document.getElementById('current--0').textContent='0';
document.getElementById('current--0').textContent='0';

document.querySelector('.btn--roll').addEventListener('click', function(){
    // 1. random number
    var dice= Math.floor(Math.random() * 6)+1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    

    //3. Update the round score If the rolled number was not a 1
     if(dice !== 1){
         //Add Score
        roundScore+=dice;  
        document.querySelector('#current--'+activePlayer).textContent = roundScore;

     }
     else{
         //next Player
         activePlayer === 0 ? activePlayer=1:activePlayer=0;
         roundScore=0;

         document.getElementById('current--0').textContent= '0';
         document.getElementById('current--1').textContent= '0';

         document.querySelector('.player--0 player--active').classList.toggle('avtive');
         document.querySelector('.player--1').classList.toggle('active');

        //  document.querySelector('.player--0 player--active').classList.remove('avtive');
        //  document.querySelector('.player--1').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
     }
});




// document.querySelector('#current--'+activePlayer).textContent = dice;

// var x = document.querySelector("#score--0").textContent;
// console.log(x);