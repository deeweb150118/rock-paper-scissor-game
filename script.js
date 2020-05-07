let userScore=0;
let compScore=0;
let userScore_span=document.getElementById("user-score");
let compScore_span=document.getElementById("comp-score");
let scoreBoard_div=document.querySelector(".score-board");
let result_div=document.querySelector(".result > p");
let rock_div=document.getElementById("r");
let paper_div=document.getElementById("p");
let scissor_div=document.getElementById("s");
const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
const compChoice=()=>{
    const choice=['r','p','s'];
  let randomNumber=Math.floor(Math.random()*3)
  return choice[randomNumber]
}
const convertToWord=(letter)=>{
  if(letter==='r'){
      return "Rock"
  }
  if(letter==='p'){
    return "Paper"
}
return "Scissor"
}
const win=(userChoice,computerChoice)=>{
    userScore++;
    userScore_span.innerHTML=userScore
    compScore_span.innerHTML=compScore
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_div.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}.You Win!!!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(()=>{    document.getElementById(userChoice).classList.remove("green-glow")},1000)
}
const lose=(userChoice,computerChoice)=>{
    compScore++;
    compScore_span.innerHTML=compScore
    userScore_span.innerHTML=userScore
    result_div.innerHTML=`${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}.You Lose`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(()=>{document.getElementById(userChoice).classList.remove("red-glow")},1000)
}
const draw=(userChoice,computerChoice)=>{
   result_div.innerHTML=`${convertToWord(computerChoice)}${smallCompWord} equals  ${convertToWord(userChoice)}${smallUserWord}.Oops Its a tie. `
   document.getElementById(userChoice).classList.add("gray-glow");
   setTimeout(()=>{document.getElementById(userChoice).classList.remove("gray-glow")},1000)
}

const game=(userChoice)=>{
  let computerChoice=compChoice();
  switch(userChoice+computerChoice){
      case "pr":
      case "sp":
      case "rs":
         win(userChoice,computerChoice);
          break;
       case "rp":
       case "ps":
       case "sr": 
         lose(userChoice,computerChoice);
       break;
       case "rr":
        case "pp":
        case "ss": 
        draw(userChoice,computerChoice);
        break;
    }

}


const main=()=>{
rock_div.addEventListener("click",()=>{
    game("r");
})
paper_div.addEventListener("click",()=>{
    game("p");
})
scissor_div.addEventListener("click",()=>{
    game("s");
})
}
main();