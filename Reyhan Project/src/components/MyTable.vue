<script setup>

</script>

<template>
  <div class="wrapper">
    <div class="header">
      <h2>My Table</h2>
      <button>Add</button>
    </div>

    <div class="table">
      <div class="row">
        <div class="cell">ID</div>
        <div class="cell">Name</div>
        <div class="cell">Email</div>
      </div>

      <div class="row">
        <div class="cell">1</div>
        <div class="cell">Reyhan</div>
        <div class="cell">reyhan@mail.com</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column; /* элементы идут сверху вниз */
  gap: 20px;
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between; /* заголовок слева, кнопка справа */
  align-items: center; /* выравнивание по вертикали */
}
.row {
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 10px;
}
.cell {
  flex: 1; /* все ячейки занимают равное пространство */
  text-align: center;
}
</style>