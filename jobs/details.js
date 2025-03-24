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


    let currentJob = localStorage.getItem("currentJob");
    console.log(JSON.parse(currentJob));
    currentJob = JSON.parse(currentJob);

    let companyName = document.querySelector(".companyName");
    let Positions = document.querySelector(".Positions");
    let jobRole = document.querySelector(".jobRole");
    let expectedSalary = document.querySelector(".expectedSalary");
    let desc = document.querySelector(".desc");

    // console.log(currentJob.companyName);
    companyName.innerText = currentJob.companyName ;
    Positions.innerText = currentJob.position ;
    jobRole.innerText = currentJob.job ;
    expectedSalary.innerText = currentJob.salary ;
    desc.innerText = currentJob.description ;

})