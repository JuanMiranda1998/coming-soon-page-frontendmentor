const formInput = document.querySelector('#formInput');
const submitButton = document.querySelector('#submitButton');
const errorMessage = document.querySelector('#errorMessage');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function verifyEmail(value){
    return emailPattern.test(value);
}

submitButton.addEventListener('click', e=>{
    e.preventDefault();
    let email = formInput.value;
    if (email == ''){
        formInput.style = 'border: 1px solid hsl(354, 100%, 66%)';
        errorMessage.style = 'display: block';
        errorMessage.textContent = 'Whoops! It looks like you forgot to add your email';
    } else {
        if (verifyEmail(email)){
            formInput.style = 'border: 1px solid hsl(223, 100%, 88%)';
            errorMessage.style = 'display: none';
        } else {
            formInput.style = 'border: 1px solid hsl(354, 100%, 66%)';
            errorMessage.style = 'display: block';
            errorMessage.textContent = 'Please provide a valid email address';
        };
    };
});