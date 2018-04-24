class List {
    constructor(){
        this.first = new Task("");
        this.size = 0;
        this.idGenerator = 0;
    }

    insertTask(task){
        task.id = this.idGenerator++;

        let node = this.first
        while(node.next != null) {
            node = node.next;
        }
        node.addTask(task);
        this.size++;
    }
    
    removeTask(id){
        let node = this.first;
        
        if(!node) return;

        while(node.next != null && "task"+node.next.id != id){
            node = node.next;
        }
        if(node.next != null){
            let list = document.getElementById('list');
            let task = document.getElementById(id);
            if(task){
                list.removeChild(task);
            }
            let removed = node.next;
            node.next = removed.next;
        }
    }

    debugList(){
        let node = this.first.next;
        while(node != null){
            console.log(node.name);
            node = node.next;
        }
    }
}

class Task {
    constructor(name){
        this.name = name;
        this.id = 0;
        this.next = null;
    }

    addTask(task){
        this.next = task; 
        task.createTask();
    }

    createTask() {
        let list = document.getElementById('list');
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(this.name));
        item.setAttribute("id", "task"+this.id);

        var inputElement = document.createElement('input');
        inputElement.type = "button";
        inputElement.value = "-";
        inputElement.addEventListener('click', function(){
            onRemoveTaskEvent(this.parentNode.id);
        });

        item.appendChild(inputElement);

        list.appendChild(item);    
    }
}


function onAddTaskEvent(){
    let input = document.getElementById('addValue');
    if(input && input.value != ""){
        let task = new Task(input.value);
        head.insertTask(task);
        input.value = "";
    }
}

function onRemoveTaskEvent(id){
    head.removeTask(id);
}

let head = new List();

var input = document.getElementById("addValue");

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        onAddTaskEvent();
    }
});

// var task1 = new Task("task1");
// var task2 = new Task("task2");

// head.insertTask(task1);
// head.insertTask(task2);

// document.write('hey');
