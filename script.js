choices = ["Rock", "Paper", "Scissors"]
var winner = document.getElementById("winner")

var pc_choice
var pc_score = 0
var player_score = 0

var player_img = document.getElementById("player_img")

var pc_img = document.getElementById("pc_img")



var displayPlayer = document.getElementById("displayPlayer")

var score = document.getElementById("score")

score.innerHTML = `Player score: ${player_score};  PC score: ${pc_score}`

function updateScore(){
score.innerHTML = `Player score: ${player_score};  PC score: ${pc_score}`
}


function change_display() {
    var pc_number = Math.floor(Math.random() * 3)
    pc_choice = choices[pc_number]
    var display = document.getElementById("pc")
    display.innerHTML = `${pc_choice}`
}

function choose_paper() {
    var player = document.getElementById("player")
    var player_choice = "paper"

    player.innerHTML = "Paper"

    player_img.src = "paper.png"

}

function choose_rock() {
    var player = document.getElementById("player")
    var player_choice = "rock"

    player.innerHTML = "Rock"

    player_img.src = "Rock.png"

}

function choose_scissors() {
    var player = document.getElementById("player")
    var player_choice = "scissors"

    player.innerHTML = "Scissors"

    player_img.src = "scissors.png"
}

function display_pc_input(){
    if(pc_choice == "Rock"){
        pc_img.src = "Rock.png"
    }

    else if(pc_choice == "Paper"){
        pc_img.src = "paper.png"
    }

    else if(pc_choice == "Scissors"){
        pc_img.src = "scissors.png"
    }
}

function decide_winner_rock() {
    if(pc_choice == "Rock"){
        winner.innerHTML = "No one wins"
    }

    else if(pc_choice == "Paper"){
        winner.innerHTML = "Winner is PC"
        pc_score += 1
    }

    else if(pc_choice == "Scissors"){
        winner.innerHTML = "Winner is Player"
        player_score += 1 
    }

}

function decide_winner_paper(){
    if(pc_choice == "Rock"){
        winner.innerHTML = "Winner is Player"
        player_score += 1
    }

    else if(pc_choice == "Paper"){
        winner.innerHTML = "No one wins"
    }

    else if(pc_choice == "Scissors"){
        winner.innerHTML = "Winner is PC"
        pc_score += 1
    }

}

function decide_winner_scissors(){
    if(pc_choice == "Rock"){
        winner.innerHTML = "Winner is PC"
        pc_score += 1
    }

    else if(pc_choice == "Paper"){
        winner.innerHTML = "Winner is Player"
        player_score += 1
    }

    else if(pc_choice == "Scissors"){
        winner.innerHTML = "No one wins"
    }
}