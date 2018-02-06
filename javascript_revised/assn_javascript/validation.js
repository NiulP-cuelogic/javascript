function validation(event)
{
    event.preventDefault();
    if(email_verify() && name_verify() && password_verify())
    {
        console.log("called");
        getdata();
        return true;
    }
    else{
        return false;
    }
}

function email_verify(email)
{
    var email = document.getElementById("email").value;
    var x = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(x))
    {
        
        document.getElementById("email").style.border = "1px solid #ccc ";
        return true;
    }
    else{
       
        document.getElementById("email").style.border = "2px solid red";
    }
}

function name_verify(name)
{
    var name = document.getElementById("name").value;
    
    if(name =="")
    {
        
        document.getElementById("name").style.border = "2px solid red ";
        return false;
    }
    else{
       
        document.getElementById("name").style.border = "1px solid #ccc";
        return true;
    }
}

function password_verify(password)
{
    var password = document.getElementById("password").value;
  
    if(password =="")
    {
        
        document.getElementById("password").style.border = "2px solid red ";
        return false;
    }
    else{
       
        document.getElementById("password").style.border = "1px solid #ccc";
        return true;
    }
}
