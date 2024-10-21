let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");


const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText = "Game Draw!!";
    msg.style.backgroundColor = "grey";
    msg.style.color = "black";
}

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose, Comp ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
} 

const playGame = (userChoice) => {
    console.log("user choise = ",userChoice);
    const compChoice = genComChoice();
    console.log("comp Choice ", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    } else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true; 
        } else if(userChoice === "paper")
        {
            userWin = compChoice === "scissor" ? false : true;
        }else
        {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    })
})