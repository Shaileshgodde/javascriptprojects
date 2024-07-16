const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signup = document.getElementById('signup');

signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
    
}
signinBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
    
}