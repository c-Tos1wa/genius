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