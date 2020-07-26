const name = document.getElementById('name');
const email = document.getElementById('Age');
const phone = document.getElementById('email');
const password = document.getElementById('password');
const date = document.getElementById('phone');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
form.addEventListener('submit',(e)=>{
    let message = []
    if(password.length<=8)
    {
        message.push('Password Length must be greater than 8')
    }
    if(message.length>0)
    {
        e.preventDefault()
        errorElement.innerText = message.join(", ")
    }
})