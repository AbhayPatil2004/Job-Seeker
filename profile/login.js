document.addEventListener("DOMContentLoaded",function(){

    let loginBtn = document.querySelector(".btn");

    loginBtn.addEventListener("click" , function(event){

        let enterEmail = document.querySelector("#email").value;
        let enterPassword = document.querySelector("#password").value;

        let obj = JSON.parse(localStorage.getItem(enterEmail));
        if( !obj ){
            alert("Please Enter valid Email Id");
            return ;
        }
        let password = obj.password;
        if( password != enterPassword ){
            alert("Please Enter Correct Password ");
            return ;
        }
        else{
            localStorage.setItem("loggedInUser", enterEmail);

            alert("Login Successful!");
            window.location.href = "profile.html";
        }
        
    })
})