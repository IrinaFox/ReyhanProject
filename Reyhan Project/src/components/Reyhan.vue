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

  <!-- Div с классом -->
  <div class="container">
    <h1>Приветствуем!</h1>
    <p>Добро пожаловать на наш сайт</p>
  </div>

  <!-- Div с ID -->
  <div id="header">
    <nav>Заполните форму</nav>
  </div>

  <!-- Вложенные divы -->
  <div class="wrapper">
    <div class="header">
      <div class="logo">IrRey</div>
    </div>
  </div>
  <p>Тут могла бы быть <span style="color: red;">ваша</span> реклама.</p>
  <p><b>Внимание:</b> Это лучшее что с вами случалось!</p>
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
.container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #988a8a;
  border-radius: 10px;
}
b {
  font-weight: bold;  /* или 700 */
}
</style>