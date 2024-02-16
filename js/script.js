function play(){

    hidden('home-screen')
    show('play')
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
