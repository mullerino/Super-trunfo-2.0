var carta0 = { nome: "Goku", img:"https://sm.ign.com/t/ign_br/screenshot/default/goku_an6e.h720.jpg", atributos: {
    Ataque: 0,
    Defesa: 0,
    Poder: 0,
}
}
var carta1 = { nome: "Vegeta", img:"https://i.pinimg.com/originals/ed/ee/1d/edee1d1c31da5b622aad0c9dd35e9950.jpg", atributos: {
    Ataque: 0,
    Defesa: 0,
    Poder: 0
    }
}
var carta2 = { nome: "Gohan", img:"https://kanto.legiaodosherois.com.br/w600-h600-k1/wp-content/uploads/2015/04/Gohan-02.jpg.jpeg", atributos:{
    Ataque: 0,
    Defesa: 0,
    Poder: 0
    }
}
var carta3 = {nome: "Piccolo", img: "https://ovicio.com.br/wp-content/uploads/2021/09/20210904-piccolo.jpg", atributos: {
    Ataque: 0,
    Defesa: 0,
    Poder: 0,
    }
}
var cartaJog = { nome: "", img: "", atributos: {
        Ataque: 0,
        Defesa: 0,
        Poder: 0,
    }
}

var cartaMaqui = { nome: "", img: "", atributos: {
        Ataque: 0,
        Defesa: 0,
        Poder: 0
    }
}
var cartas = [carta0,carta1,carta2,carta3];
var vitJog = 0;
var vitMaq = 0;

function Iniciar(){
    window.location.href="index1.html";
}

function Sortear(){
    var lugarMaq = document.getElementById("carta-maq");
    lugarMaq.style.backgroundImage= `url()`;

    var apagarR = document.getElementById("result");
    apagarR.innerHTML ="";

    var atri = document.getElementById("subAtt");
    atri.innerHTML = "Escolha o atributo"

    var cartaJogador = parseInt(Math.random() * 4);
    var cartaMaq = parseInt(Math.random()* 4);
    
    while(cartaJogador==cartaMaq){
        cartaMaq = parseInt(Math.random()* 4);
    }
    cartaJog = cartas[cartaJogador];
    cartaMaqui = cartas[cartaMaq];

    DefinirAtts();
    verificarAtt();

    exibirCartaJogador(cartaJog,cartaMaqui);

    document.getElementById("botJogar").disabled = "";
    document.getElementById("botSort").disabled = "false";
}

function exibirCartaJogador(cartaJogd){
    var wriH = "";
    var lugarJog = document.getElementById("carta-jog");
    var lugarMaq = document.getElementById("carta-maq");

    lugarJog.style.backgroundImage= `url(${cartaJogd.img})`;
    var modura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png'" + 
    "style=' width: inherit; height: inherit; position: absolute;'>"
    
    lugarMaq.innerHTML = modura;

    var tagH = "<div id='radios' classe='carta-status'>"
    for(var att in cartaJog.atributos){
        wriH += "<input type='radio'" + "id='rad'" + "name='att' value ='" + att + "'checked>" + att + " " + cartaJog.atributos[att] + "<br>";
    }

    var nomeCart = "<p class='titCarta'>" + cartaJog.nome + "</p>" 

    lugarJog.innerHTML = modura+ nomeCart + tagH + wriH  + "</div>";
}

function exibirAttCM(){
    var wriH ="";
    var lugarMaq = document.getElementById("carta-maq");
    var modura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png'" + 
    "style=' width: inherit; height: inherit; position: absolute;'>"

    lugarMaq.style.backgroundImage= `url(${cartaMaqui.img})`;
    
    var tagH = "<div id='attCM' classe='carta-status'>"
    for(var att in cartaJog.atributos){
        wriH +=  "<label id='attsCm'>" + att + ": " + cartaMaqui.atributos[att] + "</label><br>";
    }

    var nomeCar = "<p class='titCarta'>" + cartaMaqui.nome + "</p>" 

    lugarMaq.innerHTML = modura + nomeCar + tagH + wriH  + "</div>";
}

function Jogar(){
    var RadioT = document.getElementsByName("att");
    var vitJogT = document.getElementById("Pjog");
    var vitMaqT= document.getElementById("Pmaq");
    var resu = document.getElementById("result");
    var i = 0;
    var recebeAtt = "";

        while(RadioT[i].checked == false){
            i++;
        }

        recebeAtt = RadioT[i].value;
        if(cartaJog.atributos[recebeAtt] > cartaMaqui.atributos.Ataque){
            resu.innerHTML = "Você ganhou!!"
            vitJog++;
            vitJogT.innerHTML = vitJog;
        } 
        else if(cartaJog.atributos[recebeAtt] == cartaMaqui.atributos[recebeAtt]){
                resu.innerHTML = "Empate";
        }
        else {
            resu.innerHTML = "Você perdeu";
            vitMaq++;
            vitMaqT.innerHTML = vitMaq;

            }
        exibirAttCM();
        document.getElementById("botJogar").disabled = "false";
        document.getElementById("botSort").disabled = "";
    }


function verificarAtt(){
    while(cartaJog.atributos.Ataque == 0){
        cartaJog.atributos.Ataque = parseInt(Math.random()*11);
    }
    while(cartaJog.atributos.Defesa == 0){
        cartaJog.atributos.Defesa = parseInt(Math.random()*11);
    }
    while(cartaJog.atributos.Poder == 0){
        cartaJog.atributos.Poder = parseInt(Math.random()*11);
    }
    while(cartaMaqui.atributos.Ataque == 0){
        cartaMaqui.atributos.Ataque = parseInt(Math.random()*11);
    }
    while(cartaMaqui.atributos.Defesa == 0){
        cartaMaqui.atributos.Defesa = parseInt(Math.random()*11);
    }
    while(cartaMaqui.atributos.Poder == 0){
        cartaMaqui.atributos.Poder = parseInt(Math.random()*11);
    }
}

function DefinirAtts(){
    cartaJog.atributos.Ataque =  parseInt(Math.random()*11);
    cartaJog.atributos.Defesa =  parseInt(Math.random()*11);
    cartaJog.atributos.Poder =  parseInt(Math.random()*11);
    cartaMaqui.atributos.Ataque =  parseInt(Math.random()*11);
    cartaMaqui.atributos.Defesa =  parseInt(Math.random()*11);
    cartaMaqui.atributos.Poder =  parseInt(Math.random()*11);
}