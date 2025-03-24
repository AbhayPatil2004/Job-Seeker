
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

    // Click Feature End

    let submitBtn = document.querySelector(".Submit");
    let userData = {};

    function addData(element){

        for( let i = 0 ; i < element.children.length ; i++ ){

            if( element.children[i].tagName == "INPUT" || element.children[i].tagName == "SELECT" ){
                let elementId = element.children[i].id ;
                
                if( !element.children[i].value ){
                    alert(`Please fill the ${elementId} Infomation`);
                    return false ;
                }
                else{
                    userData[elementId] = element.children[i].value ;
                    console.log(userData[elementId]);
                }
            }
        }
        return true ;
    }

    submitBtn.addEventListener("click" , function(event){

        let allFilled = true;
        let container = document.querySelector(".container");
        for( let i = 0 ; i < container.children.length ; i++ ){
            let element = container.children[i];
            if( !addData(element) ){
                allFilled = false ;
                break ;
            }
        }

        if (!allFilled) {
            event.preventDefault(); 
            console.log("Form submission prevented due to empty fields.");
        }
        else{
            let email = userData.email ;
            localStorage.setItem( email , JSON.stringify(userData));
            let data = localStorage.getItem(email);
            console.log(JSON.parse(data));
        }
        
    })
})