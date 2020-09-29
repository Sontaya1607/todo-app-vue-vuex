import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem (state, item) {
      state.items.push(item)
    },
    itemDone (state, id) {
      state.items = state.items.map(el => {
        if (el.time === id) {
          el.complete = true
        }
        return el
      })
    },
    initItem (state, items) {
      state.items = items
    }
  },
  actions: {
  },
  modules: {
  }
})
