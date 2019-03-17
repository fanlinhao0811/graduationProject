import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    info: '',
    sidebar: ''
    // todos: [
    //   { id: 1, text: '...', done: true },
    //   { id: 2, text: '...', done: false }
    // ]
  },
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // },
    // doneTodosCount: (state, getters) => {
    //   return getters.doneTodos.length
    // }
  },
  mutations: {
    login (state, msg) {
      state.info = msg
      state.isLogin = true
    }
  },
  actions: {

  }
})
