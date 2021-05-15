'use strict';
let secretNum = Math.floor(Math.random()*20)+1;
console.log(secretNum);
let score=20;
let highscore=0;
const displayMessage= function(message)
{
  document.querySelector(".message").textContent=message;
}
document.querySelector(".check").addEventListener("click",function(){
  let myNum = Number(document.querySelector(".guess").value);
  console.log(myNum);
  if(!myNum)   displayMessage('⛔️ No number!')
  if(myNum===secretNum)
  {
    displayMessage('🎉 Correct Number!');
      document.querySelector(".number").textContent=myNum;
      document.querySelector("body").style.backgroundColor="green";
      document.querySelector(".number").style.width="30rem";
  
  if(score>highscore)
  {
    highscore=score;
    document.querySelector(".highscore").textContent=highscore;
  }}
  else{
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(myNum > secretNum ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click",function(){
  score=20;
  highscore=0;
  document.querySelector(".number").textContent="?";
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.guess').value = '';
  document.querySelector("body").style.backgroundColor="black";
  secretNum = Math.floor(Math.random()*20)+1;
});