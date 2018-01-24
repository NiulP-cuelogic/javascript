function myFunction()
{
    if(validateForm())
    {
        var uemail = document.getElementById("user-email");
        var ufname = document.getElementById("first_name");
        var ulname = document.getElementById("last_name");
        var ugender = document.getElementById("gender");
        var uaddr = document.getElementById("user_address");
        var upass = document.getElementById("user_password");

        var myObj = new Object();
    }
}
function validateForm(){

    if(username_Validation()){
    if(ufname_Validation()){  
    if(ulname_Validation())
    {
    if(validGender())
    {
    if(addr_Validation())
    {
    if(pass_Validation())
    {
        return true;   
    }   
    }
    }
    }
    }/*function validateForm()
{
    var uname = document.registration.username;
    var ufname = document.registration.fname;
    var ulname = document.registration.lname;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    var uaddr = document.registration.addr;
    var pass = document.registration.user-password;
    if(username_Validation(username))
    {
    if(ufname_Validation(ufname))
    {
    if(ulname_Validation(ulname))
    {
    if(validGender(umsex,ufsex))
    {
    if(addr_Validation(addr))
    {
    if(pass_Validation(pass))
    {

    }
    }
    }    
    }    
    }
    }
    return false;
}*/
    }
    return false;
    
}
function field1()
{
    if(username_Validation()){
        return true;
    }
    return false;
}
function username_Validation()
{
    var username = document.registration.uname;
    var x =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(username.value.match(x))
    {
        return true;
    }
    else{
        alert("Invalid email");
        return false;
    }
}

function ufname_Validation(){
    var ufname = document.registration.fname;
        var a =  /^[A-Za-z]+$/; 
        if(ufname.value.match(a))
        {
            return true;
        }
        else{
            alert("First Name must have alphabets only");
            return false;
        }
}
function ulname_Validation()
{
    var ulname = document.registration.lname;

        var b =  /^[A-Za-z]+$/;
        if(ulname.value.match(b))
        {
            return true;
        }
        else{
            alert("Last Name must have alphabets only");
            return false;
        }
}

function validGender()
{
    var x = document.getElementsByName("gender");
    var i;
    for(i=0;i<x.length;i++)
    {
        if(x[i].checked)
        {
            return true;
        }
    }
    alert("Select atleast one gender");
    return false;
}

function addr_Validation()
{
    var uaddr = document.registration.addr;
    var t = /^[0-9a-zA-Z]+$/;
    if(uaddr.value.match(t))
    {
        return true;
    }
    else{
        alert("No special symbol allowed..");
        return false;
    }
}

function pass_Validation()
{
    
    var pass = document.registration.pwd;
    var temp =pass.value.length;
    if(temp>=6 && temp<=10){
        return true;
    }
    else{
        alert("Password should contain minimum 6 and maximum 10 characters..");
        return false;   
    }

}


