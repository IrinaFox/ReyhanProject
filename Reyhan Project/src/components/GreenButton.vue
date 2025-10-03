<template>
  <button class="green">OK</button>
</template>

<script setup>

</script>


<style scoped>
.green {
  background: linear-gradient(145deg, #4dff94, #47cc00);
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 14px 32px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* ВЫПУКЛОСТЬ */
  box-shadow:
      inset -4px -4px 8px rgba(255, 255, 255, 0.3),
      inset 4px 4px 8px rgba(0, 0, 0, 0.3),
      0 6px 12px rgba(0, 0, 0, 0.3);

  /* Анимация пульсации */
  animation: pulse 1.5s infinite;
}

/* Hover – кнопка приподнимается */
.green:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow:
      inset -4px -4px 8px rgba(255, 255, 255, 0.4),
      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
      0 10px 16px rgba(0, 0, 0, 0.4);
}

/* Active – кнопка нажата */
.green:active {
  transform: translateY(2px) scale(0.98);
  box-shadow:
      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
      inset -4px -4px 8px rgba(255, 255, 255, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Анимация пульса */
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.3),
    inset 4px 4px 8px rgba(0, 0, 0, 0.3),
    0 6px 12px rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: scale(1.07);
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.4),
    inset 4px 4px 8px rgba(0, 0, 0, 0.4),
    0 12px 20px rgba(255, 77, 77, 0.6);
  }
  100% {
    transform: scale(1);
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.3),
    inset 4px 4px 8px rgba(0, 0, 0, 0.3),
    0 6px 12px rgba(0, 0, 0, 0.3);
  }
}
</style>