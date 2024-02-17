function play(){

    hidden('home-screen');
    hidden('final-score')
    show('play')
    setTextById('currentLife',5);
    setTextById('currentScore',0)
    continewGame()


};



function hidden(getId){

    const id=document.getElementById(getId);
    id.classList.add('hidden')
    
}

function show(getId){
    id=document.getElementById(getId);
    id.classList.remove('hidden')
}

function continewGame(){
    const alphabet= getARandomAlphabet()

    const currentAlphabet=document.getElementById('currentAlphabet');
    currentAlphabet.innerText=alphabet;

    addBackgroundColor(alphabet);



}

function getARandomAlphabet(){

    const  alphabets='abcdefghijklmnopqrstuvwxyz';
    const alphabet=alphabets.split('');


    const randomNumber=Math.random()*25;
    const random=Math.round(randomNumber);


    const alpha=alphabet[random];


    return alpha;

}

function addBackgroundColor(getId){
    const id=document.getElementById(getId);
    id.classList.add('bg-purple-800');

    setTimeout(()=>{
        id.classList.remove('bg-purple-800')
    },2000)
}

function getTextById(getId){
    const getElementById=document.getElementById(getId);
    const text=getElementById.innerText;
    const score=parseInt(text);
    return score;
}
function setTextById(getId,value){

    const text=document.getElementById(getId);
    text.innerText=value;

}

document.addEventListener('keyup',function(e){
    const playerKeyPress=e.key;

    if(playerKeyPress === 'Backspace'){
        overTheGame();
    }


    const currentAlphabet=document.getElementById('currentAlphabet').innerText;
    const expetAlphabet=currentAlphabet.toLocaleLowerCase();

    if(playerKeyPress === expetAlphabet){

        const currentScore=getTextById('currentScore')
        const newScore=currentScore + 1;
        setTextById('currentScore',newScore);

        continewGame()
    }else{
        const lineCureent=getTextById('currentLife');

        const gameOver=lineCureent -1;
        setTextById('currentLife',gameOver);

        if(gameOver === 0){

            overTheGame();

    
        }
    }
})


function overTheGame(){
    hidden('play');
    show('final-score')

    const lastScore=document.getElementById('currentScore');
    console.log(lastScore.innerText);
    setTextById('game-score' , lastScore.innerText)
}
