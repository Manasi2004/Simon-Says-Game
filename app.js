let gameSeq = [];
let userSeq = [];

let btns = ["one", "two", "three", "four"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function() {
    if (!started) {  
        console.log("game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 250); 
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    userSeq = [];

    let randomIdx = Math.floor(Math.random() * btns.length);  
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`#${randomColor}`);  
    gameSeq.push(randomColor);
    console.log("Game sequence:", gameSeq);  
    btnFlash(randomBtn);
}


function checkAns() {
    let idx = userSeq.length - 1;  

    console.log("Checking user sequence:", userSeq);  
    console.log("Checking game sequence:", gameSeq);

    if (userSeq[idx] === gameSeq[idx]) {
        console.log("same value");
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000); 
        }
    } else {
        h2.innerText = `Game over! Press any key to start.`;
        startOver();  
}
}

function startOver() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
    console.log("Game reset"); 
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");  
    userSeq.push(userColor);

    console.log("User pressed:", userColor);  
    console.log("User sequence:", userSeq);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
allBtns.forEach(btn => {
    btn.addEventListener('click', btnPress);  
});