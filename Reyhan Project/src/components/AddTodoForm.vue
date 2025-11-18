<template>
  <div class="add-todo-form">
    <input
        v-model="newTodoText"
        type="text"
        placeholder="Введите новую задачу..."
        @keyup.enter="handleAdd"
        class="todo-input"
    >
    <AddButton @click="handleAdd" :disabled="!newTodoText.trim()" />
  </div>
</template>

<script>
import AddButton from './buttons/AddButton.vue'

export default {
  name: 'AddTodoForm',
  components: {
    AddButton
  },
  data() {
    return {
      newTodoText: ''
    }
  },
  methods: {
    handleAdd() {
      if (this.newTodoText.trim()) {
        this.$emit('add-todo', this.newTodoText.trim())
        this.newTodoText = ''
      }
    }
  }
}
</script>

<style scoped>
.add-todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.todo-input {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

.todo-input:focus {
  outline: none;
  border-color: #4CAF50;
}
</style>