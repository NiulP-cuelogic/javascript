var users = new Array();
function getid(){
for(i=0;i<users.length;i++)
{
    new_user.user_id = i;
}
}

function getdata()
{
   
    
    var user_id = getid();
    var email=  document.getElementById("email").value;
    var name=  document.getElementById("name").value;
    var password=  document.getElementById("password").value;
    var new_user = new user(user_id,email,name,password);
    console.log(new_user);
    users.push(new_user);
    getid();
    var new_user = new user(user_id,email,name,password);
    console.log(users);
}

function user(user_id,email,name,password)
{
    this.user_id=getid();
    this.email = email;
    this.name = name;
    this.password= password;
}