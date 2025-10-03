<script setup>

</script>

<template>
  <div class="user-form-container">
    <h2>Регистрационная форма</h2>
    <form class="form" @submit.prevent="submitForm">
      <!-- Имя -->
      <div class="form-group">
        <label>Имя</label>
        <input
            type="text"
            v-model="formData.firstName"
            :class="{ error: errors.firstName }"
        />
        <p v-if="errors.firstName" class="error-message">{{ errors.firstName }}</p>
      </div>

      <!-- Фамилия -->
      <div class="form-group">
        <label>Фамилия</label>
        <input
            type="text"
            v-model="formData.lastName"
            :class="{ error: errors.lastName }"
        />
        <p v-if="errors.lastName" class="error-message">{{ errors.lastName }}</p>
      </div>

      <!-- Возраст -->
      <div class="form-group">
        <label>Возраст</label>
        <input
            type="number"
            v-model="formData.age"
            :class="{ error: errors.age }"
        />
        <p v-if="errors.age" class="error-message">{{ errors.age }}</p>
      </div>

      <!-- Телефон -->
      <div class="form-group">
        <label>Телефон</label>
        <input
            type="tel"
            v-model="formData.phone"
            placeholder="+994..."
            :class="{ error: errors.phone }"
        />
        <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
      </div>

      <!-- Пол -->
      <div class="form-group">
        <label class="gender-label">Пол</label>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" value="Мужской" v-model="formData.gender" />
            Мужской
          </label>
          <label class="radio-label">
            <input type="radio" value="Женский" v-model="formData.gender" />
            Женский
          </label>
        </div>
        <p v-if="errors.gender" class="error-message">{{ errors.gender }}</p>
      </div>

      <!-- Кнопки -->
      <div class="button-group">
        <button type="submit" class="btn btn-primary">Отправить</button>
        <button type="button" class="btn btn-secondary" @click="resetForm">
          Очистить
        </button>
      </div>
    </form>
  </div>
</template>

  <script>
    export default {
      name: "UserForm",
      data() {
        return {
          formData: {
            firstName: "",
            lastName: "",
            age: "",
            phone: "",
            gender: "",
          },
          errors: {},
        };
      },
      methods: {
        validateForm() {
          const errors = {};

          if (!this.formData.firstName.trim()) {
            errors.firstName = "Имя обязательно для заполнения";
          }

          if (!this.formData.lastName.trim()) {
            errors.lastName = "Фамилия обязательна для заполнения";
          }

          if (!this.formData.age) {
            errors.age = "Возраст обязателен для заполнения";
          } else if (this.formData.age < 1 || this.formData.age > 120) {
            errors.age = "Возраст должен быть от 1 до 120 лет";
          }

          if (!this.formData.phone.trim()) {
            errors.phone = "Номер телефона обязателен для заполнения";
          } else if (!/^\+?[\d\s\-]{10,}$/.test(this.formData.phone.trim())) {
            errors.phone = "Введите корректный номер телефона";
          }

          if (!this.formData.gender) {
            errors.gender = "Выберите пол";
          }

          return errors;
        },

        submitForm() {
          this.errors = this.validateForm();

          if (Object.keys(this.errors).length === 0) {
            console.log("Данные формы:", this.formData);
            alert("Форма успешно отправлена! Данные выведены в консоль.");
          }
        },

        resetForm() {
          this.formData = {
            firstName: "",
            lastName: "",
            age: "",
            phone: "",
            gender: "",
          };
          this.errors = {};
        },
      },
    };
  </script>

  <style scoped>
    .user-form-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 24px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h2 {
      text-align: center;
      margin-bottom: 24px;
      color: #374151;
      font-size: 24px;
      font-weight: bold;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    label {
      font-size: 14px;
      font-weight: 500;
      color: #374151;
      margin-bottom: 4px;
    }

    .gender-label {
      margin-bottom: 8px;
    }

    input[type="text"],
    input[type="number"],
    input[type="tel"] {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
      transition: all 0.2s;
      box-sizing: border-box;
    }

    input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }

    input.error {
      border-color: #ef4444;
    }

    .radio-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .radio-label {
      display: flex;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
    }

    .radio-label input {
      margin-right: 8px;
      cursor: pointer;
    }

    .error-message {
      color: #ef4444;
      font-size: 12px;
      margin-top: 4px;
      margin-bottom: 0;
    }

    .button-group {
      display: flex;
      gap: 16px;
      margin-top: 16px;
    }

    .btn {
      flex: 1;
      padding: 10px 16px;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-primary {
      background-color: #3b82f6;
      color: white;
    }

    .btn-primary:hover {
      background-color: #2563eb;
    }

    .btn-secondary {
      background-color: #6b7280;
      color: white;
    }

    .btn-secondary:hover {
      background-color: #4b5563;
    }
  </style>

<style scoped>
.btn-secondary {
  background-color: black;
  width: 50%;
  height: auto;
  border-radius: 14px;
  color: white;
}

</style>