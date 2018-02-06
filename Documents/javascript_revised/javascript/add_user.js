var myjson  = new Array();

function userdata()
{
    var user = getdata();
    var myuser =JSON.stringify(user);
    localStorage.setItem("user",myuser);
    myjson.push(user);
    var username = user.email;
    var username = JSON.stringify(username);
    localStorage.setItem("username",username);
    localStorage.setItem("allusers",JSON.stringify(myjson));
    var x = JSON.parse(localStorage.getItem('user'));
    var y = JSON.parse(localStorage.getItem('allusers'));
    var z=JSON.parse(localStorage.getItem('username'));

    console.log(z);
    console.log(x); 
    console.log(y);
    
    window.location = "userprofile.html";
    //console.log(myjson);
}

function newUser(email,fname,lname,gender,address,pwd)
{
    this.email = email;
    this.fname = fname;
    this.lname = lname;
    this.gender = gender;
    this.address = address;
    this.pwd = pwd;
}   

function getdata()
{
    var email = document.getElementById("user_name").value;
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var gender = document.getElementById("Gender_select").value;
    var address = document.getElementById("user_address").value;
    var pwd = document.getElementById("password").value;

    var new_user = new newUser(email,fname,lname,gender,address,pwd);
    return new_user;
}
