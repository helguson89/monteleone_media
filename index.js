var spiller1_log = [];
var spiller2_log = [];
var spiller1_count = 0;
var spiller2_count = 0;

var button = document.getElementById("btn");

button.onclick = function() {



  var randomNumber1 = Math.floor(Math.random()*6+1);
  var randomNumber2 = Math.floor(Math.random()*6+1);

  var image1 = document.querySelectorAll("img")[0];
  var image2 = document.querySelectorAll("img")[1];

spiller1_log.push(randomNumber1);
spiller2_log.push(randomNumber2);

  var randomDiceImage = "images/dice" + randomNumber1 + ".png";
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";


  image1.setAttribute("src", randomDiceImage);


  image2.setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Spiller 1 vant!"
    spiller1_count ++;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Spiller 2 vant!🚩"
    spiller2_count ++;
  } else {
    document.querySelector("h1").textContent = "Uavgjort!"
  };

document.querySelector("#spiller1_log").textContent = "Siste kast: " + spiller1_log;
document.querySelector("#spiller2_log").textContent = "Siste kast: " + spiller2_log;
document.querySelector("#spiller1_count").textContent = "Seiere: " + spiller1_count;
document.querySelector("#spiller2_count").textContent = "Seiere: " + spiller2_count;
}
