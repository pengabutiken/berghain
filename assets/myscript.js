const audio=document.getElementById("song");
const playB=document.getElementById("play")
const higher=document.getElementById("higher");
const lower=document.getElementById("lower");

playB.addEventListener("click", function(){
console.log("hej");
    if(audio.paused){
    audio.play();
    playB.style.display="none";

    lower.style.display="block";
    higher.style.display="block";

}

});