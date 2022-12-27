var first_name = document.box.div.getElementById("first_name").value;
var last_name = document.getElementById("last_name").value;
var street = document.getElementById("street").value;
var landmark = document.getElementById("landmark").value;
var district = document.getElementById("district").value;
var state = document.getElementById("state").value;
var pincode = document.getElementById("pincode").value;
var mobile_number = document.getElementById("mobile_number").value;
var email_address = document.getElementById("email_address").value;
var otp = document.getElementById("otp").value;
var password = document.getElementById("password").value;
var register = document.box.getElementById("register");


function submitDetails (){

    if(first_name.length<=0){
        alert('please enter your first name');
    }
    if(last_name.length<=0){
        alert('please enter your last name');
    }
    if(street.length<=0){
        
    }
    if(landmark.length>=0){

    }
    if(district.length>=0){

    }
    if(pincode.length==6){

    }
    if(mobile_number.length==10){

    }
    if(email_address>=0){

    }
    if(otp>=4){

    }
    if(password>=8){
        
    }

}
register.addEventListener('click',
);