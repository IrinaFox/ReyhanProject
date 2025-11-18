<template>
  <button
      class="delete-button"
      @click="$emit('click')"
  >
    🗑️ Удалить
  </button>
</template>

<script>
export default {
  name: 'DeleteButton'
}
</script>

<style scoped>
.delete-button {
  padding: 8px 16px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.delete-button:hover {
  background: #d32f2f;
}
</style>