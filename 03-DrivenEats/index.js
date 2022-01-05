let sum = 0;
let orderchoice;
let drinkingchoice;
let sweetchoice;
let priceorder;
let pricedrinking;
let pricesweet;
let priceordertotal = 0;

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
  closing();

  const itemorder = document.querySelector(".fooda .border .tile-order");
  orderchoice = itemorder.innerHTML;
  const itempriceorder = document.querySelector("fooda .border .price");
  priceorder = itempriceorder.innerHTML;
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
  closing();

  const itemdrinking = document.querySelector(".drinking .border .tile-order");
  drinkingchoice = itemdrinking.innerHTML;
  const itempricedrinking = document.querySelector("drinking .border .price");
  pricedrinking = itempricedrinking.innerHTML;
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
  closing();

  const itemsweet = document.querySelector(".sweet .border .tile-order");
  sweetchoice = itemsweet.innerHTML;
  const itempricesweet = document.querySelector("sweet .border .price");
  pricesweet = itempricesweet.innerHTML;
}

function closing() {
  if (sum === 3) {
    const result = document.querySelector(" .footer .button .box-text");
    result.innerHTML = "Fechar pedido";
  }
  if (sum === 3) {
    const result = document.querySelector(".button");
    result.classList.add("close");
  }
}

function readyorder() {
  const disaggregate = document.querySelector(".change-confirm-order");

  disaggregate.classList.remove("order-hidden");

  const disaggregater = document.querySelector(".confirm");

  disaggregater.classList.remove("order-hidden");

  const addchange = document.querySelector(".change-confirm-order");

  addchange.classList.add("opacity");

  priceorder = priceorder.replace("R$", "");

  priceorder = priceorder.replace(",", ".");

  priceorder = parseFloat(priceorder);

  pricedrinking = pricedrinking.replace("R$", "");

  pricedrinking = pricedrinking.replace(",", ".");

  pricedrinking = parseFloat(pricedrinking);

  pricesweet = pricesweet.replace("R$", "");

  pricesweet = pricesweet.replace(",", ".");

  pricesweet = parseFloat(pricesweet);

  priceordertotal = (priceorder + pricedrinking + pricesweet).toFixed(2);

  const orderdelivery = document.querySelector(".confirm .order-name");

  orderdelivery.innerHTML = orderchoice;

  const orderdelivery_b = document.querySelector(".confirm .order-price");

  orderdelivery_b.innerHTML = priceorder;

  const drinkingdelivery = document.querySelector(".confirm .drinking-name");

  drinkingdelivery.innerHTML = drinkingchoice;

  const drinkingdelivery_b = document.querySelector(".confirm .drinking-price");

  drinkingdelivery_b.innerHTML = pricedrinking;

  const sweetdelivery = document.querySelector(".confirm .sweet-name");

  sweetdelivery.innerHTML = sweetchoice;

  const sweetdelivery_b = document.querySelector(".confirm .sweet-price");

  sweetdelivery_b.innerHTML = pricesweet;

  const totalvalues = document.querySelector(".confirm .total-pay-class");

  totalvalues.innerHTML = "R$ " + priceordertotal;
}

function confirmation() {
  const name_buyer = prompt("Informe o seu nome, por favor");

  const adress_buyer = prompt("informe seu endereço por favor");

  let buyer_details = `-Oi tudo bem? gostaria de fazer o pedido:

    -Dish: ${orderchoice}

    -Drink: ${drinkingchoice}

    -Sweet: ${sweetchoice}

    Total: R${priceordertotal}

    Name:${name_buyer}

    Endereco$:${adress_buyer};`;

  const buyeruri = encodeURI(buyer_details);

  const linkurl = `https://wa.me/5521968180170?text=${buyeruri}`;

  window.location.href = linkurl;
}

function ordercancel() {
  const disaggregate = document.querySelector(".change-confirm-order");

  disaggregate.classList.remove("order-hidden");

  const disaggregater = document.querySelector(".confirm");

  disaggregater.classList.remove("order-hidden");

  const addchange = document.querySelector(".change-confirm-order");

  addchange.classList.add("opacity");
}
