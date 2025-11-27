<script setup>
import { ref } from 'vue';

// Первая переменная и функция (для v-if)
const isShown1 = ref(false)
const toggle1 = () => {
  isShown1.value = !isShown1.value
}

// Вторая переменная и функция (для v-show)
const isShown2 = ref(false)
const toggle2 = () => {
  isShown2.value = !isShown2.value
}
</script>

<template>
  <div class="p-4">
    <!-- Первый блок с v-if -->
    <button @click="toggle1" class="bg-blue-500 text-white px-4 py-2 rounded">
      Фрукты
    </button>

    <div v-if="isShown1" class="mt-2 p-2 border">
      Яблоко
    </div>

    <!-- Второй блок с v-show -->
    <button @click="toggle2" class="bg-green-500 text-white px-4 py-2 rounded mt-4">
      Овощи
    </button>

    <div v-show="isShown2" class="mt-2 p-2 border">
      Морковь
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 10px 20px;
  background: #4CAF50;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  margin-top: 10px;
}
</style>