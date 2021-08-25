//kuvera
const arr = new Array(100);
let player1 = {
    position: 0,
}

let player2 = {
    position: 0,
}

let turn = "player1";

const snacks = [
    {
      from: 12,
      to: 5
    },
    {
        from: 82,
        to: 10
    },
]

const ladder = [
    {
        from: 7,
        to: 31
    },
    {
        from: 21,
        to: 51
    }
]

const dice = (Math.random() * 6);


function updatePositionAndPlayer(player, diceValue){
   player.position = player.position + diceValue;
   turn = "player1" ? "player2" : "player1";
}

//0 player1 => updatePositionPlayer(player1, 3) , 3
//0 player2 => updatePositionPlayer(player2, 6) , 3
// //0 player1 => updatePositionPlayer(player2, 4) , 7, 

function checkPosition(position, arr){
    const requiredPos =  arr.find((item) => item.from === position);
    return requiredPos || position;
}

function snackBiteOrheight(ladder, snack, position, player){
    let snackPos = checkPosition(snack, position);
    if(snackPos !== position){
       player.position = snackPos;
    } else {
        let ladderPos = checkPosition(ladder, position);
        player.position = ladderPos;
    }
}


