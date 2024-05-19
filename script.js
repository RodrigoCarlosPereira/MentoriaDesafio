const musica = document.querySelector("#musica");
const capaMusica = document.querySelector("#capaMusica");
const nomeMusica = document.querySelector("#nomeMusica");
const voltarBtn = document.querySelector("#voltar");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const avancarBtn = document.querySelector("#avancar");
const tempoAtual = document.querySelector(".tempoAtual");
const tempoTotal = document.querySelector(".tempoTotal");
const progressBar = document.querySelector("progressBar");
const progress = document.querySelector(".progress");

import songs from "./songs";

const buttonPlay = "<i class='bx bx-play'></i>";
const buttonPause = "<i class='bx bx-pause'></i>";

let index = 0;

voltarBtn.onclick= () => prevNextMusic("prev");
avancarBtn.onclick= () => prevNextMusic();

playBtn.onclick = () => play();

const play = () => {
        musica.play();
        playBtn.classList.toggle("fall");
        pauseBtn.classList.toggle("fall");
    }

const prevNextMusic = (type = "next") => {
    if ((type == "next" && index + 1 === songs.length) || 
type === "init") {
    index = 0;
} else if (type == "prev" && index === 0) {
    index = songs.length;
} else {
    index = type === "prev" && index ? index - 1 : index + 1;
}
musica.scr = songs[index].src;
nomeMusica.innerHTML = songs[index].name;
if (type !== "init") play();
};



prevNextMusic("init");