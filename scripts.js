const todoList = {
    data() {
        return {
            todos: [],
            newTodo: { done: false }
        }
    },
    methods: {
        addTodo() {            
            if (this.newTodo.text) {
                this.todos.push(this.newTodo)
                this.newTodo = { done: false }
            } else {
                alert("Texto da tarefa é obrigatório")
            }
        }
    }
}

Vue.createApp(todoList).mount('#app')