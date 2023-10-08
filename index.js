
var randomNumber1=Math.floor(6*Math.random())+1;
var randomdiceimg="images/dice"+randomNumber1+".png";
var imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",randomdiceimg);

var randomNumber2=Math.floor(6*Math.random())+1;
var randomdiceimg="images/dice"+randomNumber2+".png";
var imag2=document.querySelectorAll("img")[1];
imag2.setAttribute("src",randomdiceimg);
//document.querySelector(img1).textContent()
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="player1 winner";
    // document.querySelector("p").classList.toggle("hide")
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="player2 winner";
}
else{
    document.querySelector("h1").textContent="draw";
}