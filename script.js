const playerInfo = document.getElementById("playerInfo");
const playersInfoList = document.getElementById("player-list");


let playerList = [];

/************************************************************************ 

 playerlistSort function will show the sorted palyer list everytime a player score changes

*************************************************************************/


function playerlistSort(){
    playerList.sort((player1,player2) => player2.score - player1.score);

    playersInfoList.innerHTML = "";


    playerList.forEach((player) => {
        let liEl = document.createElement("li");
        let name = document.createElement("span");
        let score = document.createElement("span");
        let country = document.createElement("span");
        let deleteBtn = document.createElement("button");
        let scoreChangerDiv = document.createElement("div");

        name.innerText = player.name;
        score.innerText = player.score;
        country.innerText = player.country;

        deleteBtn.innerHTML = `
        <img src="./delete.png" class="deleteBtnImg">
    `


        scoreChangerDiv.innerHTML = `
            <button class="decrease">-5</button>
            <button class="increase">+5</button>
        `

        liEl.append(name,score,country,deleteBtn,scoreChangerDiv);

        liEl.classList.add("card");

        playersInfoList.appendChild(liEl);


    });   
}

/**************************************************************************
 scoreChange function will update the score of the player according to the button that has been pressed by user

 @param {String} playerName - name of the player whose score is to be updated

 @param {String} changeType - should the score be increased or decreased. If value is increase corresponding players score will be increased by 5 , if value is decrease corresponding players score will be decreased by 5
 **************************************************************************/


function scoreChange(playerName,changeType){

    playerList.forEach((player) => {

        if(player.name === playerName){

            if(changeType === "increase"){
                player.score += 5;
            } else {
                player.score -= 5;
            }

        }

    })

}


/**************************************************************************
 isNameAvailabe checks if the name given in the input is already present in the playerDataList array 

 @param {String} playerName - the name that is given in the input 
***************************************************************************/

function isNameAvailable(playerName){

    let available = true;

    playerList.forEach((player) => {

        if(player.name === playerName){

            available = false;

        }

    })

    return available;
}


playerInfo.addEventListener("submit",(event) => {

    event.preventDefault();

    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const country= document.querySelector("#country");
    const score = document.querySelector("#score");

    let player = {
        name : `${firstName.value} ${lastName.value}`.trim(),
        country : country.value,
        score : Number(score.value)
    }

    if(!isNameAvailable(player.name)){

        alert("Player already exists in leader board");

    } else {

        playerList.push(player);

        playerlistSort();

    }

    firstName.value = "";
    lastName.value = "";
    country.value = "";
    score.value = "0";
})

playersInfoList.addEventListener("click",(e)=>{

    if(e.target.className === "deleteBtnImg"){

        let playerToBeDeleted = e.target.parentNode.parentNode.children[0].innerText;
        playerList = playerList.filter((player) => {
            if(player.name === playerToBeDeleted){
                return false;
            } else {
                return true;
            }
        })

        playerlistSort();

    } else if(e.target.className === "increase" || e.target.className === "decrease"){

        let playerName = e.target.parentNode.parentNode.children[0].innerText;
        
        scoreChange(playerName , e.target.className);
        playerlistSort();
    }
})