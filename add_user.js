function user(Fname,Lname,Email,Address,pwd,gender) {

    

    var userObj={"firstname":Fname,"lastname":Lname,"email":Email,"address":Address,"password":pwd,"Gender":gender};

    var myJson = JSON.stringify(userObj);
    arr = getdata();
    arr.push(myJson);
    localStorage.setItem('username',userObj.email);
   
    localStorage.setItem("user",JSON.stringify(arr));
    var obj = JSON.parse(localStorage.getItem("user"));
}
 
function userdata()
{
    var Fname= document.getElementById("first_name").value;
    var Lname= document.getElementById("last_name").value;
    var Email= document.getElementById("user_name").value;
    var Address= document.getElementById("user_address").value;
    var pwd= document.getElementById("password_verified").value;
    var gender= document.getElementById("Gender_select").value;

    user(Fname,Lname,Email,Address,pwd,gender);

    window.location = "homepage.html";
}

function getdata()
{
    var arr = new Array;
    var data_str = localStorage.getItem('user');
    if (data_str !== null) {
        arr = JSON.parse(data_str); 
    }
    else
    {
        console.log("1111");
    }
    
    return arr;
}


/*function getdata()
{   
    var Fname= document.getElementById("first_name").value;
    var Lname= document.getElementById("last_name").value;
    var Email= document.getElementById("user_name").value;
    var Address= document.getElementById("user_address").value;
    var pwd= document.getElementById("password_verified").value;
    var gender= document.getElementById("Gender_select").value;

    var new_user = new user(Fname,Lname,Email,Address,pwd,gender);
    return new_user;
}*/


function User_add()
{
    

}