<script setup>

</script>

<template>
  <button class="btn">Нажми меня</button>
  <div class="red-box">Красный</div>
  <div class="green-box">Зелёный</div>
</template>

<style scoped>
button {
  background-color: purple;
  color: yellow;
}

.btn {
  width: 200px;
  height: 50px;
  padding: 10px 20px;
  border: 2px solid #4a90e2;
  border-radius: 8px;
  margin: 20px;
  box-sizing: border-box;
  background-color: #6aa9ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

#mainBtn {
  background-color: orange;
}

button {
  background-color: black !important;
}

.red-box {
  background-color: red;
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
  color: white;
  margin-bottom: 20px;
}

.green-box {
  background-color: green;
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: content-box;
  color: white;
}
</style>