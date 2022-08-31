var score = 0
var scoreCount = 0
var currentItemId = ""
var ifGameOver = false
var isGameCont = false

function contGame() {
    isGameCont = true
}
function nonContGame() {
    isGameCont = false
}

function gameStart() {
    ifGameOver = false
    document.querySelector("#item1").style.setProperty('display', 'block', 'important');
    document.querySelector("#item2").style.setProperty('display', 'block', 'important');
    document.querySelector("#item3").style.setProperty('display', 'block', 'important');
    document.querySelector("#item4").style.setProperty('display', 'block', 'important');
    document.querySelector("#item5").style.setProperty('display', 'block', 'important');
    document.querySelector("#item6").style.setProperty('display', 'block', 'important');
    document.querySelector("#item7").style.setProperty('display', 'block', 'important');
    document.querySelector("#item8").style.setProperty('display', 'block', 'important');
    document.querySelector("#item9").style.setProperty('display', 'block', 'important');
    document.querySelector("#item10").style.setProperty('display', 'block', 'important');
}

function gameOver() {
    console.log("GAME OVER")
    ifGameOver = true
    document.querySelector("#item1").style.setProperty('display', 'none', 'important');
    document.querySelector("#item2").style.setProperty('display', 'none', 'important');
    document.querySelector("#item3").style.setProperty('display', 'none', 'important');
    document.querySelector("#item4").style.setProperty('display', 'none', 'important');
    document.querySelector("#item5").style.setProperty('display', 'none', 'important');
    document.querySelector("#item6").style.setProperty('display', 'none', 'important');
    document.querySelector("#item7").style.setProperty('display', 'none', 'important');
    document.querySelector("#item8").style.setProperty('display', 'none', 'important');
    document.querySelector("#item9").style.setProperty('display', 'none', 'important');
    document.querySelector("#item10").style.setProperty('display', 'none', 'important');
    document.querySelector(".timer").innerHTML = "GAME OVER";
}

function randomizer() {
    itemNum = 1
    scoreCount = 0
    while (itemNum <= 10) {
        var posX = Math.floor(Math.random() * ((innerWidth-60) - 10 + 1) + 10)
        var posY = Math.floor(Math.random() * (350 - 10 + 1) + 10)

        var leftRight = Math.floor(Math.random() * (1 - 0 + 1) + 0)
        
        var item = document.querySelector(`#item${itemNum}`);
        if (ifGameOver === false) {
            item.style.display = "block"
        }
        if (leftRight === 0) {
            item.style.left = posX + "px"
        }
        else {
            item.style.right = posX + "px"
        }
        
        var item = document.querySelector(`#item${itemNum}`);
        item.style.bottom = posY + "px"
    
        itemNum +=1
        
    }
}

function timer() {
    var timeleft = 15;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.querySelector(".timer").innerHTML = "0";
            gameOver()
        } else {
            document.querySelector(".timer").innerHTML = timeleft;
        }
        timeleft -= 1;
        console.log(scoreCount)
        if (scoreCount === 9 && isGameCont === true) {
            timeleft += 10
        }
    }, 1000);
}

function getDragId(objectId) {
    currentItemId = objectId
}

const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".box")

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging")
    })

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging")
    })
})

containers.forEach(container => {
    container.addEventListener('dragleave', e => {
        score += 1;
        scoreCount += 1;
        document.getElementById(currentItemId).style.display = "none"
                
        document.querySelector(".scoreCount").textContent = score
    
        if (scoreCount === 10) {
            randomizer()
        }
    })
})
