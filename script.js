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
import musicas from './musicas.js';

const buttonPlay = "<i class='bx bx-play'></i>";
const buttonPause = "<i class='bx bx-pause'></i>";

let index = 0;

voltarBtn.onclick= () => prevNextMusic("prev");
avancarBtn.onclick= () => prevNextMusic();

playBtn.onclick = () => tocar();
pauseBtn.onclick = () => pausar();

const tocar = () => {
        musica.play();
        playBtn.classList.toggle("fall");
        pauseBtn.classList.toggle("fall");     
    }
const pausar = () => {
       musica.pause();
       playBtn.classList.toggle("fall");
       pauseBtn.classList.toggle("fall");
    }
const avancar = () => {
    musica.play();
    playBtn.classList.add("fall");
    pauseBtn.classList.remove("fall");
}

const prevNextMusic = (type = "next") => {
    if ((type == "next" && index + 1 === musicas.length) || 
type === "init") {
    index = 0;
} else if (type == "prev" && index === 0) {
    index = musicas.length;
} else {
    index = type === "prev" && index ? index - 1 : index + 1;
}
musica.src = musicas[index].src
nomeMusica.innerHTML = musicas[index].name;
capaMusica.src = musicas[index].img;
if (type !== "init") avancar();
};



prevNextMusic("init");