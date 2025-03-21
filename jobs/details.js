document.addEventListener("DOMContentLoaded",function(){

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