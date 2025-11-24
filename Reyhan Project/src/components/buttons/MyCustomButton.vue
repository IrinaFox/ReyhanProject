<template>
  <button
      :style="buttonStyle"
      :disabled="disabled"
      class="custom-button"
      @click="$emit('click')"
  >
    <span v-if="icon">{{ icon }}</span>
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
      default: '#4CAF50'   // зелёный по умолчанию (как AddButton)
    },
    size: {
      type: [String, Number],
      default: 16
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''   // например: "➕" или "🗑️"
    }
  },

  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.color,
        fontSize: this.size + 'px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: this.disabled ? 'not-allowed' : 'pointer',
        opacity: this.disabled ? 0.6 : 1,
        color: 'white'
      }
    }
  }
}
</script>

<style scoped>
.custom-button:hover:not(:disabled) {
  opacity: 0.9;
}
</style>