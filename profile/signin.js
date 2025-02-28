document.addEventListener("DOMContentLoaded",function(){

    let userData = {

        name : "",
        phone : "",
        email : "",
        linkedIn : "",
        gitHub : "",
        job : "" ,
        jobType : "",
        location : "",
        salary : "" ,
        degree : "" ,
        twelth : "" ,
        tenth : "" ,
        prevJob : "" ,
        company : "" ,
        duration : "" ,
        tech : "",
        soft : "" ,
    }

    let btn = document.querySelector(".Submit");

    btn.addEventListener("click" , function(){

        let selfInfo = document.querySelector(".selfInfo");
        for( let i = 0 ; i < selfInfo.children.length ; i++ ){
            if( selfInfo.children[i].tagName === "INPUT" ){

                let elementId = selfInfo.children[i].id ;
                if (userData.hasOwnProperty(elementId)) {
                    userData[elementId] = selfInfo.children[i].value;
                }
                
            }
        }

        console.log(userData.name);
        console.log(userData.phone);
        console.log(userData.email);
        console.log(userData.linkedIn);
        console.log(userData.gitHub);
    })
    
})