<template>
  <button
      :style="buttonStyle"
      class="custom-button"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'MyCustomButton',
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue'
    },
    size: {
      type: [String, Number],
      default: '16'
    }
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.color,
        fontSize: `${this.size}px`,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px'
      };
    }
  }
};
</script>

<style scoped>
.custom-button {
  font-weight: bold;
  transition: opacity 0.3s;
}

.custom-button:hover {
  opacity: 0.8;
}

.custom-button:active {
  transform: scale(0.98);
}
</style>