<template>
  <div class="todo-app">
    <h1>📝 Мой список задач</h1>

    <!-- Форма добавления -->
    <AddTodoForm @add-todo="addTodo" />

    <!-- Список задач -->
    <TodoList :todos="todos" @delete-todo="deleteTodo" />

    <p class="stats">Всего задач: {{ todos.length }}</p>
  </div>
</template>

<script>
import AddTodoForm from './AddTodoForm.vue'
import TodoList from './TodoList.vue'

export default {
  name: 'ToDo',
  components: {
    AddTodoForm,
    TodoList
  },
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    this.loadTodos()
  },
  methods: {
    addTodo(todoText) {
      const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false,
        createdAt: new Date().toLocaleString()
      }

      this.todos.push(newTodo)
      this.saveTodos()
    },

    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      this.saveTodos()
    },

    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    loadTodos() {
      const saved = localStorage.getItem('todos')
      if (saved) {
        this.todos = JSON.parse(saved)
      }
    }
  }
}
</script>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 30px auto;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.stats {
  text-align: center;
  color: #666;
  margin-top: 20px;
  font-size: 14px;
}
</style>