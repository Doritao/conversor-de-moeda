 let FirstInput = document.getElementById('converter-de')
 let SecondInput = document.getElementById('converter-para')
 let select = document.querySelectorAll('select')
 let DinheiroFlagFisrtInput = document.getElementById('DinheiroFlagFisrtInput')
 let DinheiroFlagSecondInput = document.getElementById('DinheiroFlagSecondInput')
 let DinheiroPalavraFirstInput = document.getElementById('DinheiroPalavraFirstInput')
 let DinheiroPalavraSecondInput = document.getElementById('DinheiroPalavraSecondInput')
 let DinheiroFirstInput = document.getElementById('DinheiroFirstInput')
 let DinheiroSecondInput = document.getElementById('DinheiroSecondInput')
 let input = document.getElementById('input')
 let UnidadeMonetaria1 = document.getElementById('UnidadeMonetaria1')
 let UnidadeMonetaria2 = document.getElementById('UnidadeMonetaria2')
 let button = document.querySelector('button')
 let DolarToReal = 5.07
 let DolarToEur = 0.91
 let RealToDolar = 0.20
 let RealToEuro = 0.18
 let EuroToDolar = 1.10
 let EuroToReal = 5.56
 FirstInput.addEventListener('change', () => {
     if(FirstInput.value == 'R$ Real Brasileiro') {
         console.log(`f input real`)
         DinheiroFlagFisrtInput.src = './assets/br-flag.svg'
         DinheiroPalavraFirstInput.innerText = 'Real'
         input.placeholder = 'R$ 0,00'
         UnidadeMonetaria1.innerText = 'R$'
         }
     if(FirstInput.value == 'US$ Dólar americano') {
         console.log(`f input dolar`)
         DinheiroFlagFisrtInput.src = './assets/usa-flag.svg'
         DinheiroPalavraFirstInput.innerText = 'Dólar Americano'
         input.placeholder = '$ 0,00'
         UnidadeMonetaria1.innerText = '$'
     }
     if(FirstInput.value == '€ Euro') {
         console.log(`f input euro`)
         DinheiroFlagFisrtInput.src = './assets/eur.svg'
         DinheiroPalavraFirstInput.innerText = 'Euro'
         input.placeholder = '€ 0,00'
         UnidadeMonetaria1.innerText = '€'
     }
 })
 SecondInput.addEventListener('change', () => {
     if(SecondInput.value == 'R$ Real Brasileiro') {
         console.log(`s input real`)
         DinheiroFlagSecondInput.src = './assets/br-flag.svg'
         DinheiroPalavraSecondInput.innerText = 'Real'
         input.placeholder = 'R$ 0,00'
         UnidadeMonetaria2.innerText = 'R$'
         }
     if(SecondInput.value == 'US$ Dólar americano') {
         console.log(`s input dolar`)
         DinheiroFlagSecondInput.src = './assets/usa-flag.svg'
         DinheiroPalavraSecondInput.innerText = 'Dólar Americano'
         input.placeholder = '$ 0,00'
         UnidadeMonetaria2.innerText = '$'
     }
     if(SecondInput.value == '€ Euro') {
         console.log(`s input euro`)
         DinheiroFlagSecondInput.src = './assets/eur.svg'
         DinheiroPalavraSecondInput.innerText = 'Euro'
         input.placeholder = '€ 0,00'
         UnidadeMonetaria2.innerText = '€'
     }
 })
 button.addEventListener('click', () => {
     if(FirstInput.value == 'R$ Real Brasileiro') {
         if(SecondInput.value == 'US$ Dólar americano') {
             var valorConvertido = (Number(input.value)*RealToDolar).toFixed(2)
      
             DinheiroFirstInput.innerHTML = `<b>R$<b> ${Number(input.value)}</b`
             DinheiroSecondInput.innerHTML = `<b>US$<b> ${valorConvertido}`
         }
         if(SecondInput.value == '€ Euro') {
             var valorConvertido = (Number(input.value)*RealToEuro).toFixed(2)
      
             DinheiroFirstInput.innerHTML = `<b>R$<b> ${Number(input.value)}</b`
             DinheiroSecondInput.innerHTML = `<b>€ <b> ${valorConvertido}`
      //
         }
         if(SecondInput.value == 'R$ Real Brasileiro') {
             alert('Você não pode converter para a mesma moeda')
         }
     }
     if(FirstInput.value == 'US$ Dólar americano') {
         if(SecondInput.value == 'R$ Real Brasileiro') {
             var valorConvertido = (Number(input.value)*DolarToReal).toFixed(2)
      
             DinheiroFirstInput.innerHTML = `<b>US$<b> ${Number(input.value)}</b`
             DinheiroSecondInput.innerHTML = `<b>R$<b> ${valorConvertido}`
      
         }
         if(SecondInput.value == '€ Euro') {
             var valorConvertido = (Number(input.value)*DolarToEur).toFixed(2)
      
             DinheiroFirstInput.innerHTML = `<b>US$<b> ${Number(input.value)}</b`
             DinheiroSecondInput.innerHTML = `<b>€<b> ${valorConvertido}`
      
         }
         if(SecondInput.value == FirstInput.value) {
             alert(`Você não pode converter para a mesma moeda`)
         }
     }
     if(FirstInput.value == '€ Euro') {
         if(SecondInput.value == 'US$ Dólar americano') {
             var valorConvertido = (Number(input.value)*EuroToDolar).toFixed(2)
      
             DinheiroFirstInput.innerHTML = `<b>€<b> ${Number(input.value)}</b`
             DinheiroSecondInput.innerHTML = `<b>US$<b> ${valorConvertido}`
      
         }
         if(SecondInput.value == 'R$ Real Brasileiro') {
             var valorConvertido = (Number(input.value)*EuroToReal).toFixed(2)
      
             DinheiroFirstInput.innerHTML = `<b>€<b> ${Number(input.value)}</b`
             DinheiroSecondInput.innerHTML = `<b>R$<b> ${valorConvertido}`
      
         }
         if(SecondInput.value == FirstInput.value) {
             alert('Você não pode converter para a mesma moeda')
         }
     }
 })


