<script setup>
import { useRouter } from 'vue-router'

import Calculator from '@/components/Calculator/Calculator.vue'
import NewButton from '@/components/buttons/NewButton.vue'

const router = useRouter()
</script>

<template>
  <div class="home">
    <div class="home__actions">
      <MyCustomButton text="Open JIRA" color="#0052CC" icon="🧩" @click="router.push('/jira')" />
    </div>

    <Calculator />
    <NewButton />
  </div>
</template>

<style scoped>
.home {
  display: grid;
  gap: 24px;
}

.home__actions {
  display: flex;
  justify-content: flex-end;
}
</style>

