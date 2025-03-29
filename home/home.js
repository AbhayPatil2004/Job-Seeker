document.addEventListener("DOMContentLoaded" , function(){

    // Home Page

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
    
    
    let searchArray = ["frontend devloper" , "backend devloper" , "devops engineer" , "data analytist" , "cyber security" , "fullstack devloper" , "ui/ux designer" , "react devloper" ,
        "Mobile App Developer" , "Data Scientist" , "Machine Learning Engineer" , "Ethical Hacker" , "Blockchain Developer"
    
    ];
    let leftArrowBtn = document.querySelector(".leftArrow");
    let rightArrowBtn = document.querySelector(".rightArrow");

    let divArray = document.querySelectorAll(".role");
    let totalItems = divArray.length;
    let visibleItems ; 

    let leftCount = 0;
    let rightCount = totalItems - 1;

    let screenWidth = window.screen.width;
    screenWidth = Number(screenWidth);
    console.log(screenWidth);
    if( screenWidth < 700 && screenWidth > 500 ){
        console.log(screenWidth)
        visibleItems = 3 ;
    }
    else if( screenWidth < 500 ){
        console.log(screenWidth)
        visibleItems = 2 ;
    }
    else{
        console.log(screenWidth)
        visibleItems = 4 ;
    }

    for (let i = 0; i < visibleItems; i++) {
        if (divArray[i]) {
            divArray[i].style.display = "flex";
        }
    }

    function hideAll() {
        divArray.forEach(div => div.style.display = "none");
    }

    function leftArrowFunction() {
        if (leftCount + visibleItems < totalItems) {
            leftCount++;
            hideAll();
            for (let i = leftCount; i < leftCount + visibleItems; i++) {
                if (divArray[i]) {
                    divArray[i].style.display = "flex";
                }
            }
        }
    }

    function rightArrowFunction() {
        if (leftCount > 0) {
            leftCount--;
            hideAll();
            for (let i = leftCount; i < leftCount + visibleItems; i++) {
                if (divArray[i]) {
                    divArray[i].style.display = "flex";
                }
            }
        }
    }

    leftArrowBtn.addEventListener("click", leftArrowFunction);
    rightArrowBtn.addEventListener("click", rightArrowFunction);

    
    // let darkModeBtn = document.querySelector(".DarkMode");
    // let darkModeCount = 0 ;

    // function changeColor(){

    //     if( darkModeCount % 2 == 0 ){
    //         document.body.style.backgroundColor = "black";
    //         darkModeBtn.style.justifyContent = "end" ;
    //     }
    //     else{
    //         document.body.style.backgroundColor = "white";
    //         darkModeBtn.style.justifyContent = "start" ;
    //     }

    //     darkModeCount += 1 ;
    // }
    // darkModeBtn.addEventListener("click" , changeColor );


    let userInput = document.querySelector(".input");
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


    // Profile Page 

    let Profile = document.querySelector(".profile");
    Profile.addEventListener("click" , function(){
        window.location.href = "profile.html";
    })
    

    // Details  
    let jobObj = {
        companyName : "" ,
        job : "" ,
        description : "" ,
        position : "" ,
        salary : "" ,
        time : ""
    }
    // Latest And top Job Openings
    let jobs = document.querySelector(".JobsInfo");

    jobs.addEventListener("click", function(event){
        let child = event.target ;
        let parent = child.parentElement;
        // console.log(parent.innerHTML);

        // window.location.href = "details.html";

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

        window.location.href = "../jobs/details.html";

    })

    // Search Result

    // let searchBTN = document.querySelector(".searchBTN");
    
    // searchBTN.addEventListener("click",function(){

    //     let input = document.querySelector(".input");
    //     console.log(input.value);

    //     let Searchjob = input.value;
    //     let JobsInfo = document.querySelector(".JobsInfo");
    //     // console.log(JobsInfo);

    //     for( let i = 0 ; i < JobsInfo.children.length ; i++ ){

    //         let jobCompany = JobsInfo.children[i].querySelectorAll("h2");
            
    //         let job = jobCompany[1].innerText ;
    //         let company = jobCompany[0].innerText ;
    //         let Searchresult = document.querySelector(".Searchresult");
    //         console.log(Searchresult);

    //         if( job.trim().toLowerCase() == Searchjob.trim().toLowerCase() ){
    //             Searchresult.append(jobCompany);
    //         }
    //         if( company.trim().toLowerCase() == Searchjob.trim().toLowerCase() ){
    //             Searchresult.appendChild(jobCompany);
    //         }

    //         window.location.href = "../search/search.html";
    //     }

    // })


    let searchBTN = document.querySelector(".searchBTN");

    searchBTN.addEventListener("click", function () {
    let input = document.querySelector(".input");

    localStorage.setItem("SearchResult" , JSON.stringify(input.value.trim().toLowerCase()));

    console.log(JSON.parse(localStorage.getItem("SearchResult")));
    window.location.href = "../search/search.html";
    
    // let Searchjob = input.value.trim().toLowerCase();
    // let JobsInfo = document.querySelector(".JobsInfo");
    // let jobArray = [] ;

    // // Clear previous search results
    

    // for (let i = 0; i < JobsInfo.children.length; i++) {
    //     let jobDetails = JobsInfo.children[i].querySelectorAll("h2");

    //     if (jobDetails.length < 2) continue; // Skip if not found

    //     let job = jobDetails[1].innerText.trim().toLowerCase();
    //     let company = jobDetails[0].innerText.trim().toLowerCase();

    //     if (job === Searchjob || company === Searchjob) {
    //         // Clone the whole job listing div and append to results
    //         let clonedJob = JobsInfo.children[i];
    //         // console.log(clonedJob.innerHTML);
    //         jobArray.push(clonedJob);
    //         // Searchresult.append(clonedJob);
    //     }
    // }

    // // console.log(jobArray[0]);
    // localStorage.setItem("SearchResult" , JSON.stringify(jobArray) );

    // let arr = JSON.parse(localStorage.getItem("SearchResult"));
    // console.log(arr[0]);
    // window.location.href = "../search/search.html";

    // Redirect to search results page after search is complete
    });

    let roles = document.querySelectorAll(".role");

    roles.forEach(role => {
        role.addEventListener("click", function(event) {
            let button = role.querySelector("button");
            console.log(button.innerText);

            localStorage.setItem("SearchResult" , JSON.stringify(button.innerText.trim().toLowerCase()));

            console.log(JSON.parse(localStorage.getItem("SearchResult")));
            window.location.href = "../search/search.html";
        });
    });




})