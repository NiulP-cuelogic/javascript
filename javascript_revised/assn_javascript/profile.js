var username = JSON.parse(localStorage.getItem('username'));

var allusers = JSON.parse(localStorage.getItem('allusers'));
//console.log(users);
//console.log(users[0].name);

var x = search(username,allusers);
var obj = allusers[i];
document.getElementById("email").value = obj.email;
  document.getElementById("name").value = obj.name;
document.getElementById("email").innerHTML = obj.email;
  document.getElementById("name").innerHTML = obj.name;
 function search(username,allusers)
 {
         for(i=0;i<allusers.length;i++)
         {
                 if(username === allusers[i].email)
                 {
                         return i;
                 }
         }
 }
 