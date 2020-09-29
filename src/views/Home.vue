<template lang="pug">
  .home
    h1 Todo App
    <todo-list :items="sortedItem" @onItemDone="done"/>
    <input-form @onSave="save"/>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TodoList from '@/components/TodoList'
import InputForm from '@/components/InputForm'

export default {
  name: 'Home',
  components: {
    TodoList,
    InputForm
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['items']),
    sortedItem () {
      return this.items.slice(0).reverse().filter(item => item.complete === false)
    }
  },
  mounted () {
    this.initItem(JSON.parse(localStorage.getItem('todoItems')))
  },
  methods: {
    ...mapMutations(['initItem', 'addItem', 'itemDone']),
    done (id) {
      this.itemDone(id)
      localStorage.setItem('todoItems', JSON.stringify(this.items))
    },
    save (text) {
      this.addItem({
        text: text,
        time: Date.now(),
        complete: false
      })
      localStorage.setItem('todoItems', JSON.stringify(this.items))
    }
  }
}
</script>
