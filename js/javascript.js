let dolar = 5.32
let euro = 5.56
let libra = 6.34

let valor = document.querySelector('#valores')
let converter = document.querySelector('#converter')
let numero = document.querySelector('#valorFinal')

let dolarType = document.querySelector('#dolar')
let euroType = document.querySelector('#euro')
let libraType = document.querySelector('#libra')

converter.addEventListener('click', ()=>{
    if(valor.value >= 1){
        dolarType.addEventListener('click', ()=>{
            let dinheiro = valor.value * dolar
            numero.innerHTML = 'R$ ' + dinheiro.toFixed(2)
        })
           
        euroType.addEventListener('click', ()=>{
            let dinheiro = valor.value * euro
            numero.innerHTML = 'R$ ' + dinheiro.toFixed(2)
            console.log('euro')
        })
        libraType.addEventListener('click', ()=>{
            let dinheiro = valor.value * libra
            numero.innerHTML = 'R$ ' + dinheiro.toFixed(2)
            console.log('libra')
        })
        
    }else{
         numero.innerHTML = 'Adicione um valor'
       
    }


})






