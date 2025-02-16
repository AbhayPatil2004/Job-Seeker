document.addEventListener("DOMContentLoaded" , function(){

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

    
})