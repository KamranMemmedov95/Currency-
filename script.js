const leftRates = document.querySelectorAll('.valutaNames li button');
const rightRates = document.querySelectorAll('.valutaNames1 li button');
const valutaNames = document.querySelectorAll('.valutaNames');
const moneyBoxFirst = document.querySelector('.moneyChangerBox');
const resultSpan = document.querySelector('.spanFrom');
const fromSpan = document.querySelector('.spanTo');
const valutaNamesSecond = document.querySelectorAll('.valutaNames1 li button');
const rigthMoneyBox = document.querySelector('.rigthMoneyBox');

let from = 'RUB';
let to = 'USD';

const newValue = async (base, change) => {
  const res = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${change}`);
  const data = await res.json();
  resultSpan.innerText = `1 ${data.base}=${data.rates[change]}`;
  fromSpan.innerText = `1 ${data.base}=${data.rates[change]}`;
  rigthMoneyBox.innerText = moneyBoxFirst.value * data.rates[change];
};

leftRates.forEach((rate) => {
  rate.addEventListener('click', (e) => {
    from = e.target.innerText;
    toggle(leftRates, e.target);
    getCurrency(from, to);
  });
});

rightRates.forEach((rate) => {
  rate.addEventListener('click', (e) => {
    to = e.target.innerText;
    toggle(rightRates, e.target);
    getCurrency(from, to);
  });
});

function getCurrency(from, to) {
  newValue(from, to);
}

function toggle(elements, activeEl) {
  elements.forEach((element) => {
    element.classList.remove('active');
    element.classList.remove('active1');
  });
  activeEl.classList.add('active');
  activeEl.classList.add('active1');
}

moneyBoxFirst.addEventListener('input', () => {
  newValue(from, to);
});

newValue(from, to);
