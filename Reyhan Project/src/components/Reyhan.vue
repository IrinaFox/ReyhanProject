<script setup>

</script>

<template>
  <!-- Здесь пишется весь HTML код -->
  <div class="container">
    <h1>Здравствуй Дедушка Мороз</h1>
    <p>Здравствуй Дедушка Мороз,борода из ваты.
    Ты подарки нам принес?</p>
    <input type="radio" name="answer" value="yes"> Да
    <input type="radio" name="answer" value="no"> Нет
    <input type="button" class="blue-btn" onclick="alert('Ваш ответ принят!')" value="Отправить">
  </div>
</template>

<style scoped>
.blue-btn {
  background-color: #007bff; /* Синий цвет */
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
}

/* При наведении */
.blue-btn:hover {
  background-color: #0056b3; /* Темнее при наведении */
}
</style>