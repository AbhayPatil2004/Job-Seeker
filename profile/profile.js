document.addEventListener("DOMContentLoaded", function(){

    let UserDataArray = [ 
        {   
            name : "Abhay Ramkrushna Patil",
            phone : "1000000000",
            email : "patil",
            linkedin : "LinkedIn@gmail.com",
            gitHub : "gitHub@gmail.com",
            jobrole : "Fullstack devloper",  
            jobtime : "Full time",
            locations : "Mumbai",
            salary : "100000 Rs",
            degree : "Computer Science",
            tweleth : "80%",
            tenth : "92%",
            job : "Fullstack Developer",
            company : "Amazon",
            experience : "2 years",
            tech : "C++, JavaScript, Python, Frontend, Backend, DevOps, Data Science",
            soft : "Cricket, Guitar"
        }
    ];
    
    
    let name = document.querySelector(".name");
    let phone = document.querySelector(".phone");
    let email = document.querySelector(".email");
    let linkedIN = document.querySelector(".linkedIn");
    let gitHub = document.querySelector(".gitHub");
    let jobTitle = document.querySelector(".jobTitle");
    let time = document.querySelector(".time");
    let locations = document.querySelector(".location");
    let salary = document.querySelector(".salary");
    let degree = document.querySelector(".degree");
    let twelth = document.querySelector(".twelth"); 
    let tenth = document.querySelector(".tenth"); 
    let previousJob = document.querySelector(".previousJob");
    let companyName = document.querySelector(".companyName");
    let duration = document.querySelector(".duration");
    let technicalSkills = document.querySelector(".technicalskills");
    let softskills = document.querySelector(".softSkills");
    
    let emailToFind = "patil";

    // name.textContent = "Abhay" ;
    // // let i = 0 ;
    for (let i = 0; i < UserDataArray.length; i++) {

        if (UserDataArray[i].email == emailToFind) {
            name.textContent += UserDataArray[i].name;
            phone.textContent += UserDataArray[i].phone;
            email.textContent += UserDataArray[i].email;
            linkedIN.textContent += UserDataArray[i].linkedin;
            gitHub.textContent += UserDataArray[i].gitHub;
            jobTitle.textContent += UserDataArray[i].jobrole || "Not Specified"; 
            time.textContent += UserDataArray[i].jobtime;
            salary.textContent += UserDataArray[i].salary;
            degree.textContent += UserDataArray[i].degree;
            twelth.textContent += UserDataArray[i].tweleth;
            tenth.textContent += UserDataArray[i].tenth;
            previousJob.textContent += UserDataArray[i].job;  
            companyName.textContent += UserDataArray[i].company; 
            duration.textContent += UserDataArray[i].experience; 
            technicalSkills.textContent += UserDataArray[i].tech;
            softskills.textContent += UserDataArray[i].soft;
            locations.textContent += UserDataArray[i].locations;
        }
    }


    let jobBtn = document.querySelector(".jobBtn");
    let eduBtn = document.querySelector(".eduBtn");
    let expeBtn = document.querySelector(".expeBtn");
    let skillBtn = document.querySelector(".skillBtn");
    let boolJob = true ;
    let boolExpe = true ;
    let boolEdu = true ;
    let boolSkill = true ;

    jobBtn.addEventListener("click" , function(){
        if( boolJob ){
            document.querySelector(".jobInfo").style.display = "block" ;
            boolJob = false ;
        }
        else{
            document.querySelector(".jobInfo").style.display = "none" ;
            boolJob = true ;
        }
    })

    eduBtn.addEventListener("click", function(){
        if( boolEdu ){
            document.querySelector(".education").style.display = "block" ;
            boolEdu = false ;
        }
        else{
            document.querySelector(".education").style.display = "none" ;
            boolEdu = true ;
        }
    })
    expeBtn.addEventListener("click", function(){
        if( boolExpe ){
            document.querySelector(".experience").style.display = "block" ;
            boolExpe = false ;
        }
        else{
            document.querySelector(".experience").style.display = "none" ;
            boolExpe = true ;
        }
    })
    skillBtn.addEventListener("click", function(){
        if( boolSkill ){
            document.querySelector(".skills").style.display = "block" ;
            boolSkill = false ;
        }
        else{
            document.querySelector(".skills").style.display = "none" ;
            boolSkill = true ;
        }
    })

})