/*
const inputs = document.querySelectorAll('#input, #converter-de, #converter-para');
const currencyFlags = {
  'R$': './assets/br-flag.svg',
  'US$': './assets/usa-flag.svg',
  '€': './assets/eur.svg',
};
const currencyWords = {
  'R$': 'Real',
  'US$': 'Dólar Americano',
  '€': 'Euro',
};
const rates = {
  'R$': {
    'US$': 0.20,
    '€': 0.18,
  },
  'US$': {
    'R$': 5.07,
    '€': 0.91,
  },
  '€': {
    'US$': 1.10,
    'R$': 5.56,
  },
};
const firstInputFlag = document.getElementById('DinheiroFlagFisrtInput');
const secondInputFlag = document.getElementById('DinheiroFlagSecondInput');
const firstInputWord = document.getElementById('DinheiroPalavraFirstInput');
const secondInputWord = document.getElementById('DinheiroPalavraSecondInput');
const firstInputSymbol = document.getElementById('UnidadeMonetaria1');
const secondInputSymbol = document.getElementById('UnidadeMonetaria2');
const input = document.getElementById('input');
const button = document.querySelector('button');
const DinheiroFirstInput = document.getElementById('DinheiroFirstInput');
const DinheiroSecondInput = document.getElementById('DinheiroSecondInput');

function convert() {
  const fromCurrency = firstInputSymbol.innerText;
  const toCurrency = secondInputSymbol.innerText;
  const rate = rates[fromCurrency][toCurrency];
  const value = parseFloat(input.value.replace(',', '.'));
  if (isNaN(value)) {
    alert('Valor inválido!');
    return;
  }
  const convertedValue = (value * rate).toFixed(2);
  DinheiroFirstInput.innerHTML = `<b>${fromCurrency}<b> ${value}`;
  DinheiroSecondInput.innerHTML = `<b>${toCurrency}<b> ${convertedValue}`;
}

function handleInputChange() {
  switch (this.id) {
    case 'converter-de':
      firstInputFlag.src = currencyFlags[this.value.substring(0, 2)];
      firstInputWord.innerText = currencyWords[this.value.substring(0, 2)];
      firstInputSymbol.innerText = this.value.substring(0, 2);
      break;
    case 'converter-para':
      secondInputFlag.src = currencyFlags[this.value.substring(0, 2)];
      secondInputWord.innerText = currencyWords[this.value.substring(0, 2)];
      secondInputSymbol.innerText = this.value.substring(0, 2);
      break;
    case 'input':
      const inputValue = this.value.replace(/[^\d.,]/g, '').replace(',', '.');
      this.value = inputValue;
      break;
    default:
      break;
  }
}

inputs.forEach(input => input.addEventListener('change', handleInputChange));

button.addEventListener('click', convert);*/
