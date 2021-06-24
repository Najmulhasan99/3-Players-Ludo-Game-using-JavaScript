var RandomNum1 = Math.floor(Math.random()*6)+1;
var randomImageSource1 = "images/dice" + RandomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);


var RandomNum2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + RandomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

var RandomNum3 = Math.floor(Math.random()*6)+1;
var randomImageSource3 = "images/dice" + RandomNum3 + ".png";
document.querySelectorAll("img")[2].setAttribute("src",randomImageSource3);





if(RandomNum1>RandomNum2 && RandomNum1>RandomNum3){
    document.querySelector("h1").innerHTML="Najmul Wins";
}
else if(RandomNum2>RandomNum1 && RandomNum2>RandomNum3){
    document.querySelector("h1").innerHTML="Rishu Wins";
}
else if(RandomNum3>RandomNum1 && RandomNum3>RandomNum2){
    document.querySelector("h1").innerHTML="Titli Wins";
}
else{
    document.querySelector("h1").innerHTML="Match Draw";
}


