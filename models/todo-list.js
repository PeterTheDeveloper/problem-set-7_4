class TodoList {
    constructor(){
        this.todos = {}
        this.completedTodos = {}
    }
    addTodo(todo){
        this.todos[this.count] = todo;
        return this.count
    }
    
    completeTodo(todoID){
        const myTodo = this.todos[this.count]
        this.completedTodos[todoID] = myTodo;
        delete this.todos[this.count];
        return myTodo;
    }
    
    deleteTodo(todoID){
        if(this.todos[taskID]) { //check
            const myTodo = this.todos[todoID] // save then return
            delete this.todos[todoID]
            return myTodo
        }
        else if (this.completedTodos[todoID]){
            const myTodo = this.completedTodos[todoID]
            delete this.completedTodos[todoID]
            return myTodo;
        }
    }
    
    updateTodo(todoID, newTitle, newDesc){
        this.todos[todosID].title = newTitle;
        this.todos[todoID].description = newDesc;
        return this.todos[todoID]
    }
}

TodoList.count = 0;

module.exports = TodoList;