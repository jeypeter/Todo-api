var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
    id: 1,
    description: "Meet mum for lunch",
    completed: false
},{
    id: 2,
    description: "Go to market",
    completed: false
},{
    id: 3,
    description: "Go to Town",
    completed: true
},{
    id: 4,
    description: "Go to that friends place",
    completed: false
}];

// Get all the todo items :todos/
app.get('/todos', function(request, response){
    response.json(todos); // converted to json and sent back to where request was made
});

// Get individual todos :/todos/:id
app.get('/todos/:id', function(request, response){
    var todoId = parseInt(request.params.id, 10);

    // Iterate through the todos array to find a match
    var matchedTodo;

    todos.forEach(function(todo){
        if(todoId === todo.id){
            matchedTodo = todo;
        }
    });

    if(matchedTodo){
        // matched todo is found
        response.json(matchedTodo);
    }else{
        //If no match  call response.status(404).send()
        response.status(404).send();
    }
});


app.get('/', function(request, response){
    response.send("TODO API root");
});

app.listen(PORT, function(){
    console.log("Express listening on port "+ PORT + " !");
});