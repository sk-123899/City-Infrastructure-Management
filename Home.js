/*
var loginid = document.querySelector("#login");

loginid.addEventListener("submit", function(e){
    e.preventDefault()
    var username = document.getElementById("fuser");
    var password = document.getElementById("password");
   

    if(username.value == ""){
        username.style.border = "solid 3px red";
        document.getElementById("lblinvalid1").style.visibility = "visible";
    }
    if(password.value == ""){
        password.style.border = "solid 3px red";
        document.getElementById("lblinvalid").style.visibility = "visible";
        
    }
});

*/
function loginValidation() {

    var username = document.getElementById("fuser");
    var password = document.getElementById("password");

    if(username.value.trim() == ""){
        username.style.border = "solid 3px red";
        document.getElementById("lblinvalid1").style.visibility = "visible";
        return false;
    }
    else if(password.value.trim() == ""){
        password.style.border = "solid 3px red";
        document.getElementById("lblinvalid").style.visibility = "visible";
        return false;
    }
    else{
       return true;
    }    
}