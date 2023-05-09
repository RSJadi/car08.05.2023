let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  //quantidade: 1,
  valor: 11.66,
};

const addButton = document.getElementById("btn-adicionar-produto-01");
const subButton = document.getElementById("btn-subtrair-produto-01");
const input = document.getElementById("quantidade-produto-01");


function updateSubTotal(quantidadeItens) {
  
  valorSubtotal.innerText = (subtotalInfo.valor * input.value).toFixed(2);
  if(input.value == 1){
    quantidadeSubtotal.innerText = `${quantidadeItens} item`;
  } else{
    quantidadeSubtotal.innerText = `${quantidadeItens} itens`;
  }
}

function itemsAdd() {
  input.value = Number(input.value) + 1;

  updateSubTotal(input.value);
}

function itemsSub(){
  if(input.value > 0) {

    input.value = Number(input.value) - 1;
    updateSubTotal(input.value);
  }
  
}

addButton.addEventListener("click", () => itemsAdd());

subButton.addEventListener("click", () => itemsSub());