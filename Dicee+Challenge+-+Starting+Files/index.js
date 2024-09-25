var randomNumber1 =  Math.floor(Math.random() * 6) + 1;
var randomNumber2 =  Math.floor(Math.random() * 6) + 1;
var diceImage1 = "dice" +  randomNumber1 +".png";
var diceImage2 = "dice" +  randomNumber2 +".png";
var source1 = "./images/" +  diceImage1;
var source2 = "./images/" +  diceImage2;
var  image1 = document.querySelectorAll("img")[0].setAttribute("src",source1);
var  image2 = document.querySelectorAll("img")[1].setAttribute("src",source2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else  if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent = "It's a Draw!";
}
