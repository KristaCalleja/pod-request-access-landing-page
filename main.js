const form = document.getElementById("form");
const liveRegion = document.querySelector(".input-aria-live");
const testEmail = email=>{
	let re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
	return re.test(email);
}
const setErrors = (input, errorId) => {
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedBy", errorId);
    input.nextElementSibling.classList.add("show-error");
}
const removeErrors = (input, errorId) =>{
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedBy");
    input.nextElementSibling.classList.remove("show-error");
}
const testInputs = ( input, errorId ) =>{
	if ( input.name==="email") {
        if ( !testEmail(input.value) ) setErrors(input, errorId);
        else {removeErrors(input, errorId)}
  } else {
        if ( !input.value ) setErrors(input, errorId);
        else {removeErrors(input, errorId)}
  }
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    testInputs(email, "errorEmail");
});
// Error handler
function handleError(err){
    console.log('Error');
    console.log(err);
}