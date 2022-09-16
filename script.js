let errorMsg = document.querySelectorAll(".error-message");
let password = document.getElementById('password')
let cnfmPwd = document.getElementById('confirm-password')
let createBtn= document.getElementById('btn')

//Adding an event listener to the button
createBtn.addEventListener('click', ()=>{
    if(password === cnfmPwd){
        errorMsg.innerHTML = "password match"
    }else{
        errorMsg.innerHTML = "password do not match"
    }})


