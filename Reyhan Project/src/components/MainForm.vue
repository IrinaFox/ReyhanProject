<script setup>
import Reyhan from "@/components/Reyhan.vue";
import UserForm from "@/components/UserForm.vue";
import MyCustomButton from "@/components/buttons/MyCustomButton.vue";
import Ira from "@/components/icons/Ira.vue";
</script>

<template>
  <Reyhan text="hah" my-cat="dudu" my-dog="FUFU"></Reyhan>
  <UserForm></UserForm>
  <Ira></Ira>
  <MyCustomButton></MyCustomButton>
  <div>
    <h1>Приветствие</h1>

    <Reyhan text="Добый день УВАЖАЕМЫЕ!"  my-cat="Ya" my-dog="HoHO"/>
    <Reyhan text="Приветствуем ВАС!" my-cat="kuku" my-dog="Vu" />
  </div>
</template>

<style scoped>

</style>