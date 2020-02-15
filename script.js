
let squares = document.querySelectorAll('.squares');
//add event listener for squares
squares.forEach(square => square.addEventListener("click", changeColor));
let turn = 0


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
}



function changeColor(e) {
    console.log(turn);
    //change color of the clicked item
    if (turn % 2 == 0) {
        e.target.style.backgroundColor = "blue";
    } else {
        e.target.style.backgroundColor = "red";
    }
    //remove event listener
    let clickedSquare = e.target;
    clickedSquare.removeEventListener('click', changeColor);
    turn += 1;
    checkWinner();
}



// function checkWinner() {
//     if (
//         squares[0].style.backgroundColor == squares[1].style.backgroundColor && squares[0].style.backgroundColor == squares[2].style.backgroundColor
//     ) alert(`${squares[0].style.backgroundColor} wins!`)
//     else if (
//         squares[3].style.backgroundColor == squares[4].style.backgroundColor && squares[3].style.backgroundColor == squares[5].style.backgroundColor
//     ) alert(`${squares[3].style.backgroundColor} wins!`)
//     else if (
//         squares[6].style.backgroundColor == squares[7].style.backgroundColor && squares[6].style.backgroundColor == squares[8].style.backgroundColor
//     ) alert(`${squares[6].style.backgroundColor} wins!`)
//     else if (
//         squares[0].style.backgroundColor == squares[3].style.backgroundColor && squares[0].style.backgroundColor == squares[6].style.backgroundColor
//     ) alert(`${squares[0].style.backgroundColor} wins!`)
//     else if (
//         squares[1].style.backgroundColor == squares[4].style.backgroundColor && squares[1].style.backgroundColor == squares[7].style.backgroundColor
//     ) alert(`${squares[1].style.backgroundColor} wins!`)
//     else if (
//         squares[2].style.backgroundColor == squares[5].style.backgroundColor && squares[2].style.backgroundColor == squares[8].style.backgroundColor
//     ) alert(`${squares[2].style.backgroundColor} wins!`)
//     else if (
//         squares[0].style.backgroundColor == squares[4].style.backgroundColor && squares[0].style.backgroundColor == squares[8].style.backgroundColor
//     ) alert(`${squares[2].style.backgroundColor} wins!`)
//     else if (
//         squares[2].style.backgroundColor == squares[4].style.backgroundColor && squares[2].style.backgroundColor == squares[6].style.backgroundColor
//     ) alert(`${squares[2].style.backgroundColor} wins!`)
// }