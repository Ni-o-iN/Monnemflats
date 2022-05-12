
        function validateForm(){
            let district = document.querySelector("input[name='district']").value;
            let districtValid = checkDistrict();
            let guest = document.querySelector("input[name='guests']").value;
            let arrival = document.querySelector("input[name='arrival']").value;
            let departure = document.querySelector("input[name='departure']").value;

            
                

        }

        function checkDistrict( district){
            if(typeof district == "string"){

                let valid = new RegExp("[A-Za-z\u00C0-\u017F]")

                let spaceIsFirstChar = new RegExp("^\s"); 
                let multipleSpace = new RegExp("\s{2}");
                let numbers = new RegExp("[0-9]");
                let 


                if(spaceIsFirstChar.test(district)){
                    return "Eingabe darf nicht mit einem Leerzeichen beginnen";
                }
                if(multipleSpace.test(district)){
                    return "Eingabe darf keine zusammenhängende Leerzeichen besitzen";
                }
                if(numbers.test(district)){
                    return "Eingabe darf keine Leerzeichen enthalten";
                }

            }
        

        }
