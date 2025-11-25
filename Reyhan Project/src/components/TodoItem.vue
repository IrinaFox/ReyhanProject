<template>
  <div class="todo-item">
    <div class="todo-content">
      <div class="todo-text">
        <p>{{ todo.text }}</p>
        <span class="todo-date">{{ todo.createdAt }}</span>
      </div>
    </div>

    <MyCustomButton @click="$emit('delete', todo.id)" />
  </div>
</template>

<script>
import MyCustomButton from './buttons/MyCustomButton.vue';

export default {
  name: 'TodoItem',
  components: {
    MyCustomButton
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.todo-content {
  flex: 1;
}

.todo-text p {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.todo-date {
  font-size: 12px;
  color: #999;
}
</style>