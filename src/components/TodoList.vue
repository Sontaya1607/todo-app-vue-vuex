<template lang="pug">
ul
  li(v-for="item in items", :key="item.time")
    | {{ item.text | capitalize }}
    button(type="button", @click="itemDone(item.time)") Done
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    items: {
      type: Array
    }
  },
  filters: {
    capitalize (text) {
      return text.toUpperCase()
    }
  },
  methods: {
    itemDone (id) {
      this.$emit('onItemDone', id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
