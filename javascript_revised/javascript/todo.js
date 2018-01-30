
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
    var todoarr  = new Array();
    function saveItem(){
        console.log("called..");
        var title=document.getElementById("todoTitle").value;
        var duedate=document.getElementById("Due_date").value;
        var category=document.querySelector('input[name = "Category"]:checked').value;
        var reminder=document.getElementById("reminder").checked;
        var reminderdate=document.getElementById("Rdate").value;
        var visibility=document.querySelector('input[name = "visibility"]:checked').value;
      
        var item=new getitem(title,duedate,category,reminder,reminderdate,visibility);
        var username = JSON.parse(localStorage.getItem('username'));
        var allusers = JSON.parse(localStorage.getItem('allusers'));
        var x=search(username,allusers);
        if(allusers[x].todo == undefined)
            allusers[x].todo= new Array();
        allusers[x].todo.push(item);
        localStorage.setItem("allusers", JSON.stringify(allusers));
        console.log(allusers);
        var todoList = allusers[x].todo;
        console.log(todoList);
        var arr = todoList;
        JSON.stringify(arr);
        //console.log(arr);
        todoarr.push(arr);
        console.log(todoarr[0]);
        //console.log(arr);
        //console.log(arr.title);
        //console.log(arr.reminder);
       
       /*document.getElementById("todotitle").innerHTML = arr.title;
       document.getElementById("tododuedate").innerHTML = arr.duedate;
       document.getElementById("todocategory").innerHTML = arr.category;
       document.getElementById("todoreminder").innerHTML = arr.reminder;
       document.getElementById("todoreminderdate").innerHTML = arr.reminderdate;
       document.getElementById("todovisibility").innerHTML = arr.visibility;*/
        //window.location="todo.html";
    }

    function displayItem()
    {
        console.log("called..");
        var username = JSON.parse(localStorage.getItem('username'));
       // var item=new getitem(title,duedate,category,reminder,reminderdate,visibility);
        var allusers = JSON.parse(localStorage.getItem('allusers'));
        var x=search(username,allusers);
        // if(allusers[x].todo==undefined)
        // allusers[x].todo= new Array();
        
        // localStorage.setItem("allusers", JSON.stringify(allusers));
        //console.log(allusers);

        if( !allusers[x].todo ) {
            return;
        }

        todoarr = allusers[x].todo;

        for(var i=0;i<todoarr.length;i++)
        {
            //var arr=JSON.parse(todoarr[i]);
             //window.alert(arr);
            var title=todoarr[i].title;
            var duedate=todoarr[i].duedate;
            var category=todoarr[i].category;
            var reminder=todoarr[i].reminder;
            var reminderdate=todoarr[i].reminderdate;
            var visibility=todoarr[i].visibility;
            var oldrow=document.getElementById("todotable");//parent
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

        function deleteItem()
        {
        var username = JSON.parse(localStorage.getItem('username'));
        var allusers = JSON.parse(localStorage.getItem('allusers'));
        var x = search(username, allusers);
        var todolist = allusers[x].todo;
        for (i = 0; i < todolist.length; i++) {
        var arr = todolist[i];
        if (document.getElementById("check" + i).checked == true) {
            todolist.splice(i, 1);
            i = -1;
        }
    }
    setArray(allusers);
    location.reload();


        }
    var status = "doing";
    function getitem(title,duedate,category,reminder,reminderdate,visibility)
    {
    this.title=title;
    this.duedate=duedate;
    this.category=category;
    this.reminder=reminder;
    this.reminderdate=reminderdate;
    this.visibility=visibility;
    }
    function search(username,allusers){
        for (var i=0; i<allusers.length; i++){
            if(username===allusers[i].email)
                return i;
           }
       }
    
    function addreminder(){
        document.getElementById("time").style.display="block";
    }