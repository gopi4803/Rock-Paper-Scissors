let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    Ties:0
};
updateScore();

function playGame(playerMove){
const computerMove= pickComputerMove();
let result='';
if (playerMove ==='Rock')
{
if (computerMove === 'Rock'){
    result='Tie';
}else if(computerMove === 'Paper'){
    result='You lose';
}else{
    result='You win';
}
}

else if (playerMove ==='Paper')
{
if (computerMove === 'Rock'){
    result='You win';
}else if(computerMove === 'Paper'){
    result='Tie';
}else{
    result='You lose';
}
}

else if (playerMove ==='Scissors')
{
if (computerMove === 'Rock'){
    result='You lose';
}else if(computerMove === 'Paper'){
    result='You win';
}else{
    result='Tie';
}
}
if (result === 'You win'){
score.wins+=1;
}
else if (result === 'You lose'){
score.losses+=1;
}
else{
score.Ties+=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScore();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-moves').innerHTML=`You
<img src="images/${playerMove}-emoji.png" class="emoji">
<img src="images/${computerMove}-emoji.png" alt="" class="emoji">
Computer`;
}
function updateScore(){
document.querySelector('.js-score')
    .innerHTML=`wins:${score.wins},losses:${score.losses},Ties:${score.Ties}`;
}

function pickComputerMove(){
let randomnumber=Math.random();
let computerMove='';
if((randomnumber>=0) && (randomnumber<1/3)){
computerMove='Rock';
}else if((randomnumber>=1/3) && (randomnumber<2/3)){
computerMove='Paper';
}else if((randomnumber>=2/3) && (randomnumber<1)){
computerMove='Scissors';
}
return computerMove;
} 
