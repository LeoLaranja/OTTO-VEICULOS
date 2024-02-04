//INÍCIO SETAS DIREITA

function cardsDireita(){
    let cards = document.querySelector(".cards");
    cards.classList.add("displaynone1")
    cards.classList.remove("cards")
}
function cardsDireita1(){
    let cards2 = document.querySelector(".cards2");
    cards2.classList.add("displayflex")
    cards2.classList.remove("cards2")
    
}

//-------------------------------------------------------

function cards2Direita(){
    let cards = document.querySelector(".displayflex");
    cards.classList.add("displaynone2")
    cards.classList.remove("displayflex")
}
function cards2Direita2(){
    let cards3 = document.querySelector(".cards3");
    cards3.classList.add("displayflex")
    cards3.classList.remove("cards3")
}

//-------------------------------------------------------

function cards3Direita(){
    let cards3 = document.querySelector(".displayflex")
    cards3.classList.remove("displayflex");
    cards3.classList.add("displaynone3")
}
function cards3Direita3(){
    let cards4 = document.querySelector(".cards4");
    cards4.classList.remove("cards4")
    cards4.classList.add("displayflex")
}

//-------------------------------------------------------

function cards4Direita(){
    let displaynone1 = document.querySelector(".displaynone1");
    let displaynone2 = document.querySelector(".displaynone2");
    let displaynone3 = document.querySelector(".displaynone3");
    displaynone1.classList.remove("displaynone1")
    displaynone1.classList.add("cards")
    displaynone2.classList.remove("displaynone2")
    displaynone2.classList.add("cards2")
    displaynone3.classList.remove("displaynone3")
    displaynone3.classList.add("cards3")
}
function cards4Direita4(){
    let displayflex = document.querySelector(".displayflex")
    displayflex.classList.remove("displayflex")
    displayflex.classList.add("cards4")
}

//-------------------------------------------------------
//FIM SETAS DIREITA


//INÍCIO SETAS ESQUERDA
function cards4Esquerda(){
    let displayflex = document.querySelector(".displayflex")
    displayflex.classList.remove("displayflex")
    displayflex.classList.add("cards4")
}

function cards4Esquerda4(){
    let displaynone3 = document.querySelector(".displaynone3")
    displaynone3.classList.remove("displaynone3")
    displaynone3.classList.add("displayflex")
}

//-------------------------------------------------------

function cards3Esquerda(){
    let displayflex = document.querySelector(".displayflex")
    displayflex.classList.remove("displayflex")
    displayflex.classList.add("cards3")
}

function cards3Esquerda3(){
    let displaynone2 = document.querySelector(".displaynone2")
    displaynone2.classList.remove("displaynone2")
    displaynone2.classList.add("displayflex")
}

//-------------------------------------------------------

function cards2Esquerda(){
    let displayflex = document.querySelector(".displayflex")
    displayflex.classList.remove("displayflex")
    displayflex.classList.add("cards2")
}

function cards2Esquerda2(){
    let displaynone1 = document.querySelector(".displaynone1")
    displaynone1.classList.remove("displaynone1")
    displaynone1.classList.add("cards")
}

//-------------------------------------------------------

function cardsEsquerda(){
    let cards = document.querySelector(".cards")
    let cards2 = document.querySelector(".cards2")
    let cards3 = document.querySelector(".cards3")
    cards.classList.remove("cards")
    cards.classList.add("displaynone1")
    cards2.classList.remove("cards2")
    cards2.classList.add("displaynone2")
    cards3.classList.remove("cards3")
    cards3.classList.add("displaynone3")
}

function cards1Esquerda1(){
    let cards4 = document.querySelector(".cards4")
    cards4.classList.remove("cards4")
    cards4.classList.add("displayflex")
}

//FIM SETAS ESQUERDA

//-------------------------------------------------------

function abrir(){
    let ul = document.querySelector("header ul")
    ul.classList.add("open")
}

function fechar(){
    let ul = document.querySelector("header ul");
    ul.classList.remove("open")
}
//-------------------------------------------------------

const resultCar = document.getElementById('result-car');
const cards = document.getElementById('cards');
const searchInput = document.getElementById('search-input');


function requestApi(searchTerm) {
    fetch(`http://localhost:5000/car?name_like=${searchTerm}`)
      .then((response) => response.json())
      .then((results) => displayResults(results));
  }
  
  function displayResults(results) {
    hidePlaylists();
    const carImage = document.getElementById("car-img");
    const carName = document.getElementById("car-name");
  
    results.forEach((element) => {
      carImage.src = element.urlImg;
      carName.innerText = element.name;
    });
    resultCar.classList.remove("hidden");
  }
  
function hidePlaylists() {
    cards.classList.add("hidden");
  }

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === ""){
        resultCar.classList.add('hidden');
        cards.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
})


