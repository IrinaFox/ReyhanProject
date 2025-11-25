<template>
  <button
      class="add-button"
      :disabled="disabled"
      @click="$emit('click')"
  >
    ➕ Добавить
  </button>
  <div>{{store.name}}</div>
</template>

<script>

export default {
  name: 'AddButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    const store = useMainStore();

    const changeName = () => {
      store.setName('Новое имя')
    }

    return { store, changeName }
  }
}
</script>

<style scoped>
.add-button {
  padding: 12px 24px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.add-button:hover:not(:disabled) {
  background: #45a049;
}

.add-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>