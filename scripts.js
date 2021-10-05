const todoList = {
    data() {
        return {
            todos: [],
            newTodo: {}
        }
    },
    methods: {
        newTask() {
            this.newTodo.done = false
            this.todos.push(this.newTodo)
            this.newTodo = {}
        }
    }
}

Vue.createApp(todoList).mount('#app')