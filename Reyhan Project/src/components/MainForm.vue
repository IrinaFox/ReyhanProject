<script setup>
import Reyhan from "@/components/Reyhan.vue";
import UserForm from "@/components/UserForm.vue";
import RedButton from "@/components/buttons/RedButton.vue";
import GreenButton from "@/components/buttons/GreenButton.vue";
import Button from "@/components/buttons/Button.vue";
</script>

<template>
  <Reyhan text="hah" my-cat="dudu" my-dog="FUFU"></Reyhan>
  <UserForm></UserForm>
  <Button></Button>
  <GreenButton></GreenButton>
  <RedButton></RedButton>
  <div>
    <h1>Приветствие</h1>

    <Reyhan text="Добый день УВАЖАЕМЫЕ!"  my-cat="Ya" my-dog="HoHO"/>
    <Reyhan text="Приветствуем ВАС!" my-cat="kuku" my-dog="Vu" />
  </div>
</template>

<style scoped>

</style>