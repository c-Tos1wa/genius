let order = []
let clickedOrder = []
let points = 0;

// ordem das cores: [ 0 - verde, 1 - vermelho, 2 - amarelo, 3 - azul]

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

let shuffle = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
    let elementColor = createColor(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout (() =>{
    element.classList.add('selected');
  }, number - 250)
  setTimeout(() => {
    element.classList.remove('selected');
  })
}

//checa se a ordem clicada é a mesma fornecida pelo jogo
let checkOrder = () => {
  for(let i in clickedOrder){
    if (clickedOrder[i] != order[i]){
      end();
      break;
    }
  }

  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${points}\n Você acertou! Vamos pro próximo nível?`);
    nextLevel();
  }
}

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColor(color).classList.add('selected');

  setTimeout(() => {
    createColor(color).classList.remove('selected');
    checkOrder();
  }, 250)

}

let createColor = (color) => {
  if (color == 0){
    return green;
  } else if (color == 1){
    return red;
  } else if (color == 2){
    return yellow;
  } else if (color == 3){
    return blue;
  }
}

function nextLevel(){
  points++;
  shuffle();
}

let end = () => {
  alert(`Pontuação: ${points}\nVocê perdeu o jogo\nClique em Ok e reinicie!`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  alert('Bem-vindo ao Genius! Iniciando novo jogo')
  points = 0;
  nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();