
//Variables Initialization
let score=0;
let perc=0;
var seconds = 0;
let secondsLimit =25; //Seconds countDown start value
let remainingSeconds = 25;// Initial condition, this will change
let count =0;
let Tcount =0;
let aIndex = 14; //initial a.length
let sayingsMax =14; //Number of sayings available in the game
let a =[];//Initializing a

let saying=document.querySelector("p");
let movingWords =document.querySelectorAll(".word");
let wordTags = document.getElementsByClassName("word");
var clockDown = document.getElementById('countdown');
let scoreDisplay =document.querySelector(".score");
let buttonNext = document.querySelector('.next');
let buttonReset = document.querySelector('.reset');
let hamburguer =document.querySelector(".hamIcon");



//shuffle index array a=index numbers for each array of (sayings, words, score)
//let a = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function indexShuffle(){
let a = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13]
for (var i = 0; i < 100; i++)
{
var index1 = Math.floor((Math.random() * a.length));// Get a random index1
var index2 = Math.floor((Math.random() * a.length));// Get a random index1
var tmp = a[index1]; //store in temp during shuffle 
a[index1] = a[index2]; //change 
a[index2] = tmp;
}
return a;
}
a = indexShuffle()
aIndex = a.pop();
//End of index array shuffle

function wordClickEvent(e) {
  count +=1;
  let wordScore = [[0, 10, 0, 0,0,0],[0,0,0,0,0,10],
  [0,0,0,0,10,0],[0, 10, 0, 0,0,0],[0,0,10,0,0,0],
  [10,0,0,0,0,0],[0, 10, 0, 0,0,0],[0,0,0,0,10,0],
  [0,0,0,10,0,0],[0,0,10,0,0,0],[0,0,0,0,0,10],[0,10,0,0,0,0],[0,0,0,10,0,0],[0,0,10,0,0,0]];
  
  let wordId = parseInt(e.target.id,10);
  let wordValue = wordScore[aIndex][wordId];

  if (wordValue == 10){  
       e.target.classList.add('green');
    } else {e.target.classList.add('red'); }
  score += wordValue;
  perc = ((score/(10*count)) * 100).toFixed(1)
  scoreDisplay.innerHTML = "Accumulated score: " + score + " <br>" + "Number of clicks: "+count+ " <br>" +
  "Click success rate (%): " + perc 


}
movingWords[0].addEventListener('click',wordClickEvent);
movingWords[1].addEventListener('click',wordClickEvent);
movingWords[2].addEventListener('click',wordClickEvent);
movingWords[3].addEventListener('click',wordClickEvent);
movingWords[4].addEventListener('click',wordClickEvent);
movingWords[5].addEventListener('click',wordClickEvent);
hamburguer.addEventListener('click',toggleHam);
function readSay(num){
  let sayingList = ["All good things come to those who ____",
  "A picture is ____ a thousand words", 
  "Actions ____louder than words",
  "Do not burn the ____ behind you",
  "Do not put all your eggs in _____",
  "Easier said than ___",
  "If you cannot beat them, ___ them",
  "if you pay peanuts, you get ____",
  "it is no use ____ over spilled milk",
  "Never say ____",
  "No man is an ____",
  "look before you ___",
  "____ is the best medicine",
  "____ is the mother of invention"
  ];
  let wordList = [["dance", "wait", "read", "pause","play","weight"],
  ["good for","deserving of","merit","credit","value","worth"],
  ["yell","mute","chant","sing","speak","run"],
  ["lanes","bridges","trails","boats","ropes","bacon"],
  ["water","a hole","one basket","one cup","the boiler","the storage"],
  ["done","cone","made","trashed","cooked","placed"],
  ["scare","join","beat","silence","smile at","forget"],
  ["roasted","butter","squirrels","salt","monkeys","hungry"],
  ["singing","yelling","laughing","crying","tearing","sobbing"],
  ["always","forever","never","tomorrow","now","when"],
  ["ignorant","ego","elephant","astronaut","igloo","island"],
  ["climb","leap","run","fly","cross","rest"],
  ["dancing","broccoli","spinach","laughter","chocolate","walking"],
  ["intelligence","ignorance","necessity","curiosity","work","dedication"]];
  let aIndex = num;
  saying.innerText=  sayingList[aIndex];
  
  for (let i=0; i<6;i++){
    wordTags[i].innerText = wordList[aIndex][i];
  }
}

function reset(){
  score=0;
  seconds = 0;
  for(let i=0; i<movingWords.length; i++) {
  movingWords[i].classList.remove('green');
  movingWords[i].classList.remove('red');
  scoreDisplay.innerText = "Accumulated Score: " + score
  movingWords[i].addEventListener('click',wordClickEvent,{once:true});
  }
  a = indexShuffle()
  aIndex = a.pop();
  readSay(aIndex)
  return a
}
function next(){
  seconds=0;
  saying.style.animationName ="none";
  for(let i=0; i<6; i++) {
    movingWords[i].classList.remove('green');
    movingWords[i].classList.remove('red');
  }
  aIndex = a.pop();
  // might want to remove "p" and bring it back to activate "slidein";
  if (a.length<1){
    alert("You did " + count + " sayings, good JOB!! This game is over. " + "\r\n" +" Your final accumulated points: " + score + "\r\n" + " Points per clicks (%) " + perc + "\r\n" + "Click reset to start over");
    } 
  readSay(aIndex);
  return aIndex
}


readSay(aIndex) 
let cancel = setInterval(incrementSeconds, 1000);

buttonReset.addEventListener('click',reset);

buttonNext.addEventListener('click',next);

 //Clock

  function incrementSeconds() {
     seconds += 1;
     remainingSeconds = secondsLimit - seconds;
     let secondsRemaining = document.createElement("span")
     secondsRemaining.classList.add("remaining-seconds")
     secondsRemaining.innerText = remainingSeconds
     clockDown.innerText = "This saying has this many seconds remaining: " 
     clockDown.appendChild(secondsRemaining)
     //clockDown.insertAfter= " seconds reamining.";
     if (remainingSeconds<=0){
      next()
     }
 }
 function toggleHam(){
   let menu =document.querySelector(".instructions")
   menu.classList.toggle("toggleCls")
 }
//

