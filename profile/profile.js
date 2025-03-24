document.addEventListener("DOMContentLoaded", function () {

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

    let jobBtn = document.querySelector(".jobBtn");
    let eduBtn = document.querySelector(".eduBtn");
    let expeBtn = document.querySelector(".expeBtn");
    let skillBtn = document.querySelector(".skillBtn");

    jobBtn.addEventListener("click",function(){
        let jobInfo = document.querySelector(".jobInfo");
        if( jobInfo.style.display == "none" ){
            jobInfo.style.display = "block" 
        }
        else{
            jobInfo.style.display = "none"; 
        }
    })

    eduBtn.addEventListener("click",function(){
        let education = document.querySelector(".education");
        if( education.style.display == "none" ){
            education.style.display = "block" 
        }
        else{
            education.style.display = "none"; 
        }
    })

    expeBtn.addEventListener("click",function(){
        let experience = document.querySelector(".experience");
        if( experience.style.display == "none" ){
            experience.style.display = "block" 
        }
        else{
            experience.style.display = "none"; 
        }
    })

    skillBtn.addEventListener("click",function(){
        let skills = document.querySelector(".skills");
        if( skills.style.display == "none" ){
            skills.style.display = "block" 
        }
        else{
            skills.style.display = "none"; 
        }
    })


    let loggedInUser = localStorage.getItem("loggedInUser");
    console.log(loggedInUser);

    
    let fields = {
        name: document.querySelector(".name"),
        phone: document.querySelector(".phone"),
        email: document.querySelector(".email"),
        linkedIn: document.querySelector(".linkedIn"),
        gitHub: document.querySelector(".gitHub"),
        jobTitel: document.querySelector(".jobTitle"),
        jobType: document.querySelector(".time"),
        jobLocation: document.querySelector(".location"),
        salary: document.querySelector(".salary"),
        degree: document.querySelector(".degree"),
        twelth: document.querySelector(".twelth"),
        tenth: document.querySelector(".tenth"),
        prevJob: document.querySelector(".previousJob"),
        companyName: document.querySelector(".companyName"),
        duration: document.querySelector(".duration"),
        techSkills: document.querySelector(".technicalskills"),
        softSkills: document.querySelector(".softSkills")
    };

    
    let obj = JSON.parse(localStorage.getItem(loggedInUser));
    console.log(obj);
    if (obj) {
        for (let key in fields) {
            if (obj.hasOwnProperty(key) && fields[key]) {
                fields[key].textContent += obj[key]; 
            }
            else{
                console.log(fields[key]);
            }
        }
    }

    console.log(obj);
});
