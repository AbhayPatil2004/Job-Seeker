document.addEventListener("DOMContentLoaded" , function(){

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

    // SearchSujjestion

    let searchArray = ["frontend devloper" , "backend devloper" , "devops engineer" , "data analytist" , "cyber security" , "fullstack devloper" , "ui/ux designer" , "react devloper" ,
        "Mobile App Developer" , "Data Scientist" , "Machine Learning Engineer" , "Ethical Hacker" , "Blockchain Developer"
    
    ];

    let userInput = document.querySelector(".searchJob");
    let searchOptionDiv = document.querySelector(".searchOption");

    
    function userOptions(event) {
        let userValue = event.target.value.toLowerCase().trim();
    
        searchOptionDiv.innerHTML = "";
    
        if (userValue === "") {
            searchOptionDiv.style.display = "none";
            return;
        }
    
        let found = false;
    
        for (let i = 0; i < searchArray.length; i++) {
            if (searchArray[i].toLowerCase().includes(userValue)) {
                
                let anchorTag = document.createElement("a");
                anchorTag.href = "jobs.html";
                anchorTag.innerText = searchArray[i];
                anchorTag.classList.add("search-item"); 
                searchOptionDiv.appendChild(anchorTag);
                found = true;
            }
        }
        
        if( found ){
            searchOptionDiv.style.display = "flex" ;
        }
        else{
            searchOptionDiv.style.display = "none" ;
        }
    }


    userInput.addEventListener("input" , userOptions );

    // Details

    let jobs = document.querySelector(".JobsInfo");

    jobs.addEventListener("click", function(event){
        let child = event.target ;
        let parent = child.parentElement;
        // console.log(parent.innerHTML);

        // window.location.href = "details.html";
        
        let jobObj = {
            companyName : "" ,
            job : "" ,
            description : "" ,
            position : "" ,
            salary : "" 
        }

        let companyNameAndJob = parent.querySelectorAll('h2');
        let description = parent.querySelectorAll("p");
        let btn = parent.querySelector(".btnBox");
        let btnArray = btn.querySelectorAll("button");
        jobObj.companyName = companyNameAndJob[0].innerText;
        jobObj.job = companyNameAndJob[1].innerText;
        jobObj.description = description[1].innerText ;
        jobObj.position = btnArray[0].innerText;
        jobObj.salary = btnArray[2].innerText;

        console.log(jobObj);

        localStorage.setItem("currentJob" , JSON.stringify(jobObj));
        let currentJob = localStorage.getItem("currentJob");
        console.log( JSON.parse(currentJob));

        window.location.href = "details.html";

    })

})