<script setup>

</script>

<template>
  <button class="btn">Нажми меня</button>
  <div class="red-box">Красный</div>
  <div class="green-box">Зелёный</div>
</template>

<style scoped>
.btn {
  /* Content */
  width: 200px;
  height: 50px;

  /* Padding */
  padding: 10px 20px;

  /* Border */
  border: 2px solid #4a90e2;
  border-radius: 8px;

  /* Margin */
  margin: 20px;

  /* Box model control */
  box-sizing: border-box;

  /* Дополнительно для красоты */
  background-color: #6aa9ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.red-box {
  background-color: red;
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box; /* учитывает padding и border в ширине и высоте */
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