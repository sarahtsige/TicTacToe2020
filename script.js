
let squares = document.querySelectorAll('.squares');
squares.forEach(square => square.addEventListener("click", changeColor));

let turn = 0
function changeColor(e) {
    console.log('click worked!')
    //change color of the clicked item
        e.target.style.backgroundColor = 'blue';
        //remove event listener
        e.target.removeEventListener('click', changeColor);
        turn += 1;
        console.log(turn);
        if (turn%2) {
            e.target.style.backgroundColor = "red";
            e.target.removeEventListener('click', changeColor);
        }   
        checkWinner();
}







//add event listener for squares

let winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
 
    





    function checkWinner() {
        if (
            squares[0].style.backgroundColor == squares[1].style.backgroundColor &&  squares[0].style.backgroundColor ==  squares[2].style.backgroundColor
        ) console.log (`${squares[0].style.backgroundColor} wins!`)
        else if (
            squares[3].style.backgroundColor == "red" &&
            squares[4].style.backgroundColor == "red" &&
            squares[5].style.backgroundColor == "red"
        ) console.log ('Red wins!')
        else if (
            squares[6].style.backgroundColor == "red" &&
            squares[7].style.backgroundColor == "red" &&
            squares[8].style.backgroundColor == "red"
        ) console.log ('Red wins!')
    }    
