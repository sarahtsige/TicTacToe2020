
let squares = document.querySelectorAll('.squares');
//add event listener for squares
squares.forEach(square => square.addEventListener("click", changeColor));
let turn = 0
let blueSquares = []
let redSquares = []



let winningArray = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];

function checkWinner() {
    for (let i=0; i < winningArray.length; i++) {
        if(winningArray[i].every(e => blueSquares.includes(e))){
            alert("Blue Wins!");
            break;
        } 
        if(winningArray[i].every(e => redSquares.includes(e))){
            alert("Red Wins!");
            break;
        }
    }
}


function changeColor(e) {
    //change color of the clicked item      
    if (turn % 2 == 0) {
        e.target.style.backgroundColor = "blue";
        blueSquares.push(e.target.id);
        console.log(blueSquares);
    } else {
        e.target.style.backgroundColor = "red";
        redSquares.push(e.target.id);
        console.log(redSquares);
    }
    //remove event listener
    let clickedSquare = e.target;
    clickedSquare.removeEventListener('click', changeColor);
    turn += 1;
    console.log(turn);
    checkWinner();
    if (turn == 9) {
        alert("It's a tie!");
    }
}
