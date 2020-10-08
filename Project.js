function regExp(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	//var area= document.getElementById("area").value;
	var contact= document.getElementById("mob").value;
//	var = document.getElementById("").value;    

    var char = /[^a-z A-Z]/;
	var digit = /^[^789][^0-9]{9}$/;


    if (digit.test(contact)){
		document.getElementById("mob").style.border = "solid 3px red";
        return false;
	}
	else{
		document.getElementById("mob").style.border = "solid 3px green";
		return true;
 	
	}
/*	
	
	if (char.test(fname)){
		document.getElementById("fname").style.border = "3px solid red";
		return false;
	}
	else if (char.test(lname)){
		document.getElementById("lname").style.border = "3px solid red";
		return false;
	}
	else if (char.test(city)){
		document.getElementById("city").style.border = "3px solid red";
		return false;
	}
	else if (char.test(state)){
		document.getElementById("state").style.border = "3px solid red";
		return false;
	}

*/	
/*
    else{
		document.getElementById("mob").style.border = "solid 3px red";
		return false;    
    }
    
    else if (char.test(city)){
		city.style.border = "3px solid red";
		return false;
	}
    else if (char.test(state)){
		state.style.border = "3px solid red";
		return false;
    }
    else if (digit.test(contact)){
		state.style.border = "3px solid red";
		return false;
	}

    else{
        alert("invalid")
		fname.style.border = "3px solid green";
		lname.style.border = "3px solid green";
		city.style.border = "3px solid green";
		state.style.border = "3px solid green";
		return false;
    }
*/

}
