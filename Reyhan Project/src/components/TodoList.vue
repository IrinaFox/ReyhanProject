<template>
  <div class="todo-list">
    <div v-if="todos.length === 0" class="empty-state">
      <p>📭 Список задач пуст</p>
    </div>

    <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="$emit('delete-todo', $event)"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #999;
}
</style>