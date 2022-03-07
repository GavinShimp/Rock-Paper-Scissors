let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice()
{
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice}${"user".fontsize(3).sub()} beats ${computerChoice}${"comp".fontsize(3).sub()}. You Win!`;
    userChoice_div.classList.add("green-glow")
    setTimeout(()=> userChoice_div.classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice}${"user".fontsize(3).sub()} loses to ${computerChoice}${"comp".fontsize(3).sub()}. You Lose!`;
    userChoice_div.classList.add("red-glow")
    setTimeout(()=> userChoice_div.classList.remove("red-glow"), 500);
}

function draw(userChoice, computerChoice)
{
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice}${"user".fontsize(3).sub()} equals ${computerChoice}${"comp".fontsize(3).sub()}. It's a draw!`;
    userChoice_div.classList.add("gray-glow")
    setTimeout(()=> userChoice_div.classList.remove("gray-glow"), 500);
}

function game(userChoice)
{
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice)
    {
        case "Rock" + "Scissors":
        case "Paper" + "Rock":
        case "Scissors" + "Paper":
            win(userChoice, computerChoice);
            break;
        case "Scissors" + "Rock":
        case "Rock" + "Paper":
        case "Paper" + "Scissors":
            lose(userChoice, computerChoice);
            break;
        case "Rock" + "Rock":
        case "Paper" + "Paper":
        case "Scissors" + "Scissors":
            draw(userChoice, computerChoice);
            break;             
    }
}

function main()
{
    rock_div.addEventListener("click", ()=> game("Rock"));

    paper_div.addEventListener("click", ()=> game("Paper"));

    scissors_div.addEventListener("click", ()=> game("Scissors"));
}

main();