const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');


document.getElementById('btn-hi').addEventListener('click',helloWorld);

function helloWorld(input){
var input = document.getElementById('userInput').value;
hi.innerHTML = input;
//alert(input);
};




btn.addEventListener('click', function(){
    const randomNumber= getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

