import { createStore } from 'vuex'

export default createStore({
  state: {
    loginDialog: false,
    registerDialog:false,
  },
  mutations: {
    //登录框
    changeLogin(state, newValue) {
      state.loginDialog = newValue
    },
    //注册框
    changeRegister(state,newValue){
      state.registerDialog = newValue
    }
  },
  actions: {
  },
  modules: {
  }
})
