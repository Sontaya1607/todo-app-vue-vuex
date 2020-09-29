<template lang="pug">
form(@submit.prevent="onSave")
  input(type="text" v-model="inputText")
  button(type="submit") Add todo
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      inputText: ''
    }
  },
  methods: {
    onSave () {
      this.$emit('onSave', this.inputText)
      this.inputText = ''
    }
  }
}
</script>
