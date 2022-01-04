let sum = 0;
let orderchoice;
let valorfood;
let priceorder;
let drinkingchoice;
let pricedrinking;

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
orderchoice=itemorder.innerHTML;
const itempriceorder=document.querySelector("fooda .border .price")
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
drinkingchoice=itemdrinking.innerHTML;
const itempricedrinking=document.querySelector("drinking .border .price")
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
    sweetchoice=itemsweet.innerHTML;
    const itempricesweet=document.querySelector("sweet .border .price")
    pricedrinking = itempricesweet.innerHTML;
  }
  
  function closing(){
      if(sum===3){
      const result = document.querySelector(" .footer .button .box-text");
      result.innerHTML="Fechar pedido"
    }
    if(sum===3){
        const result=document.querySelector(".button");
        result.classList.add("close")
    }

  }

  function readyorder(){
      const disaggregate = document.querySelector(".change-confirm-order")   
      disaggregate.classList.remove("order-hidder")
      const disaggregater = document.querySelector(".confirm")
      disaggregater.classList.remove("order-hidden")
      const addchange=document.querySelector(".change-confirm-order")
      addchange.classList.add("opacity")

  }






