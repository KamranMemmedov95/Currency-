
const rates = document.querySelectorAll('.valutaNames li button')
const valutaNames = document.querySelectorAll('.valutaNames')
const moneyBoxFirst = document.querySelector('.moneyChangerBox')
const resultSpan = document.querySelector('.spanFrom')
const fromSpan = document.querySelector('.spanTo')
const valutaNamesSecond = document.querySelectorAll('.valutaNames1 li button')
const moneyBoxSecond = document.querySelector('.moneyChangerBox1')

let to = 'AZN'

const newValue = async (base, change) => {
    const res = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${change}`)
    const data = await res.json()
    resultSpan.innerText = `1 ${data.base}=${data.rates[change]}`
    fromSpan.innerText = `1 ${data.base}=${data.rates[change]}`
};




rates.forEach(rate => {
    rate.addEventListener('click', (e) => {
        toggle(rates, e.target)
        getCurrency(e.target.innerText, to)
    })
})



function getCurrency(from, to) {
    newValue(from, to)
}


function toggle(elements, activeEl) {
    elements.forEach(element => {
        element.classList.remove('active')
        element.classList.remove('active1')
    })
    activeEl.classList.add('active')
    activeEl.classList.add('active1')
}






    // function calculate(){
//     const rate = rates.value;
//     const valutaSecond = valutaNamesSecond.value;

//     fetch(`https://api.exchangerate.host/latest?${rate}`)
//     .then(res => res.json())
//     .then((data)=>{
//         // console.log(data)
//         const rat = data.conversion_rates[valutaSecond]
//         moneyBoxFirst.innerText = `1 ${rate} = ${rat} ${valutaSecond}`
//         moneyBoxSecond.value = (moneyBoxFirst.value * rat).toFixed(2)
//     })
// };


// rates.addEventListener('change', calculate);
// valutaNamesSecond.addEventListener('change',calculate);
// moneyBoxFirst.addEventListener('input',calculate);
// moneyBoxSecond.addEventListener('input',calculate);

// calculate()