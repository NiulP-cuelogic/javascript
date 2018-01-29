
/*function loadhomepage(){
    username=localStorage.getItem('username');
    document.getElementById("username").innerHTML=username;
    var  allusers = JSON.parse(localStorage.getItem('allusers'));
    var x=search(username,allusers);
    var todolist=allusers[x].todo;
    // window.alert(todolist[0]);
    // var arr=JSON.parse(todolist);
    // window.alert(todolist[1]);
    for(i=0;i<todolist.length;i++)
    {   var arr=JSON.parse(todolist[i]);
        // window.alert(arr);
       var title=arr.title;
        var duedate=arr.duedate;
        var category=arr.category;
        var reminder=arr.reminder;
        var reminderdate=arr.reminderdate;
        var visibility=arr.visibility;
    
        var oldrow=document.getElementById("customers");//parent
        var node = document.createElement("tr");
        node.setAttribute("id", i);
        oldrow.appendChild(node);
        document.getElementById(i).innerHTML=" <td>"+(i+1)+". <input type='checkbox' style='height:20px;width:20px' onchange=makestrikethrough("+i+")> "+"</td>"+
                                                    "<td>"+title+"</td>"+
                                                  "<td>"+category+"</td>"+
                                                  "<td>"+duedate+"</td>"+
                                                  "<td>"+reminder+"</td>"+
                                                  "<td>"+reminderdate+"</td>"+
                                                  "<td>"+visibility+"</td>";
        
    }
    
    }
    function addItem(){
        //window.location="newtodo.html";
        loadhomepage();
    }
    var flag=true;
    function makestrikethrough( i){
        if(flag==true)
        {
        document.getElementById(i).style.textDecoration = "line-through";
        flag=false;
            return;
        }
        if(flag==false)
        {
            document.getElementById(i).style.textDecoration = "none";
            flag=true;
                return;
        }
        
    }*/
    function saveItem(){
        console.log("called..");
        var title=document.getElementById("todoTitle").value;
        var duedate=document.getElementById("Due_date").value;
        var category=document.querySelector('input[name = "Category"]:checked').value;
        var reminder=document.getElementById("reminder").checked;
        var reminderdate=document.getElementById("Rdate").value;
        var visibility=document.querySelector('input[name = "visibility"]:checked').value;
        var item=new getitem(title,duedate,category,reminder,reminderdate,visibility);
        localStorage.getItem('username');
        var allusers = JSON.parse(localStorage.getItem('allusers'));
        var x=search(username,allusers);
        if(allusers[x].todo==undefined)
        allusers[x].todo= new Array();
        allusers[x].todo.push(JSON.stringify(item));
        localStorage.setItem("allusers", JSON.stringify(allusers));
        console.log(allusers);
        var todoList = allusers[x].todo;
        console.log(todoList);
        var arr = JSON.parse(todoList);
        JSON.stringify(arr);
        console.log(arr);
        console.log(title);
        console.log(reminder);
        //window.location="todo.html";
    }
    
    function getitem(title,duedate,category,reminder,reminderdate,visibility,item)
    {
    this.title=title;
    this.duedate=duedate;
    this.category=category;
    this.reminder=reminder;
    this.reminderdate=reminderdate;
    this.visibility=visibility;
    }
    function search(username,allusers){
        for (x=0; x<allusers.length; x++){
            if(username==allusers[x].Email)
                return x;
           }
       }
    
    function addreminder(){
        document.getElementById("time").style.display="block";
    }