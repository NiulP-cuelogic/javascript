function login(event)
{
    event.preventDefault();

    var username=document.getElementById("username").value;
    var pwd=document.getElementById("pwd").value;
    var allusers = JSON.parse(localStorage.getItem('allusers'));
    var x = search(username, allusers);
    if(x!=null){
        window.alert("welcome");
        localStorage.setItem('username',username);
        window.location = './homepage.html';

    }
    else
    window.alert("please register first");
}
function search(username,allusers){
    for (x=0; x<allusers.length; x++){
        if(username==allusers[x].Email)
            return x;    
       }
       return null;
}