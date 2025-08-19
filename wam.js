let hits = 0;
let miss = 0;
let timer = 800;
let gameOver = false;

const table = document.getElementById("grid-container");
const hitscount = document.getElementById("hits-counter");
const misscount = document.getElementById("miss-counter");
hitscount.innerText = hits;
misscount.innerText = miss;
const cells = document.getElementsByClassName("cell");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(event){
        if (gameOver) return;
        if(event.target.innerText==1){
            console.log("HIT");
            event.target.style.backgroundColor="lime";
            event.target.style.color="black";
            hits += 1;
            hitscount.innerText = hits;
            timer = Math.max(300, timer - 5);
        }
        else{
            event.target.style.backgroundColor = "red";
            miss += 1;
            misscount.innerText = miss;
            timer = timer + 20;
        setTimeout(function(){
            event.target.innerText=0;
            event.target.style.backgroundColor = "";
        },600);
        if(miss>=5){
        gameOver = true;
        alert("Game Over");
        return;
    }
        }
    });
}

function randomizeMatrix(){
    if (gameOver) return;
    for(let r=0;r<3;r++){
        for(let c=0;c<3;c++){
            table.rows[r].cells[c].innerText = "";
            table.rows[r].cells[c].style.color = "white";
            table.rows[r].cells[c].style.backgroundColor="";
        }
    }

    let p = Math.floor(Math.random() * 3);
    let q = Math.floor(Math.random() * 3);
    table.rows[p].cells[q].innerText=1;
    table.rows[p].cells[q].style.color="black";
    table.rows[p].cells[q].style.backgroundColor="aqua";

    setTimeout(() => {
            if (gameOver) return;
            table.rows[p].cells[q].innerText = "";
            table.rows[p].cells[q].style.backgroundColor = "";
            table.rows[p].cells[q].style.color = "black";
    },timer);
    // console.log(timer);
    setTimeout(randomizeMatrix,timer);
}

function startGame(){
    hits = 0;
    miss = 0;
    timer = 800;
    gameOver = false;
    hitscount.innerText = hits;
    misscount.innerText = miss;
    randomizeMatrix();
}