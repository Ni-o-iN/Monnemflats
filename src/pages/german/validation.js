

const dateInputs = document.querySelectorAll(".date input");

const inputs = document.querySelectorAll("input");
const today = new Date().toISOString().split("T")[0];

inputs.forEach((input) => 
{
    input.addEventListener("invalid", (event) => 
    {
        formValidation(event.target)});
});



dateInputs.forEach(input => 
{
    console.log("for each " + today);
    setMinDate(input);
    input.addEventListener('change', (event) => { checkDate(event.target)})
    input.addEventListener('focus', (event) => { changeToDate(event.target)});
    input.addEventListener('blur', (event) => { changeToText(event.target)});
});


function setMinDate(input){
    console.log("setMinDate: " + today);
    input.min = today;
    console.log(input.min);

}

function formatDate(date){

    date = date.split("/");
    newDate = date[2];
    for(let i = 0; i < 2; i++){
        newDate += "-";
        newDate += date[i];
    }

    return newDate;

}


function changeToDate(input){


    input.type="date";
    
}

function changeToText(input){

    if(input.type=="date" && (input.value == null  || input.value == '' )){
        input.type = "text";
    }
}
function formValidation(input){

    if(input.type == "date"){

        checkDate(input);
    }

    else if(input.type == "text" || input.type == "email"){
        
        checkText(input);
    }
}

function checkDate(input){

    let value =input.valueasNumber;

    let today = Date.now();

    if(today - value < 0){
        input.setCustomValidity("Das Datum darf nicht in der Vergangenheit liegen");
    }


    
}


function checkText(input){
    
    let value = input.value;


    if(value.match(/^[\s-]/)){

            input.setCustomValidity("Die Eingabe darf nicht mit einem Leerzeichen oder Bindestrich beginnen.");
            return;
            
        }
   if(value.match(/[\s-]$/)){
            input.setCustomValidity("Die Eingabe darf nicht mit einem Leerzeichen oder Bindestrich enden!");
            return;
    }

    if( value.includes("  ")){

            input.setCustomValidity("Die Eingabe darf keine zusammenhängende Leerzeichen besitzen."); 
            return; 
    }



    if(input.type !="email"){

        if(value.match(/\d+/) != null){

                input.setCustomValidity("Die Eingabe darf keine Zahlen enthalten!");
                return;

        }
        else{
            input.setCustomValidity("Die Eingabe darf nur die deutsche Buchstaben, die durch ein Leerzeichen oder Bindestrich getrennt sind, enthalten!");
            return;
        }
    }
    else{
        if(value.includes(" ")){
            input.setCustomValidity("Die Eingabe darf keine Leerzeichen enthalten!");
            return;
        }

        else if(value.match(/^[\W]/)){
            input.setCustomValidity("Die Eingabe darf nicht mit einem Sonderzeichen beginnen!");
            return;
        }
        else if(value.match(/[\S]*([\W]|_)$/)){
            input.setCustomValidity("Die Eingabe darf nicht mit einem Sonderzeichen enden!");
            return;
        }
    }
}
        
