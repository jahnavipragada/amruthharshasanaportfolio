alert("click ok to throw the dice");

var randomNumber1= (Math.floor(Math.random()*6)+1);

var randomDiceImage = "dice"+ randomNumber1 +".png" ;

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2= (Math.floor(Math.random()*6)+1);

var randomImageSource2 ="images/dice"+randomNumber2+".png" ;

var image2 =  document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2){
  document.querySelector("h2").innerHTML = "Player1 WON";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h2").innerHTML =  "Player2 WON🔥";
}
else{
  document.querySelector("h2").innerHTML ="  DRAW🌝";
}
