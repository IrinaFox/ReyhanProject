<script setup>
import Reyhan from "@/components/Reyhan.vue";
import UserForm from "@/components/UserForm.vue";
import RedButton from "@/components/RedButton.vue";
import GreenButton from "@/components/GreenButton.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <Reyhan></Reyhan>
  <UserForm></UserForm>
  <Button></Button>
  <GreenButton></GreenButton>
  <RedButton></RedButton>
  <div>
    <h1>Приветствие</h1>

    <Reyhan text="Добый день УВАЖАЕМЫЕ!" />
    <Reyhan text="Приветствуем ВАС!" />
  </div>
</template>

<style scoped>

</style>