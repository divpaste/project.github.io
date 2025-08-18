function randomizeMatrix(){
    let table = document.getElementById("grid-container");
    let count = document.getElementById("counter");
    let value=0;
    for(let r=0;r<3;r++){
        for(let c=0;c<3;c++){
            table.rows[r].cells[c].innerText = 0;
            table.rows[c].cells[r].style.backgroundColor="";
        }
    }
    let p = Math.floor(Math.random() * 3);
    let q = Math.floor(Math.random() * 3);
    table.rows[p].cells[q].innerText=1;
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(event) {
        if(event.target.innerText==1){
            console.log("HIT");
            event.target.style.backgroundColor="green";
            event.target.innerText=0;
            value += 1;
            count.innerText = value;
            return;
        }
        setTimeout(function(){
            event.target.style.backgroundColor = "";
        },200);
    });
    }
}

setInterval(randomizeMatrix,1500);
