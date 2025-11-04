<template>
  <div class="todo-app">
    <h1>📝 Мой список задач</h1>

    <!-- Форма добавления -->
    <div class="input-area">
      <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          placeholder="Введите задачу..."
          class="input"
      />
      <button @click="addTodo" class="btn-add">Добавить</button>
    </div>

    <!-- Список задач -->
    <ul class="todo-list" v-if="todos.length > 0">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <div class="todo-content">
          <input
              type="checkbox"
              :checked="todo.completed"
              @change="toggleTodo(todo.id)"
              class="checkbox"
          />
          <span :class="{ completed: todo.completed }">
            {{ todo.text }}
          </span>
        </div>
        <button @click="deleteTodo(todo.id)" class="btn-delete">
          ❌
        </button>
      </li>
    </ul>

    <p v-else class="empty-message">Нет задач. Добавьте первую!</p>

    <p class="stats">Всего задач: {{ todos.length }}</p>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data() {
    return {
      todos: [],
      newTodoText: '',
      newTodo: '' // добавлено для совместимости
    }
  },
  mounted() {
    this.loadTodos()
  },
  methods: {
    addTodo() {
      if (!this.newTodoText.trim()) return

      const newTodo = {
        id: Date.now(),
        text: this.newTodoText,
        completed: false,
        createdAt: new Date().toLocaleString()
      }

      this.todos.push(newTodo)
      this.newTodoText = ''
      this.saveTodos()
    },

    toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
        this.saveTodos()
      }
    },

    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      this.saveTodos()
    },

    saveTodos() {
      try {
        localStorage.setItem('todos', JSON.stringify(this.todos))
      } catch (e) {
        console.warn('localStorage не доступен:', e)
      }
    },

    loadTodos() {
      try {
        const saved = localStorage.getItem('todos')
        if (saved) {
          this.todos = JSON.parse(saved)
        }
      } catch (e) {
        console.warn('Не удалось загрузить задачи:', e)
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
  font-size: 24px;
}

.input-area {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input {
  flex: 1;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
}

.input:focus {
  outline: none;
  border-color: #42b983;
}

.btn-add {
  padding: 12px 24px;
  background: #42b983;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.btn-add:hover {
  background: #2b8c66;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 10px;
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-content span {
  font-size: 16px;
  color: #333;
}

.todo-content span.completed {
  text-decoration: line-through;
  color: #999;
}

.btn-delete {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
}

.btn-delete:hover {
  transform: scale(1.2);
}

.empty-message {
  text-align: center;
  color: #999;
  padding: 40px 0;
  font-size: 16px;
}

.stats {
  text-align: center;
  color: #666;
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
}
</style>