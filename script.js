

var todoList = {
	todos: [],
	todoUL: document.getElementById("todoList"),
	todoLI: document.getElementsByTagName("li"),

	displayTodos: function() {
		

		if(this.todos.length === 0){
			console.log("Your todo list is empy!");
		} else {
		console.log("My Todos:");
		for(var i = 0; i < this.todos.length; i++){

			if(this.todos[i].completed === true){
				console.log('(x)', this.todos[i].todoText);
			} else {
				console.log('( )', this.todos[i].todoText);
			}
		}
	  }

	  		
	

		  this.todoUL.innerHTML+="<li name=" + (this.todos.length - 1) + " class='item'><input type='checkbox' name=" + (this.todos.length - 1) + ">" + this.todos[this.todos.length - 1].todoText + 
		  "</input><button name=" + (this.todos.length - 1) + " onclick='handlers.deleteTodo(event)' class='hidden'>(X)</button></li>";
		 // this.addHoverListener();
		

		
	},

	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});

		
		this.displayTodos();
	},

	addHoverListener: function(){
		this.todoLI[this.todoLI.length-1].addEventListener("mouseover",  function() {
   			 handlers.addDeleteClass(event);
		});

		this.todoLI[this.todoLI.length-1].addEventListener("mouseout", handlers.removeDeleteClass);
	},

	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},

	deleteTodos: function(position) {
		this.todos.splice(position,1);
		this.displayTodos();
	},

	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},

	toggleAll: function(){
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		for(var i = 0; i < totalTodos; i++){
			if(this.todos[i].completed === true){
				completedTodos++;
			}
		}

		if(completedTodos === totalTodos){
			for(var i = 0; i < totalTodos; i++){
				this.todos[i].completed = false;
			}

		} else {
			for(var i = 0; i < totalTodos; i++){
				this.todos[i].completed = true;
			}
		}

		this.displayTodos();
	}

};


var handlers = {
	displayTodos: function() {
		
		todoList.toggleAll();

		

	},

	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},

	changeTodo: function(){
		debugger;
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
	},

	deleteTodo: function(index){
		/*var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodos(deleteTodoPositionInput.valueAsNumber);
		var todoLI = document.getElementById('todoList')

		todoLI.removeChild(todoLI.childNodes[deleteTodoPositionInput.valueAsNumber]);
		console.log(todoLI.childNodes[deleteTodoPositionInput.valueAsNumber]);
	
		deleteTodoPositionInput.value = '';*/

		var x = index.target;
		var y = x.getAttribute('name');
		console.log(x.parentElement);	
		var z = x.parentElement;
		todoList.deleteTodos(y);
		
		todoList.todoUL.removeChild(z);
	},

	toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
	},

	toggleAll: function() {
		todoList.toggleAll();
	},

	addDeleteClass: function(index) {

		var x = index.target;
		var y = x.getAttribute('name');
		
		//document.getElementsByClassName("destroy").style.display = "block";
		//console.log(todoList.todoLI[y].childNodes.length);


		
	    todoList.todoLI[y].childNodes[2].className = "";
		
	
	},

	removeDeleteClass: function(index) {
		var x = index.target;
		var y = x.getAttribute('name');		
		//document.getElementsByClassName("destroy").style.display = "none";
	    todoList.todoLI[y].childNodes[2].className = "hidden";
	
	}




};
	



/*todoList.todoUL.addEventListener("mouserover", function() {
    handlers.addDeleteClass();
});*/