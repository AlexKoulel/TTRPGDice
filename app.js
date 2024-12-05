const result = document.getElementById("result");
var sidesSelect = document.getElementById("sides");
var sides = sidesSelect.value;
const rollButton = document.getElementById("rollButton");
var isRolling = false;

sidesSelect.addEventListener("change",function(){
  console.log("Value:"+ sides);
  sides = document.getElementById("sides").value;
});

rollButton.addEventListener("click", () => {
  result.classList.remove("fadeIn");
  void result.offsetWidth;
  result.classList.add("fadeIn");
  switch (sides) {
    case "d4":
      sides = 4;
      break;
    case "d6":
      sides = 6;
      break;
    case "d8":
      sides = 8;
      break;
    case "d10":
      sides = 10;
      break;
    case "d12":
      sides = 12;
      break;
    case "d20":
      sides = 20;
      break;
  }
  getRandomNumber(sides);
});

function getRandomNumber(sides) {
  sidesSelect.disabled = true;
  rollButton.disabled = true;
  var randomNumber = Math.floor(Math.random() * sides + 1);
  console.log("rolling...");
  isRolling = true;

  const interval = setInterval(() => {
    if (isRolling) {
      result.textContent = Math.floor(Math.random() * sides + 1);
    }
  }, 10); 

  setTimeout(() => {
    clearInterval(interval);
    isRolling = false;
    result.textContent = randomNumber;
    console.log("rolled:" + randomNumber);
    sidesSelect.disabled = false;
    rollButton.disabled= false;
  }, 2800);
}