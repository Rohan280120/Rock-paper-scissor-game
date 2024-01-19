let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userCurrentScore=document.querySelector("#user-score");
let compCurrentScore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];

}
const DrawGame=()=>{
    console.log("Game was drawn play again");
    msg.innerText="Game was drawn";
    msg.style.backgroundColor="#081b31";



}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){

        console.log("You win");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userCurrentScore.innerText=userScore;
    }
    else{
        console.log("You lose");       
         msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
         compScore++;
         msg.style.backgroundColor="red";

         compCurrentScore.innerText=compScore

    }
}
const playgame=(userChoice)=>{
    const compChoice=genCompChoice();
    console.log("Your Choice =", userChoice);
    console.log("Comp Choice =", compChoice);
    if(userChoice==compChoice){
        DrawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="scissors"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    



}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
        playgame(userChoice);
    });
    
});