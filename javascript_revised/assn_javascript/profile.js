var username = JSON.parse(localStorage.getItem('username'));
        document.getElementById("demo").innerHTML = username;
        var users = JSON.parse(localStorage.getItem('allusers'));
        console.log(users);
        console.log(users[0].name);
    