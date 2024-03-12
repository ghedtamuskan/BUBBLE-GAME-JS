 var timer= 30;
 var score= 0;
var hitrn = 0;

// score program 
function scoreIncrease(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

//  hit program
 function getNewHit(){
   hitrn = Math.floor(Math.random()*10)
   document.querySelector("#hitval").textContent = hitrn;
 }
// making bubbles with diff no. program
 function makeBubble(){ 
   var clutter = "";

for(var i = 1; i<=140; i++){
    var rn= Math.floor(Math.random()*10)
clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;

Math.floor(Math.random()*10)
}

// timer program 
function runTimer(){
  var timerInt=  setInterval(function(){
        if(timer>0){
       timer--; 
       document.querySelector("#timerval").textContent = timer
        }
        else {clearInterval(timerInt);
          document.querySelector('#pbtm').innerHTML = `<h1>Game over</h1>`;
    }
},1000);
}

// adding event listener for clicking number and playing game program
document.querySelector("#pbtm").addEventListener("click",
function(dets){
var clickedNum =(Number(dets.target.textContent));
if(clickedNum === hitrn){
  scoreIncrease();
  makeBubble();
  getNewHit()
}
})


getNewHit();
runTimer();
makeBubble();
scoreIncrease();
