let userscore = 0;
let compscore=0;

const choices=document.querySelectorAll(".choice img");
const msg=document.querySelector(".msg");
const userScore=document.querySelector("#user");
const compScore=document.querySelector("#system");
const refresh=document.querySelector("#refresh");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const ranidx=Math.floor(Math.random() * 3);
    return options[ranidx]; 

};

const draw=()=>{
    msg.innerText="Game was draw! Play again";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
};

const showWinner=(userwin)=>{
    if(userwin){
        userscore+=1;
        userScore.innerText=userscore;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        msg.style.removeProperty("color");
    }        
    else {
        compscore+=1;
        compScore.innerText=compscore;
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
        msg.style.removeProperty("color");
    }
          
};


const startagain=()=>{
    userscore = 0;
    compscore=0;
    userScore.innerText=userscore;
    compScore.innerText=compscore;
    msg.innerText = "ROCK PAPER SCISSOR";
    msg.style.backgroundColor="orange";
    msg.style.removeProperty("backgroundColor");
    msg.style.removeProperty("color");
};

const playgame=(userChoice)=>{
         const compChoice=genCompChoice();
         if(userChoice===compChoice){
             //draw
             draw();
         }else{
            let userwin=true;
            if(userChoice==="rock"){
                 userwin= compChoice==="paper"?false:true;
            } else if(userChoice==="paper"){
                userwin= compChoice==="scissor"?false:true;   
            }else{
                userwin= compChoice==="rock"?false:true;
            }
            showWinner(userwin);
         }
         
         
};

function initialiseGame(){
    choices.forEach((choice)=>{
        choice.addEventListener("click" , () => {
           const userChoice = choice.getAttribute("id");
           playgame(userChoice);
        });
   
   });
   
}

refresh.addEventListener("click",startagain);
 initialiseGame();



