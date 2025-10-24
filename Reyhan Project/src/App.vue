<script setup>
import Header from "@/components/Header.vue";
import Body from "@/components/Body.vue";
import Footer from "@/components/Footer.vue";
import ToDo from './components/ToDo.vue'
</script>

<template>
  <Header></Header>
  <Body></Body>
  <Footer></Footer>
  <ToDo></ToDo>
  <!-- пример блока с тенью снизу -->
  <div class="drop-shadow bottom">
    С Новым годом!!!
  </div>
</template>

<style scoped>


</style>
