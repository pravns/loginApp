//localStorage.clear();
function register(){
    var un = document.getElementById('user_name').value;
    var fn = document.getElementById('first_name').value;
    var ln = document.getElementById('last_name').value;
    var em = document.getElementById('remail').value;
    var pw = document.getElementById('password').value;

    var jsonObj = {"userName":un,"password":pw, "email":em};
    //convert into string
    jsonObj = JSON.stringify(jsonObj);
    var registrationObj= localStorage.getItem("user_registration");
    var l1 = 1;
    if(registrationObj!=null){
        registrationObj = registrationObj.concat('|').concat(jsonObj);
    }
    else{
        registrationObj = jsonObj;
    }   
    localStorage.setItem("user_registration", registrationObj);   
    var l2 =  registrationObj.length;    
    if(l2 > l1){
        alert('User Registered Successfully.');
        //document.getElementById("registerform").reset();
        $('#register').modal('hide');            
    }
    else{
        alert('un-successfull.');
    } 
}

function login(){
    var registrationArrs = [];
    registrationArrs = localStorage.getItem("user_registration").split("|");
    var status = 0;
    var lem = $('#lemail').val();
    var pw = $('#lpassword').val();

    if(registrationArrs.length > 0){
        $.each(registrationArrs,function(index){
        var registrationVal = jQuery.parseJSON(registrationArrs[index]);
            var email = registrationVal.email;
            var password = registrationVal.password;
            if( lem === email){
                if(pw === password){
                    status = 1;
                    alert("welcome to " + registrationVal.userName);
                    $('#myTabContent').css('display','none');
                    $('#screen2').css('display','block');
                    document.getElementById("displayuser").innerHTML = "User Name : " +registrationVal.userName+" and Uid: "+index;
                }
            }
        });

        if(status == 0){
            alert('Username/password is wrong.');
        } 
    }  
}
