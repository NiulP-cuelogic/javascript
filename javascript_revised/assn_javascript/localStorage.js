var users = new Array();

function getdata()
{
   
    
    
    var email=  document.getElementById("email").value;
    var name=  document.getElementById("name").value;
    var password=  document.getElementById("password").value;
    var new_user = new user(email,name,password);
    //console.log(new_user);
    users.push(new_user);
    var username = new_user.email;
    var username = JSON.stringify(username);
     var allusers = JSON.stringify(users);
    console.log(username);
    localStorage.setItem("username",username);
    var allusers =localStorage.setItem("allusers",allusers);
        console.log(users);
    //console.log(users);
   //window.location = "profile.html";
}

function user(email,name,password)
{
    this.email = email;
    this.name = name;
    this.password= password;
}