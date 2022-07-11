import cards from "../assets/cards.js";
const card = JSON.parse(localStorage.getItem("Card"));
const categoryContainer = document.createElement("div");
categoryContainer.className = "category-container";
let soundBank = [];
for (let i = 0; i < card.length; i++) {
  const category = document.createElement("div");
  const categoryImage = document.createElement("img");
  categoryImage.className = "card-img";
  const categoryName = document.createElement("p");
  categoryName.className = "card-name";
  category.className = "card";
  categoryImage.src = "../assets/" + card[i].image;
  soundBank.push("../assets/" + card[i].audioSrc);
  category.onclick = ()=>{
    let audio = new Audio("../assets/" + card[i].audioSrc);
    audio.play();
  }
  categoryName.innerHTML = `${card[i].word}`;
  category.appendChild(categoryName);
  category.appendChild(categoryImage);
  categoryContainer.appendChild(category);
}
const main = document.getElementById("main-container");
main.appendChild(categoryContainer);
class Card {
  constructor(sounds) {
    this.sounds = sounds;
    this.counter = 0;
    this.randomSounds = this.randomizeMp3(sounds);
  }
  randomizeMp3(data) {
    let randomSounds = [];
    while (randomSounds.length < 8) {
      let randomNum = Math.floor(Math.random() * 8);
      if (randomSounds.includes(data[randomNum])) {
      } else {
        randomSounds.push(data[randomNum]);
      }
    }
    return randomSounds;
  }
  playSound() {
    console.log("play");
    let audio = new Audio(this.randomSounds[this.counter]);
    audio.play();
    this.counter++;
    if (this.counter > 7) {
      this.counter = 0;
    }
  }
}
const cardTest = new Card(soundBank);
const buttonPlay = document.getElementById("play-btn-id");
const audio = new Audio("../assets/audio/dance.mp3");
buttonPlay.addEventListener("click", function () {
  cardTest.playSound();
});
const ankorLinks = document.getElementsByClassName("ankor");
console.log(ankorLinks);
for (let i = 1; i < cards.length; i++) {
  ankorLinks[i-1].onclick = () => {
    localStorage.setItem("Card", JSON.stringify(cards[i]));
    window.location = "../pages/category.html";
  };
}

const mainpage = document.getElementsByClassName("mainpage");
console.log(mainpage);
for (let i = 1; i < cards.length; i++) {
  mainpage[i-1].onclick = () => {
    localStorage.setItem("Card", JSON.stringify(cards[i]));
    window.location = "../pages/index.html";
  };
}