const imagens = ['../img/toyota-supra-velozes-e-furiosos-1.jpg', '../img/Dodge-Charger-Facts-_-Cover-22-7-22-1.jpg', '../img/images.jpg']
let index = 0;


function trocarImagem() {
    imagemSlider.style.backgroundImage = `url('${imagens[index]}')`;
    index = (index + 1) % imagens.length;
}

const intervalo = setInterval(trocarImagem, 5500);