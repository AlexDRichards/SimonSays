// VARIABLES
const startButton = document.getElementById('start-button');
const simonBox = document.getElementsByClassName('simon');
const counter = document.getElementById('countdown');
let intervalId;
let three = '3';
let two = '2';
let one = '1';
// FUNCTIONS
console.log(counter)

function countDown(startInt) {
    return () => {
        if (startInt === 0) {
            clearInterval(intervalId);
        }
        counter.textContent = startInt.toString();
        startInt--;
    }
}

const startGame =  () => {
    startButton.style.display = 'none';
    counter.style.display = 'block';
    intervalId = setInterval(countDown(3), 1000);
    counter.textContent = 'Begin!';
    
}
// LISTENERS

startButton.addEventListener('click', startGame)