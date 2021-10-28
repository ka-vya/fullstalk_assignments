const a=document.querySelectorAll('input')[0]
const b=document.querySelectorAll('input')[1]
const add=document.querySelector('#add')
const multiply=document.querySelector('#multiply')
const subtract=document.querySelector('#subtract')
const resultbox=document.querySelector('.result')

const sum = ()=>{

}
const product=()=>{

}


const calculator =(event,operation)=>{
    console.log(event.target)

    
switch (operation){
    case "add":
         resultbox.innerHTML = parseInt(a.value) + parseInt(b.value)
         
         break
    case "multiply":
         resultbox.innerHTML = parseInt(a.value) * parseInt(b.value)
         break
    case "subtract":
         resultbox.innerHTML = parseInt(a.value) - parseInt(b.value)
         break
    default:
        resultbox.innerHTML="not a valaid operation"     
    
}
}

add.addEventListener('click', (event) =>calculator(event,'add'))
multiply.addEventListener('click',(event)=>calculator(event,'multiply'))
subtract.addEventListener('click',(event)=>calculator(event,'subtract'))