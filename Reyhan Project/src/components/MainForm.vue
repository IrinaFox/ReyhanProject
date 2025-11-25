<script setup>
import Reyhan from "@/components/Reyhan.vue";
import UserForm from "@/components/UserForm.vue";
import MyCustomButton from "@/components/buttons/MyCustomButton.vue";
</script>

<template>
  <Reyhan text="hah" my-cat="dudu" my-dog="FUFU"></Reyhan>
  <UserForm></UserForm>
  <div>
    <h1>Приветствие</h1>

    <Reyhan text="Добый день УВАЖАЕМЫЕ!"  my-cat="Ya" my-dog="HoHO"/>
    <Reyhan text="Приветствуем ВАС!" my-cat="kuku" my-dog="Vu" />
  </div>
</template>

<style scoped>

</style>