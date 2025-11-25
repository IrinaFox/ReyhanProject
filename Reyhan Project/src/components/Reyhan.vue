
<template>
  <div>
    <input type="radio" name="answer" value="yes"> Да
    <input type="radio" name="answer" value="no"> Нет

    <input type="email" placeholder="Введите почту">
    ...
  </div>
  <div>
    <!-- Используем MyCustomButton вместо старых кнопок -->
    <MyCustomButton text="Отправить" color="blue" size="18" />
    <MyCustomButton text="Да" color="green" size="16" />
    <MyCustomButton text="Нет" color="red" size="16" />
    <MyCustomButton text="Купить" color="orange" size="20" />
  </div>
  <div class="container">
    <div>{{myCat}} {{myDog}}</div>
    <h1>Здравствуй Дедушка Мороз</h1>
    <MyCustomButton></MyCustomButton>
    <p>Здравствуй Дедушка Мороз,борода из ваты.
    Ты подарки нам принес?</p>
    <input type="radio" name="answer" value="yes"> Да
    <input type="radio" name="answer" value="no"> Нет
    <input type="button" class="blue-btn" onclick="alert('Ваш ответ принят!')" value="Отправить">
    <input type="text" placeholder="Привет">
    <input type="email" placeholder="введите почту">
    <input type="password" placeholder="Пароль">
    <input type="tel" placeholder="+994...">
    <input type="url" placeholder="https://example.com">
    <input type="search" placeholder="Поиск...">
    <input type="number" min="18" max="100" step="1" placeholder="age">
    <input type="range" min="0" max="100" value="50">
    <input type="date">
    <input type="time">
    <input type="datetime-local">
    <input type="month">
    <input type="week">
    <input type="color" value="#ff0000">
    <input type="file">
    <input type="file" multiple>
    <input type="file" accept="image/*">
    <input type="checkbox" id="check1">
    <label for="check1">Согласен</label>
    <input type="reset" value="Очистить">
    <input type="image" src="button.png" alt="Submit">
    <input type="hidden" name="userId" value="123">
  </div>
  <div>
      <h2>Добро пожаловать</h2>
      <div>{{ text }}</div>
  </div>
</template>

<script>
import MyCustomButton from './buttons/MyCustomButton.vue';

export default {
  name: "Reyhan",
  components: {MyCustomButton},
  props: {
    text: {
      type: String,
      required: true
    },
    myCat: {
      type: String,
      required: true
    },
    myDog: {
      type: String,
      required: false
    }
  }
}
</script>
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