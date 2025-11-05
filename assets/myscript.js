const audio=document.getElementById("song");
const playB=document.getElementById("play")
playB.addEventListener("click", function(){
console.log("hej");
    if(audio.paused){
    audio.play();
    playB.style.display="none";
}

});