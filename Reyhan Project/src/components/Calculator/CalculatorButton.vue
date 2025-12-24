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
  padding: 20px;
  font-size: 18px;
}
</style>