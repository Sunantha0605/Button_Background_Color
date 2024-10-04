function changeColor(color){
    document.body.style.backgroundColor=color;
    document.getElementById(color).style.backgroundColor=color;   
}
function resetColor(){
    document.body.style.backgroundColor='';
    document.querySelector("#red").style.backgroundColor='';
    document.querySelector("#blue").style.backgroundColor='';
    document.querySelector("#green").style.backgroundColor='';
}

