let compScore=0
let userScore=0
let res=''
let options = ['stone','paper','scissor']
function userTurn(value){
    let comp = Math.floor(Math.random() * 3)
    let compRes = options[comp]
    let userRes = options[value]
    if(compRes=='stone' && userRes=='paper')
    {
        res = "paper defeat stone !! You win";
        userScore++;
    }
    if(compRes=='paper' && userRes=='paper')
    {
        res = "Tie !!!";
    }
    if(compRes=='scissor' && userRes=='paper')
    {
        res = "scissors cut paper !! You loose";
        compScore++;
    }
    if(compRes=='stone' && userRes=='stone')
    {
        res = "Tie !!";
    }
    if(compRes=='paper' && userRes=='stone')
    {
        res = "Paper defeat Stone !! You Loose";
        compScore++;
    }
    if(compRes=='scissor' && userRes=='stone')
    {
        res = "stone breaks scissors !! You win";
        userScore++;
    }
    if(compRes=='stone' && userRes=='scissor')
    {
        res = "stone breaks scissors !! You loose";
        compScore++;
    }
    if(compRes=='paper' && userRes=='scissor')
    {
        res = "scissors cut paper !! You Win";
        userScore++;
    }
    if(compRes=='scissor' && userRes=='scissor')
    {
        res = "Tie !!!";
    }
    document.querySelector('.user').innerHTML = userScore;
    document.querySelector('.comp').innerHTML = compScore;
    document.querySelector('.res').innerHTML = res;
    document.querySelector('.compOpt').innerHTML = compRes;
    document.querySelector('.userOpt').innerHTML = userRes;
}