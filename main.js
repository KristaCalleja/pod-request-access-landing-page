const form = document.getElementById("form");
const emailInput = document.querySelector("input[type=email]");
// The following regexp contains an escaping for the backtick informed at column 53.
const regex = new RegExp(`^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`);
const btn = document.getElementById("btn");

function validateEmail(){
    // Check values
    const string = emailInput.value;
    const checkRegex = regex.test(string); 
    // Create new elements in form
    const helper = document.createElement('div');
    // Style new div
    helper.classList.add('helper');
    // Manipulate the DOM
    if (checkRegex === true) {
        helper.innerText = 'Welcome aboard! ❣';
        form.insertAdjacentElement('afterend', helper);
    } else {
        helper.innerText = 'Oops! Please check your email';
        form.insertAdjacentElement('afterend', helper);
    }
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    validateEmail();
});
// Error handler
function handleError(err){
    console.log('Error');
    console.log(err);
}