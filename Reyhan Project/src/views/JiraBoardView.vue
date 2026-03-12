<script setup>
import { useRouter } from 'vue-router'
import JiraBoard from '@/components/jira/JiraBoard.vue'

const router = useRouter()
</script>

<template>
  <div class="jira">
    <div class="jira__topbar">
      <MyCustomButton text="← Back" color="#6B778C" @click="router.push('/')" />
      <div class="jira__title">JIRA board</div>
      <div class="jira__spacer" />
    </div>

    <JiraBoard />
  </div>
</template>

<style scoped>
.jira {
  display: grid;
  gap: 16px;
}

.jira__topbar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
}

.jira__title {
  font-size: 22px;
  font-weight: 700;
  text-align: center;
}
</style>

