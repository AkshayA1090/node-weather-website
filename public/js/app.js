console.log("client side js served up")



const weatherForm=document.querySelector('form')
const searchElement=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
// messageOne.textContent='From Javascript'
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=searchElement.value
    
    messageOne.textContent='Loading...'
    messageTwo.textContent=''
    console.log(location)
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        } else {
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast
        }
        
    })
})
})