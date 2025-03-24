document.addEventListener("DOMContentLoaded",function(){

    // Click Feature
    let count = 0 ;
    let viewfeatureBtn = document.querySelector(".viewfeature");

    function afterviewfeatureBtnClick(){

        let featureItems = document.querySelector(".clickfeature");
        if( count % 2 == 0 ){
            featureItems.style.display = "flex" ;
        }
        else{
            featureItems.style.display = "none" ;
        }

        count ++ ;
    }
    viewfeatureBtn.addEventListener( "click" , afterviewfeatureBtnClick );

    // Click Feature End

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