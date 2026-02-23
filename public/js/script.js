const botao = document.querySelector(".botao");
const backgroud = document.querySelector(".background");
const buttonContainer = document.querySelector(".buttonContainer");

const audio = new Audio("audios/animals-auuuuuuuuuu.mp3");

botao.addEventListener(
  "click",
  () => {
    audio.play();
    backgroud.classList.toggle("animatedFadeIn");
    buttonContainer.classList.toggle("animatedFadeOut");
  },
  { once: true },
);
