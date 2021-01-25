let moves = ["0", "1" ,"2","3", "4", "5", "7", "8"];
let allCells = document.querySelectorAll('.cell');
console.log(allCells);
let player ='blue';
let count =0;
let button = document.getElementsByTagName('button')[0];
button.addEventListener('click',reset);
let turn = document.getElementsByTagName('h2')[0];
turn.innerText ="Player's blue turn"
reset()
for(let i=0; i<allCells.length; i++) {
    allCells[i].addEventListener('click',runGame)
    //another way to do it to guarantee only one click
    //allCells[i].addEventListener('click',runGame,{once:true})
}
function runGame(event){
  
    console.log(event.target);
    if(player =='blue'){
        moves[this.id]='blue';
        event.target.classList.add('blue');
        //below removes listener from that specific cell
        event.target.removeEventListener('click',runGame);
        player = 'red';
        turn.innerText ="Player's red turn"
    }
    else if (player == 'red'){
        moves[this.id]='red';
        event.target.classList.add('red');
        player = 'blue';
        turn.innerText ="Player's blue turn"
    }
    count +=1;
    if(count >=9){
        turn.innerText ="Game Over"
    }
    console.log(moves);
    checkWinner()

}
//clear the class list
function reset(){
    moves = ["0", "1" ,"2","3", "4", "5", "7", "8"];
    player ='blue';
    let count =0;
    turn.innerText ="Player's blue turn"
    for(let i=0; i<allCells.length; i++) {
    allCells[i].classList.remove('blue');
    allCells[i].classList.remove('red');
    allCells[i].addEventListener('click',runGame,{once:true});
    }
}
function checkWinner(){
     for(let k=0; k<3; k++) {
         let j= k*3;
        if((moves[j]==moves[(j+1)]) && (moves[(j+1)]==moves[(j+2)])){
            turn.innerText ="The winner is " + moves[j] + "!!!";
        } 
        else if((moves[k]==moves[(k+3)]) && (moves[(k+3)]==moves[(k+6)])){
            turn.innerText ="The winner is " + moves[k] + "!!!";
        } 
        else if((moves[0]==moves[(4)]) && (moves[(4)]==moves[(8)])){
            turn.innerText ="The winner is " + moves[0] + "!!!";
        } 
        else if((moves[2]==moves[(4)]) && (moves[(4)]==moves[(6)])){
            turn.innerText ="The winner is " + moves[2] + "!!!";
        } 
        }
  }