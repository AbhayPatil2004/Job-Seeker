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
    
    
    let searchArray = ["frontend devloper" , "backend devloper" , "devops engineer" , "data analytist" , "cyber security" , "fullstack devloper" , "ui/ux designer" , "react devloper" ];
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
    
})