var username;


function validateForm(event)
{   
    event.preventDefault();
    if(username_Validation() && ufname_Validation() && ulname_Validation() && validGender() && addr_Validation() && pass_Validation() && pass_Verify())
    {
        userdata();
       /* var x = getdata();
        var json  = JSON.stringify(x);
        console.log(json);*/
       // window.location = "profile.html";
        return true;
    }   
    alert("Form is incomplete..");
    return false;
}

function username_Validation(username)
{
    var uname = document.getElementById("user_name");
    var y = document.getElementsByTagName("label");
    var z = document.getElementsByClassName("div");
    var x =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uname.value.match(x))
    {
        uname.style.color = "green";
        y[0].innerHTML = "Username";
        return true;
    }
    else{
        y[0].innerHTML = "Invalid email/username";
        y[1].style.color = "red";
        return false;
    }
}

function ufname_Validation(fname){
    var ufname = document.vform.fname;
    var y = document.getElementsByTagName("label");
    var z = document.getElementsByClassName("div");
        var a =  /^[A-Za-z]+$/; 
        if(ufname.value.match(a))
        {
            y[1].style.color = "green";
            y[1].innerHTML = "First name";
            return true;
        }
        else if(ufname.value=="")
        {
            ufname.innerHTML = "";
        }
        else{
            y[1].innerHTML = "First name(should contain only alphabets..)";
            y[1].style.color = "red";
            return false;
        }
}
function ulname_Validation(lname)
{
    var ulname = document.vform.lname;
    var y = document.getElementsByTagName("label");
    var z = document.getElementsByClassName("div");
        var b =  /^[A-Za-z]+$/;
        if(ulname.value.match(b))
        {
            y[2].style.color = "green";
            return true;
        }
        else{
            y[2].innerHTML = "Last name(should only contain alphabets..)";
            y[2].style.color = "red";
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

function addr_Validation(addr)
{
    var uaddr = document.vform.addr;
    var y = document.getElementsByTagName("label");
    var z = document.getElementsByClassName("div");
    var t = /^[0-9a-zA-Z]+$/;
    if(uaddr.value.match(t))
    {
        y[4].innerHTML = "Address";
        y[4].style.color = "green";
        return true;
    }
    else{
        y[4].innerHTML = "Invalid address";
        y[4].style.color = "red";
        return false;
    }
}

function pass_Validation(password)
{
    var pass = document.vform.password;
    var temp =pass.value.length;
    if(temp>=6 && temp<=10){
        return true;
    }
    else{
        alert("Password should contain minimum 6 and maximum 10 characters..");
        return false;   
    }

}

function pass_Verify(password_confirm)
{
    var pass = document.vform.password;
    var pass_confirm = document.vform.password_confirm;
    var y = document.getElementsByTagName("label");
    if(pass.value === pass_confirm.value)
    {
        return true;
    }
    else{
        y[6].innerHTML = "Passwords do not match";
        return false;
    }
}

