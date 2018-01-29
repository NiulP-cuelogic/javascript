var username;
function ValidateForm(event)
{
    event.preventDefault();

    if(username_Validation() && firstname_Validation() && lastname_Validation() && GenderSelect() && address_Validation() && password_Validation() && password_Verification())
    {
        
        userdata();
        return true;
       
    }
    else{
        alert("form is incomplete");
        return false;
    }
}


function username_Validation(user_name)
{
    var x = document.getElementById("user_name");
    var temp =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(x.value.match(temp))
    {
        document.getElementById("name_error").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("name_error").innerHTML = "Invalid username";
        return false;
    }
}

function firstname_Validation(first_name)
{
    var x = document.getElementById("first_name");
    var temp = /^[A-Za-z]+$/; 
    if(x.value.match(temp))
    {
        document.getElementById("first_name_error").innerHTML = "";
        return true;

    }
    else{
        document.getElementById("first_name_error").innerHTML = "invalid name";
        return false;
    }
}

function lastname_Validation(last_name)
{
    var x = document.getElementById("last_name");
    var temp = /^[A-Za-z]+$/; 
    if(x.value.match(temp))
    {
        document.getElementById("last_name_error").innerHTML = "";
        return true;

    }
    else{
        document.getElementById("last_name_error").innerHTML = "invalid name";
        return false;
    }
}

function GenderSelect()
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

function address_Validation(user_address)
{
    var x = document.getElementById("user_address");
    var temp = /^[0-9a-zA-Z]+$/;
    if(x.value.match(temp))
    {
        document.getElementById("addr_error").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("addr_error").innerHTML = "Invalid address";
        return false;
    }
}

function password_Validation(password)
{
    var x = document.getElementById("password");
    var temp = x.value.length;
    if(temp>=4 && temp<=10)
    {
        document.getElementById("pass_error").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("pass_error").innerHTML = "Invalid password (must be atleast 4 and at most 8 char long)";
        return false;
    }
}
function password_Verification(password_verified)
{
    var x = document.getElementById("password");
    var y = document.getElementById("password_verified");
    if(x.value===y.value)
    {
        document.getElementById("password_error").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("password_error").innerHTML = "Passwords do not match";
        return false;
    }
}