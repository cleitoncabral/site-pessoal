const nav = document.querySelectorAll('.nome');
const botoes = document.querySelectorAll('input');

class Rolar {
    constructor(links) {
        this.linkElements = document.querySelectorAll(links);
        this.AddClickEvent()
    }
    clique(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }
    AddClickEvent() {
        this.linkElements.forEach(link => {
            link.addEventListener("click", this.clique);
        });
    }
}
const rolagem = new Rolar("[href^='#']");

function mudarBorda(cor){
    input.className = cor;
}

function inciar(){
    botoes.addEventListener("click", function(){
        mudarBorda("black");
    });
}

window.onload = iniciar;
