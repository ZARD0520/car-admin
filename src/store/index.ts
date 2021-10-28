import { createStore } from 'vuex'

export default createStore({
  state: {
    loginDialog: false
  },
  mutations: {
    //登录框
    changeLogin(state, newValue) {
      state.loginDialog = newValue
      console.log(state.loginDialog);

    }
  },
  actions: {
  },
  modules: {
  }
})
