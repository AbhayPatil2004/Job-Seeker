
document.addEventListener("DOMContentLoaded", async function () {
    
    let Searchresult = document.querySelector(".Searchresult");

    let search = JSON.parse(localStorage.getItem("SearchResult"));
    console.log(search);
    if( search == "" ){
        Searchresult.innerHTML = "<h2> We are sorry, but at the moment there are no jobs for this position or no job openings in this company. </h2>"
        return ;
    }

    try {
        // Fetch HTML content of jobs.html
        const response = await fetch('../jobs/jobs.html');
        if (!response.ok) {
            throw new Error('Failed to fetch jobs.html');
        }
        const html = await response.text();

        // Create a temporary container to parse the HTML content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        let JobsInfo = tempDiv.querySelector(".JobsInfo"); // Find the JobsInfo class
        Searchresult.innerHTML = "";

        if (!JobsInfo) {
            console.error("JobsInfo element not found in jobs.html");
            return;
        }
        
        console.log(JobsInfo.innerHTML);

        for (let i = 0; i < JobsInfo.children.length; i++) {
            let jobDetails = JobsInfo.children[i].querySelectorAll("h2");

            if (jobDetails.length < 2) continue;

            let job = jobDetails[1].innerText.trim().toLowerCase();
            let company = jobDetails[0].innerText.trim().toLowerCase();

            if (job == search || company == search 
                || job.includes(search) || company.includes(search)
                || job.startsWith(search) || company.startsWith(search)
            ) {
                Searchresult.appendChild(JobsInfo.children[i].cloneNode(true)); // Clone and append
            }
        }

        if( Searchresult.innerHTML == "" ){
            Searchresult.innerHTML = "<h2> We are sorry, but at the moment there are no jobs for this position or no job openings in this company. </h2>"
        }

    } catch (error) {
        console.error("Error:", error);
    }

    let jobObj = {
        companyName : "" ,
        job : "" ,
        description : "" ,
        position : "" ,
        salary : "" ,
        time : ""
    }
    let jobs = document.querySelector(".Searchresult");

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
});
