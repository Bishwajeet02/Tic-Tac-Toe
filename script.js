let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector('#reset-btn');
let newGamebtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

//Do player hai Playr0 and PlayerX

let turn0=true; //playerX ,player0
let count=0;
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]

];
const resetGame= () =>{
turn0=true;
enableBoxes();
msgContainer.classList.add("hide");
count=0;
}



boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("box clicked");
        // box.innerText="X"
if(turn0){
    box.innerText="O";
    
    turn0=false;
  box.style.color="blue";
}
else{
    box.innerText="X";
    turn0=true;
}
box.disabled=true; // dubara button pe click karne par value change na ho
count++;
// checkWinner();
let isWinner = checkWinner();

if (count === 9 && !isWinner) {
  gameDraw();
}

    });
});

// winner milne k bad button click na ho
const disableBoxes= () => {
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };


  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const showWinner= (winner)  => {
    msg.innerHTML=`Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
disableBoxes();


};

const checkWinner = () => {
    for(let pattern of winPatterns){
       // console.log(pattern[0], pattern[1], pattern[2]);
      
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]); // boxes wale array k andar pattern[0] ,1 ,2 index pe jao
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
let pos1Val= boxes[pattern[0]].innerText;
let pos2Val= boxes[pattern[1]].innerText;
let pos3Val= boxes[pattern[2]].innerText;


if(pos1Val !="" && pos2Val!="" && pos3Val !=""){
    if(pos1Val==pos2Val && pos2Val==pos3Val){
        console.log("winner" ,pos1Val);


        //winnershow karne k liye function


        showWinner(pos1Val);

    }
}

    }
};



newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);