var users = new Array();

function user(email,name,password)
 {
     this.email = email;
     this.name = name;
     this.password= password;
}

function getdata()
{
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    
    var new_user = new user(email,name,password);

    //console.log(new_user);

    users.push(new_user); 
    var allusers = JSON.stringify(users);
    var username = new_user.email;
    username = JSON.stringify(username);
    console.log(username);
    console.log(allusers);
    localStorage.setItem("username",username);
    localStorage.setItem("allusers",allusers);
    console.log(username);
    console.log(allusers);
    window.location = "profile.html";
    //console.log(users);
}

// var objLocalStorage = (function(){

// //     function user(email,name,password)
// // {
// //     this.email = email;
// //     this.name = name;
// //     this.password= password;
// // }
// function getdata(){

//     function user(email,name,password)
//     {
//         this.email = email;
//         this.name = name;
//         this.password= password;
//     }

//     var email=  document.getElementById("email").value;
//     var name=  document.getElementById("name").value;
//     var password=  document.getElementById("password").value;
//     var new_user = new user(email,name,password);
//     console.log(new_user);
//     users.push(new_user);
//     var username = new_user.email;
//     var username = JSON.stringify(username);
//     var allusers = JSON.stringify(users);
//     console.log(username);
//     var username = localStorage.setItem("username",username);
//     var allusers =localStorage.setItem("allusers",allusers);
//     // console.log(users);
//     console.log(allusers);
//     //window.location = "profile.html";
//     }

//     return {
//         getdata: getdata
//     };
// })();

// localStorage.getdata();

// function getdata()
//  {
   
    
    
//     var email=  document.getElementById("email").value;
//     var name=  document.getElementById("name").value;
//     var password=  document.getElementById("password").value;
//     var new_user = new user(email,name,password);
//     return new_user;
//     //console.log(new_user);     
//     // users.push(new_user);
//     // var username = new_user.email;
//     // username = JSON.stringify(username);
//     // localStorage.setItem("username",username);
//     // var allusers = JSON.stringify(users);
//     // localStorage.setItem("allusers",allusers);
//     // console.log(allusers);
//     // console.log(username);
//     // window.location = "profile.html";
//  }

// var objLocalStorage= (function(){

//     function getdata()
//     {
//     var email=  document.getElementById("email").value;
//     var name=  document.getElementById("name").value;
//     var password=  document.getElementById("password").value;
//     var new_user = new user(email,name,password);
//     return new_user;  
//     }

//     var user =  getdata();
//     console.log(user);

//     return {
//         getdata:getdata
//     };

// })();

// var localStorage = (function(){

//     var abc = function() {
//         xyz();
//     };
    
//     var xyz = function() {
    
//     };
    
//     return {
//         test : abc
//     };
    
//     })();