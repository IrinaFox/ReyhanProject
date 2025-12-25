<script setup>
const props = defineProps({
  label: String
})

const emit = defineEmits(['press'])

function handleClick() {
  emit('press', props.label)
}
</script>

<template>
  <button @click="handleClick">
    {{ label }}
  </button>
</template>

<style scoped>
button {
  font-size: 1.5rem;
  padding: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  box-shadow: 3px 3px 8px #b0b0b0, -3px -3px 8px #ffffff;
}

/* Цвета кнопок */
button.number {
  background: #f1f1f1;
  color: #333;
}

button.operator {
  background: #ff9500;
  color: #fff;
}

button.clear {
  background: #ff3b30;
  color: #fff;
}

button.equals {
  background: #34c759;
  color: #fff;
}

/* Эффект нажатия */
button:active {
  transform: translateY(2px);
  box-shadow: inset 2px 2px 5px #aaa, inset -2px -2px 5px #fff;
}
button:active {
  transform: translateY(2px);
  box-shadow: inset 2px 2px 5px #aaa, inset -2px -2px 5px #fff;
}
</style>