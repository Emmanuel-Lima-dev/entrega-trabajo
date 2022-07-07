//efecto al scrollear en la sección historia

const parrafo1=document.querySelectorAll(".cont-text-his");
const card=document.querySelectorAll(".card");

window.addEventListener("scroll", ()=>{

    for (let i = 0; i < parrafo1.length; i++) {

        let distancia = parrafo1[i].getBoundingClientRect().top;
        let altura = window.innerHeight;

        if (distancia<altura) {
             parrafo1[i].classList.add("aparece");
        } else {
             parrafo1[i].classList.remove("aparece");
        }
    }

//efecto en las cards seccion inicio

    for (let i = 0; i < card.length; i++) {

        let distancia = card[i].getBoundingClientRect().top;
        let altura = window.innerHeight;

        if (distancia<altura) {
             card[i].classList.remove("cardEfect");
        } else {
             card[i].classList.add("cardEfect");
        }
    }
});

const video=document.querySelector("#video-his");
const btnPlay=document.querySelector("#btn-play");
const btnPause=document.querySelector("#btn-pause");

//controles de video


btnPlay.addEventListener("click", ()=>{
     video.play();
});

btnPause.addEventListener("click", ()=>{
     video.pause()
});

