<script setup>
import { ref } from 'vue'
import CalculatorButton from './CalculatorButton.vue'

const display=ref("0")
const firstNumber = ref(null)
const operator = ref(null)

function addNumber(num){
  if (display.value==='0') {
    display.value=num
  } else {
    display.value = display.value + num
  }
}

function clearDisplay() {
  display.value = "0"
  firstNumber.value = null
  operator.value = null
}

function setOperator(op) {
  firstNumber.value = Number(display.value)
  operator.value = op
  display.value = "0"
}

function calculate() {
  const secondNumber = Number(display.value)
  if (operator.value === "+") {
    display.value = String(firstNumber.value + secondNumber)
  }

  if (operator.value === "-") {
    display.value = String(firstNumber.value - secondNumber)
  }

  if (operator.value === "*") {
    display.value = String(firstNumber.value * secondNumber)
  }

  if (operator.value === "/") {
    display.value = secondNumber === 0
        ? "Ошибка"
        : String(firstNumber.value / secondNumber)
  }

  operator.value = null
  firstNumber.value = null
}
</script>

<template>
  <div class="calculator">
    <h2>Калькулятор</h2>

    <div class="display">
      {{ display }}
    </div>

    <div class="buttons">
      <!-- цифры -->
      <CalculatorButton label="1" @press="addNumber" />
      <CalculatorButton label="2" @press="addNumber" />
      <CalculatorButton label="3" @press="addNumber" />
      <CalculatorButton label="+" @press="setOperator" />

      <CalculatorButton label="4" @press="addNumber" />
      <CalculatorButton label="5" @press="addNumber" />
      <CalculatorButton label="6" @press="addNumber" />
      <CalculatorButton label="-" @press="setOperator" />

      <CalculatorButton label="7" @press="addNumber" />
      <CalculatorButton label="8" @press="addNumber" />
      <CalculatorButton label="9" @press="addNumber" />
      <CalculatorButton label="*" @press="setOperator" />

      <CalculatorButton label="0" @press="addNumber" />
      <CalculatorButton label="C" @press="clearDisplay" />
      <CalculatorButton label="=" @press="calculate" />
      <CalculatorButton label="/" @press="setOperator" />
    </div>
  </div>
</template>

<style scoped>
.calculator {
  width: 280px;
  margin: 50px auto;
  border-radius: 15px;
  padding: 20px;
  background: linear-gradient(145deg, #e0e0e0, #ffffff);
  box-shadow: 5px 5px 15px #aaa, -5px -5px 15px #fff;
}

.display {
  height: 70px;
  background: #222;
  color: #fff;
  font-size: 2.2rem;
  text-align: right;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow-x: auto;
  box-shadow: inset 2px 2px 5px #00000080;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
}

</style>