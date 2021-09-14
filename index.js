var order = []
var orderClicked = []
var points = 0;

// ordem das cores: [ 0 - verde, 1 - vermelho, 2 - amarelo, 3 - azul]

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

let shuffle = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  orderClicked = [];

  for(let i in order){
    let elementColor = createColor(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

function lightColor(element, number){
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250)

  setTimeout(() => {
    element.classList.remove('selected')
  })
}

let checkOrder = () => {
  for(let i in orderClicked){
    if (orderClicked[i] !== order[i]){
      lose();
      break;
    }

    if(orderClicked.length == order.length){
      alert(`Pontuação: ${points}\n Você acertou! Vamos pro próximo nível?`);
      nextLevel();
    }
  }
}

let click = (color) => {
  orderClicked[orderClicked.length] = color;
  createColor.classList.add('selected');

  setTimeout(() => {
    createColor(color).classList.remove();
  })

  checkOrder();
}