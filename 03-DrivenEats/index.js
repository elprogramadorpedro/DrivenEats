let sum = 0;
let orderchoice;
let valorfood;
let priceorder;

function selectionfood(produtosx) {
  const selectionold = document.querySelector(".fooda .border");
  console.log(produtosx);
  if (selectionold !== null) {
    selectionold.classList.remove("border");
    sum = sum - 1;
  }
  const nselect = document.querySelector(produtosx);
  console.log(nselect);
  nselect.classList.add("border");
  sum = sum + 1;
}

function selectiondrink(produtosx) {
  const selectionold = document.querySelector(".drinking .border");
  console.log(produtosx);
  if (selectionold !== null) {
    selectionold.classList.remove("border");
    sum = sum - 1;
  }
  const nselect = document.querySelector(produtosx);
  console.log(nselect);
  nselect.classList.add("border");
  sum = sum + 1;
}

function selectionsweet(produtosx) {
    const selectionold = document.querySelector(".sweet .border");
    console.log(produtosx);
    if (selectionold !== null) {
      selectionold.classList.remove("border");
      sum = sum - 1;
    }
    const nselect = document.querySelector(produtosx);
    console.log(nselect);
    nselect.classList.add("border");
    sum = sum + 1;
  }
  