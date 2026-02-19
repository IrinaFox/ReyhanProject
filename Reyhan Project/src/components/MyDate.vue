<script setup>
import { computed } from 'vue'

const now = new Date()

const isoDate = computed(() => now.toISOString())

const localDate = computed(() =>
    now.toLocaleDateString()
)

const time = computed(() =>
    now.toLocaleTimeString()
)

const year = computed(() =>
    now.getFullYear()
)

const month = computed(() =>
    now.getMonth() + 1
)

const day = computed(() =>
    now.getDate()
)

const weekDay = computed(() =>
    now.getDay()
)
</script>

<template>
  <div class="my-date">
    <h2>Работа с Date</h2>

    <p>Текущая дата (ISO): {{ isoDate }}</p>
    <p>Локальная дата: {{ localDate }}</p>
    <p>Время: {{ time }}</p>
    <p>Год: {{ year }}</p>
    <p>Месяц: {{ month }}</p>
    <p>День месяца: {{ day }}</p>
    <p>День недели: {{ weekDay }}</p>
  </div>
</template>

<style scoped>
.my-date {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>