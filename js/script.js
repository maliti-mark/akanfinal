// Event function on button
function akanName(){

    var birthDate=document.getElementById("birthdate").value;
    var dateEntered= birthDate.split("-");
    var day=parseInt(dateEntered[0]);
    var month=parseInt(dateEntered[1]);
    var year=parseInt(dateEntered[2]);

    //calculation
    var century=(year-1)/100+1;
    var dayOfTheWeek = ( century/4 -2*century-1 + 5*year/4  + 26*(month+1)/10 + day ) % 7;

    document.getElementById("result").innerHTML=Math.round(dayOfTheWeek);
    var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var gender=document.getElementById("gender").value;
    var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var weekDay = Math.round(dayOfTheWeek)

    //form validation and output
    if(weekDay){
        if(gender=="male"){
            document.getElementById("result").innerHTML= "Your akan name is"+ maleNames[Math.round(dayOfTheWeek)]+" and born on "+ daysOfWeek[weekDay];
        }
        else if(gender==="female"){
            document.getElementById("result").innerHTML="You born on "+daysOfWeek[weekDay]+ "akan name is " + femaleNames[Math.round(dayOfTheWeek)];
        }else{
            alert("Enter valid dates and gender");
            document.getElementById("result").innerHTML="";
        }
    }
            else{
                alert("Enter valid birthday and gender");
                document.getElementById("result").innerHTML="";
            }


    // reFresh function
    formRefresh();
}

//  refresh the
function formRefresh(){
    document.getElementById("form_data").reset();
}
